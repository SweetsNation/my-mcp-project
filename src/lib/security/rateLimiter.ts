import { prisma } from '../database/client';

export interface RateLimitConfig {
  windowMs: number;        // Time window in milliseconds
  maxRequests: number;     // Maximum requests per window
  skipSuccessfulRequests?: boolean; // Skip rate limiting for successful requests
  skipFailedRequests?: boolean;     // Skip rate limiting for failed requests
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: Date;
  retryAfter?: number;
}

export class RateLimiter {
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  /**
   * Check if a request is allowed based on rate limiting
   */
  async checkRateLimit(
    identifier: string, // IP address, user ID, or other identifier
    endpoint?: string   // Optional endpoint for granular rate limiting
  ): Promise<RateLimitResult> {
    try {
      const now = new Date();
      const windowStart = new Date(now.getTime() - this.config.windowMs);

      // Get or create rate limit record
      const rateLimitRecord = await prisma.rateLimit.upsert({
        where: {
          identifier_endpoint: {
            identifier,
            endpoint: endpoint || 'default'
          }
        },
        update: {
          requestCount: {
            increment: 1
          },
          lastRequest: now
        },
        create: {
          identifier,
          endpoint: endpoint || 'default',
          requestCount: 1,
          firstRequest: now,
          lastRequest: now
        }
      });

      // Check if we're within the current window
      if (rateLimitRecord.firstRequest < windowStart) {
        // Reset for new window
        await prisma.rateLimit.update({
          where: {
            identifier_endpoint: {
              identifier,
              endpoint: endpoint || 'default'
            }
          },
          data: {
            requestCount: 1,
            firstRequest: now,
            lastRequest: now
          }
        });

        return {
          allowed: true,
          remaining: this.config.maxRequests - 1,
          resetTime: new Date(now.getTime() + this.config.windowMs)
        };
      }

      // Check if request count exceeds limit
      if (rateLimitRecord.requestCount > this.config.maxRequests) {
        const resetTime = new Date(rateLimitRecord.firstRequest.getTime() + this.config.windowMs);
        const retryAfter = Math.ceil((resetTime.getTime() - now.getTime()) / 1000);

        return {
          allowed: false,
          remaining: 0,
          resetTime,
          retryAfter
        };
      }

      // Request is allowed
      const remaining = this.config.maxRequests - rateLimitRecord.requestCount;
      const resetTime = new Date(rateLimitRecord.firstRequest.getTime() + this.config.windowMs);

      return {
        allowed: true,
        remaining,
        resetTime
      };
    } catch (error) {
      console.error('Error checking rate limit:', error);
      // In case of error, allow the request but log it
      return {
        allowed: true,
        remaining: this.config.maxRequests - 1,
        resetTime: new Date(Date.now() + this.config.windowMs)
      };
    }
  }

  /**
   * Reset rate limit for a specific identifier
   */
  async resetRateLimit(identifier: string, endpoint?: string): Promise<void> {
    try {
      await prisma.rateLimit.delete({
        where: {
          identifier_endpoint: {
            identifier,
            endpoint: endpoint || 'default'
          }
        }
      });
    } catch (error) {
      console.error('Error resetting rate limit:', error);
    }
  }

  /**
   * Get rate limit status for an identifier
   */
  async getRateLimitStatus(
    identifier: string,
    endpoint?: string
  ): Promise<{
    currentCount: number;
    limit: number;
    remaining: number;
    resetTime: Date | null;
    isBlocked: boolean;
  }> {
    try {
      const record = await prisma.rateLimit.findUnique({
        where: {
          identifier_endpoint: {
            identifier,
            endpoint: endpoint || 'default'
          }
        }
      });

      if (!record) {
        return {
          currentCount: 0,
          limit: this.config.maxRequests,
          remaining: this.config.maxRequests,
          resetTime: null,
          isBlocked: false
        };
      }

      const now = new Date();
      const windowStart = new Date(now.getTime() - this.config.windowMs);
      const isInCurrentWindow = record.firstRequest >= windowStart;

      if (!isInCurrentWindow) {
        return {
          currentCount: 0,
          limit: this.config.maxRequests,
          remaining: this.config.maxRequests,
          resetTime: null,
          isBlocked: false
        };
      }

      const resetTime = new Date(record.firstRequest.getTime() + this.config.windowMs);
      const remaining = Math.max(0, this.config.maxRequests - record.requestCount);
      const isBlocked = record.requestCount > this.config.maxRequests;

      return {
        currentCount: record.requestCount,
        limit: this.config.maxRequests,
        remaining,
        resetTime,
        isBlocked
      };
    } catch (error) {
      console.error('Error getting rate limit status:', error);
      return {
        currentCount: 0,
        limit: this.config.maxRequests,
        remaining: this.config.maxRequests,
        resetTime: null,
        isBlocked: false
      };
    }
  }

  /**
   * Clean up expired rate limit records
   */
  async cleanupExpiredRecords(): Promise<number> {
    try {
      const cutoffTime = new Date(Date.now() - this.config.windowMs);
      
      const result = await prisma.rateLimit.deleteMany({
        where: {
          lastRequest: {
            lt: cutoffTime
          }
        }
      });

      return result.count;
    } catch (error) {
      console.error('Error cleaning up expired rate limit records:', error);
      return 0;
    }
  }

  /**
   * Get rate limit statistics
   */
  async getStatistics(): Promise<{
    totalRecords: number;
    blockedIdentifiers: number;
    averageRequestsPerWindow: number;
  }> {
    try {
      const totalRecords = await prisma.rateLimit.count();
      
      const blockedRecords = await prisma.rateLimit.count({
        where: {
          requestCount: {
            gt: this.config.maxRequests
          }
        }
      });

      const totalRequests = await prisma.rateLimit.aggregate({
        _sum: {
          requestCount: true
        }
      });

      const averageRequestsPerWindow = totalRecords > 0 
        ? (totalRequests._sum.requestCount || 0) / totalRecords 
        : 0;

      return {
        totalRecords,
        blockedIdentifiers: blockedRecords,
        averageRequestsPerWindow: Math.round(averageRequestsPerWindow * 100) / 100
      };
    } catch (error) {
      console.error('Error getting rate limit statistics:', error);
      return {
        totalRecords: 0,
        blockedIdentifiers: 0,
        averageRequestsPerWindow: 0
      };
    }
  }
}

// Predefined rate limit configurations
export const RateLimitConfigs = {
  // Strict rate limiting for authentication endpoints
  AUTH: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5,            // 5 requests per 15 minutes
    skipSuccessfulRequests: false,
    skipFailedRequests: false
  },

  // Moderate rate limiting for API endpoints
  API: {
    windowMs: 60 * 1000,      // 1 minute
    maxRequests: 60,           // 60 requests per minute
    skipSuccessfulRequests: true,
    skipFailedRequests: false
  },

  // Relaxed rate limiting for general endpoints
  GENERAL: {
    windowMs: 60 * 1000,      // 1 minute
    maxRequests: 100,          // 100 requests per minute
    skipSuccessfulRequests: true,
    skipFailedRequests: true
  },

  // File upload rate limiting
  UPLOAD: {
    windowMs: 60 * 1000,      // 1 minute
    maxRequests: 10,           // 10 uploads per minute
    skipSuccessfulRequests: false,
    skipFailedRequests: false
  }
};

export default RateLimiter;
