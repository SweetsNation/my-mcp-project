import { MedicarePlanService, PlanSearchFilters, PlanSearchResult } from './medicarePlanService';
import { LeadService, CreateLeadData, Lead, UpdateLeadData } from './leadService';
import { PlanComparisonService, CreateComparisonData, PlanComparison, UserSession } from './planComparisonService';
import { ProviderService, ProviderSearchFilters, Provider, ProviderNetwork, Formulary } from './providerService';

export interface DashboardStatistics {
  plans: {
    total: number;
    byType: Array<{ type: string; count: number }>;
    byCarrier: Array<{ carrier: string; count: number }>;
    byYear: Array<{ year: number; count: number }>;
  };
  leads: {
    total: number;
    byStatus: Record<string, number>;
    bySource: Array<{ source: string; count: number }>;
    byMonth: Array<{ month: Date; count: number }>;
  };
  providers: {
    total: number;
    acceptingNewPatients: number;
    notAcceptingNewPatients: number;
    bySpecialty: Array<{ specialty: string; count: number }>;
    byState: Array<{ state: string; count: number }>;
  };
  sessions: {
    total: number;
    active: number;
    expired: number;
    byMonth: Array<{ month: Date; count: number }>;
  };
}

export class DataManagementService {
  /**
   * Get comprehensive dashboard statistics
   */
  static async getDashboardStatistics(): Promise<DashboardStatistics> {
    try {
      // Get plan statistics
      const carriers = await MedicarePlanService.getCarriers();
      const planTypes = await MedicarePlanService.getPlanTypes();
      
      // Get lead statistics
      const leadStats = await LeadService.getLeadStatistics();
      
      // Get provider statistics
      const providerStats = await ProviderService.getProviderStatistics();
      
      // Get session statistics
      const sessionStats = await PlanComparisonService.getSessionStatistics();

      return {
        plans: {
          total: carriers.length, // This is a simplified count
          byType: planTypes.map(type => ({ type: type.name, count: 0 })), // Would need actual plan counts
          byCarrier: carriers.map(carrier => ({ carrier: carrier.name, count: 0 })), // Would need actual plan counts
          byYear: [{ year: new Date().getFullYear(), count: 0 }], // Would need actual plan counts
        },
        leads: {
          total: leadStats.total,
          byStatus: leadStats.byStatus,
          bySource: leadStats.bySource,
          byMonth: leadStats.byMonth.map(item => ({
            month: item.month || new Date(),
            count: item.count,
          })),
        },
        providers: {
          total: providerStats.total,
          acceptingNewPatients: providerStats.acceptingNewPatients,
          notAcceptingNewPatients: providerStats.notAcceptingNewPatients,
          bySpecialty: providerStats.bySpecialty,
          byState: providerStats.byState,
        },
        sessions: {
          total: sessionStats.total,
          active: sessionStats.active,
          expired: sessionStats.expired,
          byMonth: sessionStats.byMonth.map(item => ({
            month: item.month || new Date(),
            count: item.count,
          })),
        },
      };
    } catch (error) {
      console.error('Error getting dashboard statistics:', error);
      throw new Error('Failed to get dashboard statistics');
    }
  }

  /**
   * Search Medicare plans with advanced filtering
   */
  static async searchMedicarePlans(filters: PlanSearchFilters, limit: number = 50, offset: number = 0): Promise<PlanSearchResult[]> {
    return MedicarePlanService.searchPlans(filters, limit, offset);
  }

  /**
   * Get plans by ZIP code
   */
  static async getPlansByZipCode(zipCode: string, planYear?: number): Promise<PlanSearchResult[]> {
    return MedicarePlanService.getPlansByZipCode(zipCode, planYear);
  }

  /**
   * Get plan details by ID
   */
  static async getPlanDetails(planId: string): Promise<PlanSearchResult | null> {
    return MedicarePlanService.getPlanById(planId);
  }

  /**
   * Get all carriers
   */
  static async getAllCarriers(): Promise<Array<{ id: string; name: string; amBestRating?: string }>> {
    return MedicarePlanService.getCarriers();
  }

  /**
   * Get all plan types
   */
  static async getAllPlanTypes(): Promise<Array<{ id: string; name: string; description?: string }>> {
    return MedicarePlanService.getPlanTypes();
  }

  /**
   * Get location information by ZIP code
   */
  static async getLocationByZipCode(zipCode: string) {
    return MedicarePlanService.getLocationByZipCode(zipCode);
  }

  /**
   * Create a new lead
   */
  static async createLead(leadData: CreateLeadData): Promise<Lead> {
    return LeadService.createLead(leadData);
  }

  /**
   * Get lead by ID
   */
  static async getLeadById(leadId: string): Promise<Lead | null> {
    return LeadService.getLeadById(leadId);
  }

  /**
   * Update lead
   */
  static async updateLead(leadId: string, updateData: UpdateLeadData): Promise<Lead> {
    return LeadService.updateLead(leadId, updateData);
  }

  /**
   * Get leads by status
   */
  static async getLeadsByStatus(status: string, limit: number = 50, offset: number = 0): Promise<Lead[]> {
    return LeadService.getLeadsByStatus(status, limit, offset);
  }

  /**
   * Get leads by ZIP code
   */
  static async getLeadsByZipCode(zipCode: string, limit: number = 50, offset: number = 0): Promise<Lead[]> {
    return LeadService.getLeadsByZipCode(zipCode, limit, offset);
  }

  /**
   * Get all leads with pagination
   */
  static async getAllLeads(limit: number = 50, offset: number = 0): Promise<Lead[]> {
    return LeadService.getAllLeads(limit, offset);
  }

  /**
   * Get lead statistics
   */
  static async getLeadStatistics() {
    return LeadService.getLeadStatistics();
  }

  /**
   * Delete lead
   */
  static async deleteLead(leadId: string): Promise<void> {
    return LeadService.deleteLead(leadId);
  }

  /**
   * Create a new plan comparison
   */
  static async createPlanComparison(comparisonData: CreateComparisonData): Promise<PlanComparison> {
    return PlanComparisonService.createComparison(comparisonData);
  }

  /**
   * Get comparison by ID
   */
  static async getComparisonById(comparisonId: string): Promise<PlanComparison | null> {
    return PlanComparisonService.getComparisonById(comparisonId);
  }

  /**
   * Get comparisons by session ID
   */
  static async getComparisonsBySessionId(sessionId: string): Promise<PlanComparison[]> {
    return PlanComparisonService.getComparisonsBySessionId(sessionId);
  }

  /**
   * Update comparison data
   */
  static async updateComparison(comparisonId: string, comparisonData: Record<string, any>): Promise<PlanComparison> {
    return PlanComparisonService.updateComparison(comparisonId, comparisonData);
  }

  /**
   * Delete comparison
   */
  static async deleteComparison(comparisonId: string): Promise<void> {
    return PlanComparisonService.deleteComparison(comparisonId);
  }

  /**
   * Create a new user session
   */
  static async createUserSession(sessionId: string, zipCode?: string, preferences?: Record<string, any>): Promise<UserSession> {
    return PlanComparisonService.createUserSession(sessionId, zipCode, preferences);
  }

  /**
   * Get user session by session ID
   */
  static async getUserSessionBySessionId(sessionId: string): Promise<UserSession | null> {
    return PlanComparisonService.getUserSessionBySessionId(sessionId);
  }

  /**
   * Update user session preferences
   */
  static async updateUserSessionPreferences(sessionId: string, preferences: Record<string, any>): Promise<UserSession> {
    return PlanComparisonService.updateUserSessionPreferences(sessionId, preferences);
  }

  /**
   * Clean up expired sessions
   */
  static async cleanupExpiredSessions(): Promise<number> {
    return PlanComparisonService.cleanupExpiredSessions();
  }

  /**
   * Get session statistics
   */
  static async getSessionStatistics() {
    return PlanComparisonService.getSessionStatistics();
  }

  /**
   * Search for providers based on filters
   */
  static async searchProviders(filters: ProviderSearchFilters, limit: number = 50, offset: number = 0): Promise<Provider[]> {
    return ProviderService.searchProviders(filters, limit, offset);
  }

  /**
   * Get provider by ID
   */
  static async getProviderById(providerId: string): Promise<Provider | null> {
    return ProviderService.getProviderById(providerId);
  }

  /**
   * Get provider by NPI
   */
  static async getProviderByNPI(npi: string): Promise<Provider | null> {
    return ProviderService.getProviderByNPI(npi);
  }

  /**
   * Get provider network for a specific plan
   */
  static async getProviderNetwork(planId: string, networkTier?: string): Promise<ProviderNetwork[]> {
    return ProviderService.getProviderNetwork(planId, networkTier);
  }

  /**
   * Search formulary for a specific plan
   */
  static async searchFormulary(planId: string, searchTerm?: string, tier?: number): Promise<Formulary[]> {
    return ProviderService.searchFormulary(planId, searchTerm, tier);
  }

  /**
   * Get formulary tiers for a specific plan
   */
  static async getFormularyTiers(planId: string): Promise<Array<{ tier: number; count: number }>> {
    return ProviderService.getFormularyTiers(planId);
  }

  /**
   * Get provider statistics
   */
  static async getProviderStatistics() {
    return ProviderService.getProviderStatistics();
  }

  /**
   * Export data for reporting (CSV format)
   */
  static async exportDataToCSV(dataType: 'leads' | 'plans' | 'providers' | 'sessions', filters?: any): Promise<string> {
    try {
      let data: any[] = [];
      let headers: string[] = [];

      switch (dataType) {
        case 'leads':
          data = await LeadService.getAllLeads(1000, 0); // Get up to 1000 leads
          headers = ['ID', 'First Name', 'Last Name', 'Email', 'Phone', 'ZIP Code', 'Age', 'Status', 'Source', 'Created At'];
          break;
        case 'plans':
          data = await MedicarePlanService.searchPlans({}, 1000, 0); // Get up to 1000 plans
          headers = ['ID', 'Plan ID', 'Name', 'Carrier', 'Plan Type', 'Premium', 'Deductible', 'Max Out of Pocket', 'Star Rating', 'Plan Year'];
          break;
        case 'providers':
          data = await ProviderService.searchProviders({}, 1000, 0); // Get up to 1000 providers
          headers = ['ID', 'NPI', 'Name', 'Specialty', 'City', 'State', 'ZIP Code', 'Phone', 'Accepting New Patients'];
          break;
        case 'sessions':
          // This would need to be implemented in PlanComparisonService
          throw new Error('Session export not yet implemented');
        default:
          throw new Error('Invalid data type for export');
      }

      // Convert data to CSV format
      const csvContent = [
        headers.join(','),
        ...data.map(item => {
          const values = headers.map(header => {
            const value = this.getNestedValue(item, header.toLowerCase().replace(/\s+/g, ''));
            return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
          });
          return values.join(',');
        }),
      ].join('\n');

      return csvContent;
    } catch (error) {
      console.error('Error exporting data to CSV:', error);
      throw new Error('Failed to export data to CSV');
    }
  }

  /**
   * Helper method to get nested object values
   */
  private static getNestedValue(obj: any, path: string): any {
    const keys = path.split('.');
    let value = obj;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return '';
      }
    }
    
    return value || '';
  }

  /**
   * Bulk operations for data management
   */
  static async bulkUpdateLeads(leadIds: string[], updateData: UpdateLeadData): Promise<number> {
    try {
      let updatedCount = 0;
      
      for (const leadId of leadIds) {
        try {
          await LeadService.updateLead(leadId, updateData);
          updatedCount++;
        } catch (error) {
          console.error(`Failed to update lead ${leadId}:`, error);
        }
      }
      
      return updatedCount;
    } catch (error) {
      console.error('Error in bulk update leads:', error);
      throw new Error('Failed to bulk update leads');
    }
  }

  /**
   * Data validation and cleanup
   */
  static async validateAndCleanupData(): Promise<{
    leads: { valid: number; invalid: number; cleaned: number };
    plans: { valid: number; invalid: number; cleaned: number };
    providers: { valid: number; invalid: number; cleaned: number };
  }> {
    try {
      // This would implement data validation logic
      // For now, return placeholder data
      return {
        leads: { valid: 0, invalid: 0, cleaned: 0 },
        plans: { valid: 0, invalid: 0, cleaned: 0 },
        providers: { valid: 0, invalid: 0, cleaned: 0 },
      };
    } catch (error) {
      console.error('Error validating and cleaning data:', error);
      throw new Error('Failed to validate and cleanup data');
    }
  }
}
