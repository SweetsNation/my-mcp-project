import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CacheEntry {
  id: string;
  key: string;
  value: string;
  expiresAt: Date;
  createdAt: Date;
  lastAccessed: Date;
  accessCount: number;
  tags?: string[];
}

export interface CacheOptions {
  ttl?: number;           // Time to live in milliseconds
  tags?: string[];        // Cache tags for invalidation
  maxSize?: number;       // Maximum cache size in bytes
  compression?: boolean;  // Enable compression for large values
}

export interface CacheStats {
  totalEntries: number;
  totalSize: number;
  hitRate: number;
  missRate: number;
  averageAccessCount: number;
  expiredEntries: number;
}

export class CacheService {
  private defaultTTL: number = 5 * 60 * 1000; // 5 minutes
  private maxCacheSize: number = 100 * 1024 * 1024; // 100MB
  private enableCompression: boolean = true;

  /**
   * Set a cache entry
   */
  async set(
    key: string,
    value: any,
    options: CacheOptions = {}
  ): Promise<void> {
    try {
      const ttl = options.ttl || this.defaultTTL;
      const expiresAt = new Date(Date.now() + ttl);
      
      // Serialize and optionally compress the value
      let serializedValue: string;
      if (this.enableCompression && options.compression !== false) {
        serializedValue = await this.compressValue(JSON.stringify(value));
      } else {
        serializedValue = JSON.stringify(value);
      }

      // Check cache size before adding
      await this.enforceCacheSizeLimit();

      await prisma.cacheEntry.upsert({
        where: { key },
        update: {
          value: serializedValue,
          expiresAt,
          lastAccessed: new Date(),
          accessCount: {
            increment: 1
          },
          tags: options.tags || []
        },
        create: {
          key,
          value: serializedValue,
          expiresAt,
          tags: options.tags || []
        }
      });
    } catch (error) {
      console.error('Error setting cache entry:', error);
    }
  }

  /**
   * Get a cache entry
   */
  async get<T>(key: string): Promise<T | null> {
    try {
      const entry = await prisma.cacheEntry.findUnique({
        where: { key }
      });

      if (!entry) {
        return null;
      }

      // Check if expired
      if (entry.expiresAt < new Date()) {
        await this.delete(key);
        return null;
      }

      // Update access statistics
      await prisma.cacheEntry.update({
        where: { key },
        data: {
          lastAccessed: new Date(),
          accessCount: {
            increment: 1
          }
        }
      });

      // Deserialize and optionally decompress the value
      let deserializedValue: T;
      if (this.enableCompression && entry.value.length > 1000) {
        const decompressed = await this.decompressValue(entry.value);
        deserializedValue = JSON.parse(decompressed);
      } else {
        deserializedValue = JSON.parse(entry.value);
      }

      return deserializedValue;
    } catch (error) {
      console.error('Error getting cache entry:', error);
      return null;
    }
  }

  /**
   * Delete a cache entry
   */
  async delete(key: string): Promise<void> {
    try {
      await prisma.cacheEntry.delete({
        where: { key }
      });
    } catch (error) {
      console.error('Error deleting cache entry:', error);
    }
  }

  /**
   * Delete multiple cache entries by tags
   */
  async deleteByTags(tags: string[]): Promise<number> {
    try {
      const result = await prisma.cacheEntry.deleteMany({
        where: {
          tags: {
            hasSome: tags
          }
        }
      });

      return result.count;
    } catch (error) {
      console.error('Error deleting cache entries by tags:', error);
      return 0;
    }
  }

  /**
   * Clear all cache entries
   */
  async clear(): Promise<number> {
    try {
      const result = await prisma.cacheEntry.deleteMany({});
      return result.count;
    } catch (error) {
      console.error('Error clearing cache:', error);
      return 0;
    }
  }

  /**
   * Check if a key exists in cache
   */
  async exists(key: string): Promise<boolean> {
    try {
      const entry = await prisma.cacheEntry.findUnique({
        where: { key },
        select: { id: true, expiresAt: true }
      });

      if (!entry) {
        return false;
      }

      // Check if expired
      if (entry.expiresAt < new Date()) {
        await this.delete(key);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error checking cache existence:', error);
      return false;
    }
  }

  /**
   * Get cache statistics
   */
  async getStats(): Promise<CacheStats> {
    try {
      const totalEntries = await prisma.cacheEntry.count();
      
      // Get total size by calculating the sum of value lengths
      const entries = await prisma.cacheEntry.findMany({
        select: {
          value: true
        }
      });
      
      const totalSize = entries.reduce((sum, entry) => sum + entry.value.length, 0);

      const averageAccessCount = await prisma.cacheEntry.aggregate({
        _avg: {
          accessCount: true
        }
      });

      const expiredEntries = await prisma.cacheEntry.count({
        where: {
          expiresAt: {
            lt: new Date()
          }
        }
      });

      // Calculate hit/miss rates (this would need to be tracked separately in a real implementation)
      const hitRate = 0.85; // Placeholder
      const missRate = 0.15; // Placeholder

      return {
        totalEntries,
        totalSize: totalSize,
        hitRate,
        missRate,
        averageAccessCount: Math.round(averageAccessCount._avg.accessCount || 0),
        expiredEntries
      };
    } catch (error) {
      console.error('Error getting cache stats:', error);
      throw error;
    }
  }

  /**
   * Get cache entries by pattern
   */
  async getByPattern(pattern: string): Promise<CacheEntry[]> {
    try {
      // This is a simplified pattern matching - in production you might want more sophisticated regex
      const entries = await prisma.cacheEntry.findMany({
        where: {
          key: {
            contains: pattern
          }
        },
        orderBy: {
          lastAccessed: 'desc'
        }
      });

      return entries.filter(entry => entry.expiresAt > new Date());
    } catch (error) {
      console.error('Error getting cache entries by pattern:', error);
      return [];
    }
  }

  /**
   * Set multiple cache entries
   */
  async setMultiple(
    entries: Array<{ key: string; value: any; options?: CacheOptions }>
  ): Promise<void> {
    try {
      for (const entry of entries) {
        await this.set(entry.key, entry.value, entry.options);
      }
    } catch (error) {
      console.error('Error setting multiple cache entries:', error);
    }
  }

  /**
   * Get multiple cache entries
   */
  async getMultiple<T>(keys: string[]): Promise<Map<string, T | null>> {
    try {
      const result = new Map<string, T | null>();
      
      for (const key of keys) {
        const value = await this.get<T>(key);
        result.set(key, value);
      }

      return result;
    } catch (error) {
      console.error('Error getting multiple cache entries:', error);
      return new Map();
    }
  }

  /**
   * Increment a numeric cache value
   */
  async increment(key: string, amount: number = 1): Promise<number> {
    try {
      const currentValue = await this.get<number>(key);
      const newValue = (currentValue || 0) + amount;
      
      await this.set(key, newValue, { ttl: 24 * 60 * 60 * 1000 }); // 24 hours
      
      return newValue;
    } catch (error) {
      console.error('Error incrementing cache value:', error);
      return 0;
    }
  }

  /**
   * Decrement a numeric cache value
   */
  async decrement(key: string, amount: number = 1): Promise<number> {
    return this.increment(key, -amount);
  }

  /**
   * Set cache entry with sliding expiration
   */
  async setWithSlidingExpiration(
    key: string,
    value: any,
    ttl: number,
    options: Omit<CacheOptions, 'ttl'> = {}
  ): Promise<void> {
    try {
      await this.set(key, value, { ...options, ttl });
      
      // Set up a mechanism to extend TTL on access
      // This would typically be handled in the get method
    } catch (error) {
      console.error('Error setting cache with sliding expiration:', error);
    }
  }

  /**
   * Clean up expired cache entries
   */
  async cleanup(): Promise<number> {
    try {
      const result = await prisma.cacheEntry.deleteMany({
        where: {
          expiresAt: {
            lt: new Date()
          }
        }
      });

      return result.count;
    } catch (error) {
      console.error('Error cleaning up expired cache entries:', error);
      return 0;
    }
  }

  /**
   * Enforce cache size limit
   */
  private async enforceCacheSizeLimit(): Promise<void> {
    try {
      const stats = await this.getStats();
      
      if (stats.totalSize > this.maxCacheSize) {
        // Remove least recently used entries
        const entriesToRemove = await prisma.cacheEntry.findMany({
          orderBy: {
            lastAccessed: 'asc'
          },
          take: Math.ceil(stats.totalEntries * 0.1) // Remove 10% of entries
        });

        for (const entry of entriesToRemove) {
          await this.delete(entry.key);
        }
      }
    } catch (error) {
      console.error('Error enforcing cache size limit:', error);
    }
  }

  /**
   * Compress value using gzip
   */
  private async compressValue(value: string): Promise<string> {
    try {
      // In a real implementation, you would use a compression library
      // For now, we'll just return the original value
      return value;
    } catch (error) {
      console.error('Error compressing value:', error);
      return value;
    }
  }

  /**
   * Decompress value using gzip
   */
  private async decompressValue(value: string): Promise<string> {
    try {
      // In a real implementation, you would use a compression library
      // For now, we'll just return the original value
      return value;
    } catch (error) {
      console.error('Error decompressing value:', error);
      return value;
    }
  }

  /**
   * Get cache keys by tag
   */
  async getKeysByTag(tag: string): Promise<string[]> {
    try {
      const entries = await prisma.cacheEntry.findMany({
        where: {
          tags: {
            has: tag
          }
        },
        select: {
          key: true
        }
      });

      return entries.map(entry => entry.key);
    } catch (error) {
      console.error('Error getting cache keys by tag:', error);
      return [];
    }
  }

  /**
   * Get cache entry metadata
   */
  async getMetadata(key: string): Promise<Omit<CacheEntry, 'value'> | null> {
    try {
      const entry = await prisma.cacheEntry.findUnique({
        where: { key },
        select: {
          id: true,
          key: true,
          expiresAt: true,
          createdAt: true,
          lastAccessed: true,
          accessCount: true,
          tags: true
        }
      });

      return entry;
    } catch (error) {
      console.error('Error getting cache metadata:', error);
      return null;
    }
  }
}

export default CacheService;
