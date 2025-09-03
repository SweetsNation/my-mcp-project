import { prisma } from '../database/client';

export interface CreateComparisonData {
  sessionId?: string;
  planIds: string[];
  comparisonData?: Record<string, any>;
}

export interface PlanComparison {
  id: string;
  sessionId?: string;
  planIds: string[];
  comparisonData: Record<string, any>;
  createdAt: Date;
}

export interface UserSession {
  id: string;
  sessionId: string;
  zipCode?: string;
  preferences: Record<string, any>;
  createdAt: Date;
  expiresAt: Date;
}

export class PlanComparisonService {
  /**
   * Create a new plan comparison
   */
  static async createComparison(comparisonData: CreateComparisonData): Promise<PlanComparison> {
    try {
      const comparison = await prisma.plan_comparisons.create({
        data: {
          session_id: comparisonData.sessionId,
          plan_ids: comparisonData.planIds,
          comparison_data: comparisonData.comparisonData || {},
        },
      });

      return {
        id: comparison.id,
        sessionId: comparison.session_id || undefined,
        planIds: comparison.plan_ids,
        comparisonData: comparison.comparison_data as Record<string, any>,
        createdAt: comparison.created_at || new Date(),
      };
    } catch (error) {
      console.error('Error creating plan comparison:', error);
      throw new Error('Failed to create plan comparison');
    }
  }

  /**
   * Get comparison by ID
   */
  static async getComparisonById(comparisonId: string): Promise<PlanComparison | null> {
    try {
      const comparison = await prisma.plan_comparisons.findUnique({
        where: { id: comparisonId },
      });

      if (!comparison) {
        return null;
      }

      return {
        id: comparison.id,
        sessionId: comparison.session_id || undefined,
        planIds: comparison.plan_ids,
        comparisonData: comparison.comparison_data as Record<string, any>,
        createdAt: comparison.created_at || new Date(),
      };
    } catch (error) {
      console.error('Error getting comparison:', error);
      throw new Error('Failed to get comparison');
    }
  }

  /**
   * Get comparisons by session ID
   */
  static async getComparisonsBySessionId(sessionId: string): Promise<PlanComparison[]> {
    try {
      const comparisons = await prisma.plan_comparisons.findMany({
        where: { session_id: sessionId },
        orderBy: { created_at: 'desc' },
      });

      return comparisons.map(comparison => ({
        id: comparison.id,
        sessionId: comparison.session_id || undefined,
        planIds: comparison.plan_ids,
        comparisonData: comparison.comparison_data as Record<string, any>,
        createdAt: comparison.created_at || new Date(),
      }));
    } catch (error) {
      console.error('Error getting comparisons by session ID:', error);
      throw new Error('Failed to get comparisons by session ID');
    }
  }

  /**
   * Update comparison data
   */
  static async updateComparison(comparisonId: string, comparisonData: Record<string, any>): Promise<PlanComparison> {
    try {
      const comparison = await prisma.plan_comparisons.update({
        where: { id: comparisonId },
        data: {
          comparison_data: comparisonData,
        },
      });

      return {
        id: comparison.id,
        sessionId: comparison.session_id || undefined,
        planIds: comparison.plan_ids,
        comparisonData: comparison.comparison_data as Record<string, any>,
        createdAt: comparison.created_at || new Date(),
      };
    } catch (error) {
      console.error('Error updating comparison:', error);
      throw new Error('Failed to update comparison');
    }
  }

  /**
   * Delete comparison
   */
  static async deleteComparison(comparisonId: string): Promise<void> {
    try {
      await prisma.plan_comparisons.delete({
        where: { id: comparisonId },
      });
    } catch (error) {
      console.error('Error deleting comparison:', error);
      throw new Error('Failed to delete comparison');
    }
  }

  /**
   * Create a new user session
   */
  static async createUserSession(sessionId: string, zipCode?: string, preferences?: Record<string, any>): Promise<UserSession> {
    try {
      const session = await prisma.legacyUserSession.create({
        data: {
          session_id: sessionId,
          zip_code: zipCode,
          preferences: preferences || {},
        },
      });

      return {
        id: session.id,
        sessionId: session.session_id,
        zipCode: session.zip_code || undefined,
        preferences: session.preferences as Record<string, any>,
        createdAt: session.created_at || new Date(),
        expiresAt: session.expires_at || new Date(),
      };
    } catch (error) {
      console.error('Error creating user session:', error);
      throw new Error('Failed to create user session');
    }
  }

  /**
   * Get user session by session ID
   */
  static async getUserSessionBySessionId(sessionId: string): Promise<UserSession | null> {
    try {
      const session = await prisma.legacyUserSession.findFirst({
        where: { session_id: sessionId },
      });

      if (!session) {
        return null;
      }

      return {
        id: session.id,
        sessionId: session.session_id,
        zipCode: session.zip_code || undefined,
        preferences: session.preferences as Record<string, any>,
        createdAt: session.created_at || new Date(),
        expiresAt: session.expires_at || new Date(),
      };
    } catch (error) {
      console.error('Error getting user session:', error);
      throw new Error('Failed to get user session');
    }
  }

  /**
   * Update user session preferences
   */
  static async updateUserSessionPreferences(sessionId: string, preferences: Record<string, any>): Promise<UserSession> {
    try {
      const session = await prisma.legacyUserSession.updateMany({
        where: { session_id: sessionId },
        data: {
          preferences,
        },
      });

      // Get the updated session
      const updatedSession = await this.getUserSessionBySessionId(sessionId);
      if (!updatedSession) {
        throw new Error('Session not found after update');
      }

      return updatedSession;
    } catch (error) {
      console.error('Error updating user session preferences:', error);
      throw new Error('Failed to update user session preferences');
    }
  }

  /**
   * Clean up expired sessions
   */
  static async cleanupExpiredSessions(): Promise<number> {
    try {
      const result = await prisma.legacyUserSession.deleteMany({
        where: {
          expires_at: {
            lt: new Date(),
          },
        },
      });

      return result.count;
    } catch (error) {
      console.error('Error cleaning up expired sessions:', error);
      throw new Error('Failed to cleanup expired sessions');
    }
  }

  /**
   * Get session statistics
   */
  static async getSessionStatistics() {
    try {
      const totalSessions = await prisma.legacyUserSession.count();
      const activeSessions = await prisma.legacyUserSession.count({
        where: {
          expires_at: {
            gt: new Date(),
          },
        },
      });
      const expiredSessions = await prisma.legacyUserSession.count({
        where: {
          expires_at: {
            lte: new Date(),
          },
        },
      });

      // Get sessions by month (last 12 months)
      const twelveMonthsAgo = new Date();
      twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

      const sessionsByMonth = await prisma.legacyUserSession.groupBy({
        by: ['created_at'],
        _count: { created_at: true },
        where: {
          created_at: {
            gte: twelveMonthsAgo,
          },
        },
        orderBy: { created_at: 'asc' },
      });

      return {
        total: totalSessions,
        active: activeSessions,
        expired: expiredSessions,
        byMonth: sessionsByMonth.map(item => ({
          month: item.created_at,
          count: item._count.created_at,
        })),
      };
    } catch (error) {
      console.error('Error getting session statistics:', error);
      throw new Error('Failed to get session statistics');
    }
  }
}
