import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface PerformanceMetric {
  id: string;
  endpoint: string;
  method: string;
  responseTime: number;
  statusCode: number;
  userId?: string | null;
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
  memoryUsage?: number | null;
  cpuUsage?: number | null;
}

export interface PerformanceStats {
  averageResponseTime: number;
  totalRequests: number;
  successRate: number;
  errorRate: number;
  slowestEndpoint: string;
  fastestEndpoint: string;
  peakResponseTime: number;
  lowResponseTime: number;
}

export interface EndpointPerformance {
  endpoint: string;
  method: string;
  averageResponseTime: number;
  totalRequests: number;
  successCount: number;
  errorCount: number;
  lastRequest: Date;
  performanceScore: number;
}

export class PerformanceMonitor {
  /**
   * Record a performance metric
   */
  async recordMetric(metric: Omit<PerformanceMetric, 'id' | 'timestamp'>): Promise<void> {
    try {
      await prisma.performanceMetric.create({
        data: {
          ...metric,
          timestamp: new Date()
        }
      });
    } catch (error) {
      console.error('Error recording performance metric:', error);
    }
  }

  /**
   * Get performance statistics for a time period
   */
  async getPerformanceStats(
    startTime: Date,
    endTime: Date
  ): Promise<PerformanceStats> {
    try {
      const metrics = await prisma.performanceMetric.findMany({
        where: {
          timestamp: {
            gte: startTime,
            lte: endTime
          }
        }
      });

      if (metrics.length === 0) {
        return {
          averageResponseTime: 0,
          totalRequests: 0,
          successRate: 0,
          errorRate: 0,
          slowestEndpoint: '',
          fastestEndpoint: '',
          peakResponseTime: 0,
          lowResponseTime: 0
        };
      }

      const totalRequests = metrics.length;
      const successCount = metrics.filter(m => m.statusCode < 400).length;
      const errorCount = totalRequests - successCount;
      
      const responseTimes = metrics.map(m => m.responseTime);
      const averageResponseTime = responseTimes.reduce((a, b) => a + b, 0) / totalRequests;
      const peakResponseTime = Math.max(...responseTimes);
      const lowResponseTime = Math.min(...responseTimes);

      // Find slowest and fastest endpoints
      const endpointStats = this.calculateEndpointStats(metrics);
      const slowestEndpoint = endpointStats.slowest?.endpoint || '';
      const fastestEndpoint = endpointStats.fastest?.endpoint || '';

      return {
        averageResponseTime: Math.round(averageResponseTime * 100) / 100,
        totalRequests,
        successRate: Math.round((successCount / totalRequests) * 100 * 100) / 100,
        errorRate: Math.round((errorCount / totalRequests) * 100 * 100) / 100,
        slowestEndpoint,
        fastestEndpoint,
        peakResponseTime,
        lowResponseTime
      };
    } catch (error) {
      console.error('Error getting performance stats:', error);
      throw error;
    }
  }

  /**
   * Get endpoint-specific performance data
   */
  async getEndpointPerformance(
    startTime: Date,
    endTime: Date
  ): Promise<EndpointPerformance[]> {
    try {
      const metrics = await prisma.performanceMetric.findMany({
        where: {
          timestamp: {
            gte: startTime,
            lte: endTime
          }
        },
        orderBy: {
          timestamp: 'desc'
        }
      });

      const endpointMap = new Map<string, EndpointPerformance>();

      metrics.forEach(metric => {
        const key = `${metric.method}:${metric.endpoint}`;
        
        if (!endpointMap.has(key)) {
          endpointMap.set(key, {
            endpoint: metric.endpoint,
            method: metric.method,
            averageResponseTime: 0,
            totalRequests: 0,
            successCount: 0,
            errorCount: 0,
            lastRequest: metric.timestamp,
            performanceScore: 0
          });
        }

        const existing = endpointMap.get(key)!;
        existing.totalRequests++;
        existing.averageResponseTime = 
          (existing.averageResponseTime * (existing.totalRequests - 1) + metric.responseTime) / existing.totalRequests;
        
        if (metric.statusCode < 400) {
          existing.successCount++;
        } else {
          existing.errorCount++;
        }

        if (metric.timestamp > existing.lastRequest) {
          existing.lastRequest = metric.timestamp;
        }
      });

      // Calculate performance scores and sort by score
      const results = Array.from(endpointMap.values()).map(endpoint => {
        const successRate = endpoint.totalRequests > 0 ? endpoint.successCount / endpoint.totalRequests : 0;
        const responseTimeScore = Math.max(0, 100 - endpoint.averageResponseTime / 10); // Lower response time = higher score
        const successRateScore = successRate * 100;
        
        endpoint.performanceScore = Math.round((responseTimeScore + successRateScore) / 2);
        return endpoint;
      });

      return results.sort((a, b) => b.performanceScore - a.performanceScore);
    } catch (error) {
      console.error('Error getting endpoint performance:', error);
      throw error;
    }
  }

  /**
   * Get performance trends over time
   */
  async getPerformanceTrends(
    startTime: Date,
    endTime: Date,
    interval: 'hour' | 'day' | 'week' = 'hour'
  ): Promise<{
    timestamp: Date;
    averageResponseTime: number;
    requestCount: number;
    successRate: number;
  }[]> {
    try {
      const metrics = await prisma.performanceMetric.findMany({
        where: {
          timestamp: {
            gte: startTime,
            lte: endTime
          }
        },
        orderBy: {
          timestamp: 'asc'
        }
      });

      const intervalMs = this.getIntervalMs(interval);
      const trends: Map<number, {
        timestamp: Date;
        responseTimes: number[];
        requestCount: number;
        successCount: number;
      }> = new Map();

      metrics.forEach(metric => {
        const intervalKey = Math.floor(metric.timestamp.getTime() / intervalMs) * intervalMs;
        
        if (!trends.has(intervalKey)) {
          trends.set(intervalKey, {
            timestamp: new Date(intervalKey),
            responseTimes: [],
            requestCount: 0,
            successCount: 0
          });
        }

        const trend = trends.get(intervalKey)!;
        trend.responseTimes.push(metric.responseTime);
        trend.requestCount++;
        
        if (metric.statusCode < 400) {
          trend.successCount++;
        }
      });

      return Array.from(trends.values())
        .map(trend => ({
          timestamp: trend.timestamp,
          averageResponseTime: Math.round(
            (trend.responseTimes.reduce((a, b) => a + b, 0) / trend.responseTimes.length) * 100
          ) / 100,
          requestCount: trend.requestCount,
          successRate: Math.round((trend.successCount / trend.requestCount) * 100 * 100) / 100
        }))
        .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    } catch (error) {
      console.error('Error getting performance trends:', error);
      throw error;
    }
  }

  /**
   * Get slow queries (endpoints with high response times)
   */
  async getSlowQueries(
    threshold: number = 1000, // 1 second threshold
    limit: number = 10
  ): Promise<PerformanceMetric[]> {
    try {
      return await prisma.performanceMetric.findMany({
        where: {
          responseTime: {
            gte: threshold
          }
        },
        orderBy: {
          responseTime: 'desc'
        },
        take: limit
      });
    } catch (error) {
      console.error('Error getting slow queries:', error);
      throw error;
    }
  }

  /**
   * Get error patterns
   */
  async getErrorPatterns(
    startTime: Date,
    endTime: Date
  ): Promise<{
    statusCode: number;
    count: number;
    percentage: number;
    endpoints: string[];
  }[]> {
    try {
      const metrics = await prisma.performanceMetric.findMany({
        where: {
          timestamp: {
            gte: startTime,
            lte: endTime
          },
          statusCode: {
            gte: 400
          }
        }
      });

      const errorMap = new Map<number, {
        statusCode: number;
        count: number;
        endpoints: Set<string>;
      }>();

      metrics.forEach(metric => {
        if (!errorMap.has(metric.statusCode)) {
          errorMap.set(metric.statusCode, {
            statusCode: metric.statusCode,
            count: 0,
            endpoints: new Set()
          });
        }

        const error = errorMap.get(metric.statusCode)!;
        error.count++;
        error.endpoints.add(metric.endpoint);
      });

      const totalErrors = metrics.length;
      
      return Array.from(errorMap.values())
        .map(error => ({
          statusCode: error.statusCode,
          count: error.count,
          percentage: Math.round((error.count / totalErrors) * 100 * 100) / 100,
          endpoints: Array.from(error.endpoints)
        }))
        .sort((a, b) => b.count - a.count);
    } catch (error) {
      console.error('Error getting error patterns:', error);
      throw error;
    }
  }

  /**
   * Clean up old performance metrics
   */
  async cleanupOldMetrics(olderThan: Date): Promise<number> {
    try {
      const result = await prisma.performanceMetric.deleteMany({
        where: {
          timestamp: {
            lt: olderThan
          }
        }
      });

      return result.count;
    } catch (error) {
      console.error('Error cleaning up old metrics:', error);
      return 0;
    }
  }

  /**
   * Get system resource usage statistics
   */
  async getResourceUsageStats(
    startTime: Date,
    endTime: Date
  ): Promise<{
    averageMemoryUsage: number;
    averageCpuUsage: number;
    peakMemoryUsage: number;
    peakCpuUsage: number;
    lowMemoryUsage: number;
    lowCpuUsage: number;
  }> {
    try {
      const metrics = await prisma.performanceMetric.findMany({
        where: {
          timestamp: {
            gte: startTime,
            lte: endTime
          },
          memoryUsage: {
            not: null
          },
          cpuUsage: {
            not: null
          }
        },
        select: {
          memoryUsage: true,
          cpuUsage: true
        }
      });

      if (metrics.length === 0) {
        return {
          averageMemoryUsage: 0,
          averageCpuUsage: 0,
          peakMemoryUsage: 0,
          peakCpuUsage: 0,
          lowMemoryUsage: 0,
          lowCpuUsage: 0
        };
      }

      const memoryUsage = metrics.map(m => m.memoryUsage!).filter(m => m > 0);
      const cpuUsage = metrics.map(m => m.cpuUsage!).filter(c => c > 0);

      return {
        averageMemoryUsage: Math.round(
          (memoryUsage.reduce((a, b) => a + b, 0) / memoryUsage.length) * 100
        ) / 100,
        averageCpuUsage: Math.round(
          (cpuUsage.reduce((a, b) => a + b, 0) / cpuUsage.length) * 100
        ) / 100,
        peakMemoryUsage: Math.max(...memoryUsage),
        peakCpuUsage: Math.max(...cpuUsage),
        lowMemoryUsage: Math.min(...memoryUsage),
        lowCpuUsage: Math.min(...cpuUsage)
      };
    } catch (error) {
      console.error('Error getting resource usage stats:', error);
      throw error;
    }
  }

  /**
   * Calculate endpoint statistics
   */
  private calculateEndpointStats(metrics: PerformanceMetric[]): {
    slowest?: { endpoint: string; responseTime: number };
    fastest?: { endpoint: string; responseTime: number };
  } {
    if (metrics.length === 0) {
      return {};
    }

    let slowest = { endpoint: '', responseTime: 0 };
    let fastest = { endpoint: '', responseTime: Number.MAX_VALUE };

    metrics.forEach(metric => {
      if (metric.responseTime > slowest.responseTime) {
        slowest = { endpoint: metric.endpoint, responseTime: metric.responseTime };
      }
      if (metric.responseTime < fastest.responseTime) {
        fastest = { endpoint: metric.endpoint, responseTime: metric.responseTime };
      }
    });

    return { slowest, fastest };
  }

  /**
   * Get interval milliseconds
   */
  private getIntervalMs(interval: 'hour' | 'day' | 'week'): number {
    switch (interval) {
      case 'hour':
        return 60 * 60 * 1000;
      case 'day':
        return 24 * 60 * 60 * 1000;
      case 'week':
        return 7 * 24 * 60 * 60 * 1000;
      default:
        return 60 * 60 * 1000;
    }
  }
}

export default PerformanceMonitor;
