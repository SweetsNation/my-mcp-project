import { PrismaClient, $Enums } from '@prisma/client';

const prisma = new PrismaClient();

// Use Prisma-generated enums
export const SecurityEventType = $Enums.SecurityEventType;
export const SecuritySeverity = $Enums.SecuritySeverity;

export interface SecurityEvent {
  id: string;
  userId?: string | null;
  eventType: $Enums.SecurityEventType;
  severity: $Enums.SecuritySeverity;
  description: string;
  ipAddress: string;
  userAgent: string;
  metadata: any;
  timestamp: Date;
  resolved: boolean;
  resolvedAt?: Date | null;
  resolvedBy?: string | null;
}

export interface SecurityAlert {
  id: string;
  title: string;
  description: string;
  severity: $Enums.SecuritySeverity;
  eventCount: number;
  firstOccurrence: Date;
  lastOccurrence: Date;
  status: any; // Use Prisma-generated type
  assignedTo?: string | null;
  notes?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface SecurityMetrics {
  totalEvents: number;
  eventsByType: Record<string, number>;
  eventsBySeverity: Record<string, number>;
  eventsByHour: Record<string, number>;
  topIPAddresses: Array<{ ip: string; count: number }>;
  topUserAgents: Array<{ userAgent: string; count: number }>;
  averageEventsPerHour: number;
  peakEventsPerHour: number;
}


export class SecurityAuditService {
  /**
   * Record a security event
   */
  async recordEvent(event: Omit<SecurityEvent, 'id' | 'timestamp' | 'resolved'>): Promise<void> {
    try {
      await prisma.securityEvent.create({
        data: {
          ...event,
          timestamp: new Date(),
          resolved: false
        }
      });

      // Check if this event should trigger an alert
      await this.checkForAlerts(event);
    } catch (error) {
      console.error('Error recording security event:', error);
    }
  }

  /**
   * Get security events with filtering
   */
  async getEvents(
    filters: {
      userId?: string;
      eventType?: typeof SecurityEventType[keyof typeof SecurityEventType];
      severity?: typeof SecuritySeverity[keyof typeof SecuritySeverity];
      startDate?: Date;
      endDate?: Date;
      resolved?: boolean;
      ipAddress?: string;
    } = {},
    limit: number = 100,
    offset: number = 0
  ): Promise<SecurityEvent[]> {
    try {
      const where: any = {};

      if (filters.userId) where.userId = filters.userId;
      if (filters.eventType) where.eventType = filters.eventType;
      if (filters.severity) where.severity = filters.severity;
      if (filters.resolved !== undefined) where.resolved = filters.resolved;
      if (filters.ipAddress) where.ipAddress = filters.ipAddress;

      if (filters.startDate || filters.endDate) {
        where.timestamp = {};
        if (filters.startDate) where.timestamp.gte = filters.startDate;
        if (filters.endDate) where.timestamp.lte = filters.endDate;
      }

      return await prisma.securityEvent.findMany({
        where,
        orderBy: {
          timestamp: 'desc'
        },
        take: limit,
        skip: offset
      });
    } catch (error) {
      console.error('Error getting security events:', error);
      return [];
    }
  }

  /**
   * Get security metrics for a time period
   */
  async getSecurityMetrics(
    startDate: Date,
    endDate: Date
  ): Promise<SecurityMetrics> {
    try {
      const events = await prisma.securityEvent.findMany({
        where: {
          timestamp: {
            gte: startDate,
            lte: endDate
          }
        }
      });

      if (events.length === 0) {
        return {
          totalEvents: 0,
          eventsByType: {},
          eventsBySeverity: {},
          eventsByHour: {},
          topIPAddresses: [],
          topUserAgents: [],
          averageEventsPerHour: 0,
          peakEventsPerHour: 0
        };
      }

      // Calculate metrics
      const eventsByType: Record<string, number> = {};
      const eventsBySeverity: Record<string, number> = {};
      const eventsByHour: Record<string, number> = {};
      const ipCounts: Record<string, number> = {};
      const userAgentCounts: Record<string, number> = {};

      events.forEach((event: any) => {
        // Count by type
        eventsByType[event.eventType] = (eventsByType[event.eventType] || 0) + 1;
        
        // Count by severity
        eventsBySeverity[event.severity] = (eventsBySeverity[event.severity] || 0) + 1;
        
        // Count by hour
        const hour = event.timestamp.toISOString().slice(0, 13) + ':00:00Z';
        eventsByHour[hour] = (eventsByHour[hour] || 0) + 1;
        
        // Count by IP address
        ipCounts[event.ipAddress] = (ipCounts[event.ipAddress] || 0) + 1;
        
        // Count by user agent
        userAgentCounts[event.userAgent] = (userAgentCounts[event.userAgent] || 0) + 1;
      });

      // Calculate top IP addresses
      const topIPAddresses = Object.entries(ipCounts)
        .map(([ip, count]) => ({ ip, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

      // Calculate top user agents
      const topUserAgents = Object.entries(userAgentCounts)
        .map(([userAgent, count]) => ({ userAgent, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

      // Calculate hourly statistics
      const hourlyCounts = Object.values(eventsByHour);
      const averageEventsPerHour = hourlyCounts.reduce((a, b) => a + b, 0) / hourlyCounts.length;
      const peakEventsPerHour = Math.max(...hourlyCounts);

      return {
        totalEvents: events.length,
        eventsByType,
        eventsBySeverity,
        eventsByHour,
        topIPAddresses,
        topUserAgents,
        averageEventsPerHour: Math.round(averageEventsPerHour * 100) / 100,
        peakEventsPerHour
      };
    } catch (error) {
      console.error('Error getting security metrics:', error);
      throw error;
    }
  }

  /**
   * Get active security alerts
   */
  async getActiveAlerts(): Promise<SecurityAlert[]> {
    try {
      return await prisma.securityAlert.findMany({
        where: {
          status: {
            in: ['ACTIVE', 'INVESTIGATING']
          }
        },
        orderBy: {
          severity: 'desc',
          lastOccurrence: 'desc'
        }
      });
    } catch (error) {
      console.error('Error getting active alerts:', error);
      return [];
    }
  }

  /**
   * Create or update a security alert
   */
  async createOrUpdateAlert(
    title: string,
    description: string,
    severity: typeof SecuritySeverity[keyof typeof SecuritySeverity],
    eventType: typeof SecurityEventType[keyof typeof SecurityEventType],
    metadata: Record<string, any> = {}
  ): Promise<void> {
    try {
      const existingAlert = await prisma.securityAlert.findFirst({
        where: {
          title,
          status: {
            in: ['ACTIVE', 'INVESTIGATING']
          }
        }
      });

      if (existingAlert) {
        // Update existing alert
        await prisma.securityAlert.update({
          where: { id: existingAlert.id },
          data: {
            eventCount: {
              increment: 1
            },
            lastOccurrence: new Date(),
            updatedAt: new Date()
          }
        });
      } else {
        // Create new alert
        await prisma.securityAlert.create({
          data: {
            title,
            description,
            severity,
            eventCount: 1,
            firstOccurrence: new Date(),
            lastOccurrence: new Date(),
            status: 'ACTIVE',
            metadata
          }
        });
      }
    } catch (error) {
      console.error('Error creating/updating security alert:', error);
    }
  }

  /**
   * Update alert status
   */
  async updateAlertStatus(
    alertId: string,
    status: SecurityAlert['status'],
    assignedTo?: string,
    notes?: string
  ): Promise<void> {
    try {
      await prisma.securityAlert.update({
        where: { id: alertId },
        data: {
          status,
          assignedTo,
          notes,
          updatedAt: new Date()
        }
      });
    } catch (error) {
      console.error('Error updating alert status:', error);
    }
  }

  /**
   * Check if an event should trigger an alert
   */
  private async checkForAlerts(event: Omit<SecurityEvent, 'id' | 'timestamp' | 'resolved'>): Promise<void> {
    try {
      // Check for brute force attempts
      if (event.eventType === SecurityEventType.LOGIN_FAILURE) {
        const recentFailures = await this.getEvents({
          eventType: SecurityEventType.LOGIN_FAILURE,
          ipAddress: event.ipAddress,
          startDate: new Date(Date.now() - 15 * 60 * 1000) // Last 15 minutes
        });

        if (recentFailures.length >= 5) {
          await this.createOrUpdateAlert(
            'Brute Force Attack Detected',
            `Multiple login failures detected from IP ${event.ipAddress}`,
            SecuritySeverity.HIGH,
            SecurityEventType.BRUTE_FORCE_ATTEMPT,
            { ipAddress: event.ipAddress, failureCount: recentFailures.length }
          );
        }
      }

      // Check for suspicious activity patterns
      if (event.severity === SecuritySeverity.HIGH || event.severity === SecuritySeverity.CRITICAL) {
        await this.createOrUpdateAlert(
          'High Severity Security Event',
          event.description,
          event.severity,
          event.eventType,
          { ipAddress: event.ipAddress, userId: event.userId }
        );
      }

      // Check for unusual traffic patterns
      if (event.eventType === SecurityEventType.UNUSUAL_TRAFFIC) {
        await this.createOrUpdateAlert(
          'Unusual Traffic Pattern Detected',
          event.description,
          SecuritySeverity.MEDIUM,
          event.eventType,
          { ipAddress: event.ipAddress, metadata: event.metadata }
        );
      }
    } catch (error) {
      console.error('Error checking for alerts:', error);
    }
  }

  /**
   * Get security events summary for dashboard
   */
  async getDashboardSummary(): Promise<{
    totalEventsToday: number;
    criticalEventsToday: number;
    activeAlerts: number;
    recentEvents: SecurityEvent[];
  }> {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const [totalEventsToday, criticalEventsToday, activeAlerts, recentEvents] = await Promise.all([
        prisma.securityEvent.count({
          where: {
            timestamp: {
              gte: today,
              lt: tomorrow
            }
          }
        }),
        prisma.securityEvent.count({
          where: {
            timestamp: {
              gte: today,
              lt: tomorrow
            },
            severity: SecuritySeverity.CRITICAL
          }
        }),
        prisma.securityAlert.count({
                  where: {
          status: {
            in: ['ACTIVE', 'INVESTIGATING']
          }
        }
        }),
        prisma.securityEvent.findMany({
          take: 10,
          orderBy: {
            timestamp: 'desc'
          }
        })
      ]);

      return {
        totalEventsToday,
        criticalEventsToday,
        activeAlerts,
        recentEvents
      };
    } catch (error) {
      console.error('Error getting dashboard summary:', error);
      throw error;
    }
  }

  /**
   * Export security events to CSV
   */
  async exportEventsToCSV(
    startDate: Date,
    endDate: Date
  ): Promise<string> {
    try {
      const events = await this.getEvents({
        startDate,
        endDate
      }, 10000); // Export up to 10,000 events

      const csvHeaders = [
        'ID',
        'User ID',
        'Event Type',
        'Severity',
        'Description',
        'IP Address',
        'User Agent',
        'Timestamp',
        'Resolved'
      ];

      const csvRows = events.map((event: any) => [
        event.id,
        event.userId || '',
        event.eventType,
        event.severity,
        event.description.replace(/"/g, '""'), // Escape quotes
        event.ipAddress,
        event.userAgent.replace(/"/g, '""'), // Escape quotes
        event.timestamp.toISOString(),
        event.resolved ? 'Yes' : 'No'
      ]);

      const csvContent = [
        csvHeaders.join(','),
        ...csvRows.map(row => row.map(field => `"${field}"`).join(','))
      ].join('\n');

      return csvContent;
    } catch (error) {
      console.error('Error exporting events to CSV:', error);
      throw error;
    }
  }

  /**
   * Clean up old security events
   */
  async cleanupOldEvents(olderThan: Date): Promise<number> {
    try {
      const result = await prisma.securityEvent.deleteMany({
        where: {
          timestamp: {
            lt: olderThan
          }
        }
      });

      return result.count;
    } catch (error) {
      console.error('Error cleaning up old security events:', error);
      return 0;
    }
  }

  /**
   * Get security recommendations based on events
   */
  async getSecurityRecommendations(): Promise<Array<{
    priority: 'low' | 'medium' | 'high';
    title: string;
    description: string;
    action: string;
  }>> {
    try {
      const recommendations: Array<{
        priority: 'low' | 'medium' | 'high';
        title: string;
        description: string;
        action: string;
      }> = [];

      // Check for failed login patterns
      const recentFailures = await this.getEvents({
        eventType: SecurityEventType.LOGIN_FAILURE,
        startDate: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
      });

      if (recentFailures.length > 20) {
        recommendations.push({
          priority: 'high',
          title: 'High Number of Failed Login Attempts',
          description: `${recentFailures.length} failed login attempts detected in the last 24 hours`,
          action: 'Review authentication logs and consider implementing additional security measures'
        });
      }

      // Check for MFA adoption
      const mfaEvents = await this.getEvents({
        eventType: SecurityEventType.MFA_ENABLED,
        startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // Last 30 days
      });

      if (mfaEvents.length < 10) {
        recommendations.push({
          priority: 'medium',
          title: 'Low MFA Adoption',
          description: 'Only a few users have enabled MFA in the last 30 days',
          action: 'Encourage users to enable MFA for enhanced security'
        });
      }

      // Check for suspicious IP addresses
      const suspiciousIPs = await this.getEvents({
        eventType: SecurityEventType.SUSPICIOUS_ACTIVITY,
        startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
      });

      if (suspiciousIPs.length > 5) {
        recommendations.push({
          priority: 'medium',
          title: 'Multiple Suspicious Activity Events',
          description: `${suspiciousIPs.length} suspicious activity events detected in the last week`,
          action: 'Investigate suspicious IP addresses and consider blocking them'
        });
      }

      return recommendations;
    } catch (error) {
      console.error('Error getting security recommendations:', error);
      return [];
    }
  }
}

export default SecurityAuditService;
