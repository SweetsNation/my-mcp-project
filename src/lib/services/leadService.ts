import { prisma } from '../database/client';

export interface CreateLeadData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  zipCode?: string;
  interestedPlans?: string[];
  contactPreferences?: Record<string, any>;
  source?: string;
  notes?: string;
}

export interface UpdateLeadData extends Partial<CreateLeadData> {
  status?: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
}

export interface Lead {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  zipCode?: string;
  interestedPlans: string[];
  contactPreferences: Record<string, any>;
  source?: string;
  status: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class LeadService {
  /**
   * Create a new lead
   */
  static async createLead(leadData: CreateLeadData): Promise<Lead> {
    try {
      const lead = await prisma.leads.create({
        data: {
          first_name: leadData.firstName || '',
          last_name: leadData.lastName || '',
          email: leadData.email || '',
          phone: leadData.phone || '',
          zip_code: leadData.zipCode || '',
          plan_type: leadData.interestedPlans?.[0] || null,
          status: 'new',
          notes: leadData.notes || '',
        },
      });

      return {
        id: lead.id,
        firstName: lead.first_name || undefined,
        lastName: lead.last_name || undefined,
        email: lead.email || undefined,
        phone: lead.phone || undefined,
        zipCode: lead.zip_code || undefined,
        interestedPlans: lead.plan_type ? [lead.plan_type] : [],
        contactPreferences: {},
        source: 'website',
        status: lead.status || 'new',
        notes: lead.notes || undefined,
        createdAt: lead.created_at || new Date(),
        updatedAt: lead.updated_at || new Date(),
      };
    } catch (error) {
      console.error('Error creating lead:', error);
      throw new Error('Failed to create lead');
    }
  }

  /**
   * Get lead by ID
   */
  static async getLeadById(leadId: string): Promise<Lead | null> {
    try {
      const lead = await prisma.leads.findUnique({
        where: { id: leadId },
      });

      if (!lead) {
        return null;
      }

      return {
        id: lead.id,
        firstName: lead.first_name || undefined,
        lastName: lead.last_name || undefined,
        email: lead.email || undefined,
        phone: lead.phone || undefined,
        zipCode: lead.zip_code || undefined,
        interestedPlans: lead.plan_type ? [lead.plan_type] : [],
        contactPreferences: {},
        source: 'website',
        status: lead.status || 'new',
        notes: lead.notes || undefined,
        createdAt: lead.created_at || new Date(),
        updatedAt: lead.updated_at || new Date(),
      };
    } catch (error) {
      console.error('Error getting lead:', error);
      throw new Error('Failed to get lead');
    }
  }

  /**
   * Update lead
   */
  static async updateLead(leadId: string, updateData: UpdateLeadData): Promise<Lead> {
    try {
      const lead = await prisma.leads.update({
        where: { id: leadId },
        data: {
          first_name: updateData.firstName,
          last_name: updateData.lastName,
          email: updateData.email,
          phone: updateData.phone,
          zip_code: updateData.zipCode,
          plan_type: updateData.interestedPlans?.[0] || null,
          status: updateData.status,
          notes: updateData.notes,
          updated_at: new Date(),
        },
      });

      return {
        id: lead.id,
        firstName: lead.first_name || undefined,
        lastName: lead.last_name || undefined,
        email: lead.email || undefined,
        phone: lead.phone || undefined,
        zipCode: lead.zip_code || undefined,
        interestedPlans: lead.plan_type ? [lead.plan_type] : [],
        contactPreferences: {},
        source: 'website',
        status: lead.status || 'new',
        notes: lead.notes || undefined,
        createdAt: lead.created_at || new Date(),
        updatedAt: lead.updated_at || new Date(),
      };
    } catch (error) {
      console.error('Error updating lead:', error);
      throw new Error('Failed to update lead');
    }
  }

  /**
   * Get leads by status
   */
  static async getLeadsByStatus(status: string, limit: number = 50, offset: number = 0): Promise<Lead[]> {
    try {
      const leads = await prisma.leads.findMany({
        where: { status },
        orderBy: { created_at: 'desc' },
        take: limit,
        skip: offset,
      });

      return leads.map((lead: any) => ({
        id: lead.id,
        firstName: lead.first_name || undefined,
        lastName: lead.last_name || undefined,
        email: lead.email || undefined,
        phone: lead.phone || undefined,
        zipCode: lead.zip_code || undefined,
        interestedPlans: lead.plan_type ? [lead.plan_type] : [],
        contactPreferences: {},
        source: 'website',
        status: lead.status || 'new',
        notes: lead.notes || undefined,
        createdAt: lead.created_at || new Date(),
        updatedAt: lead.updated_at || new Date(),
      }));
    } catch (error) {
      console.error('Error getting leads by status:', error);
      throw new Error('Failed to get leads by status');
    }
  }

  /**
   * Get leads by ZIP code
   */
  static async getLeadsByZipCode(zipCode: string, limit: number = 50, offset: number = 0): Promise<Lead[]> {
    try {
      const leads = await prisma.leads.findMany({
        where: { zip_code: zipCode },
        orderBy: { created_at: 'desc' },
        take: limit,
        skip: offset,
      });

      return leads.map((lead: any) => ({
        id: lead.id,
        firstName: lead.first_name || undefined,
        lastName: lead.last_name || undefined,
        email: lead.email || undefined,
        phone: lead.phone || undefined,
        zipCode: lead.zip_code || undefined,
        interestedPlans: lead.plan_type ? [lead.plan_type] : [],
        contactPreferences: {},
        source: 'website',
        status: lead.status || 'new',
        notes: lead.notes || undefined,
        createdAt: lead.created_at || new Date(),
        updatedAt: lead.updated_at || new Date(),
      }));
    } catch (error) {
      console.error('Error getting leads by ZIP code:', error);
      throw new Error('Failed to get leads by ZIP code');
    }
  }

  /**
   * Get all leads with pagination
   */
  static async getAllLeads(limit: number = 50, offset: number = 0): Promise<Lead[]> {
    try {
      const leads = await prisma.leads.findMany({
        orderBy: { created_at: 'desc' },
        take: limit,
        skip: offset,
      });

      return leads.map((lead: any) => ({
        id: lead.id,
        firstName: lead.first_name || undefined,
        lastName: lead.last_name || undefined,
        email: lead.email || undefined,
        phone: lead.phone || undefined,
        zipCode: lead.zip_code || undefined,
        interestedPlans: lead.plan_type ? [lead.plan_type] : [],
        contactPreferences: {},
        source: 'website',
        status: lead.status || 'new',
        notes: lead.notes || undefined,
        createdAt: lead.created_at || new Date(),
        updatedAt: lead.updated_at || new Date(),
      }));
    } catch (error) {
      console.error('Error getting all leads:', error);
      throw new Error('Failed to get all leads');
    }
  }

  /**
   * Get lead statistics
   */
  static async getLeadStatistics() {
    try {
      const totalLeads = await prisma.leads.count();
      const newLeads = await prisma.leads.count({ where: { status: 'new' } });
      const contactedLeads = await prisma.leads.count({ where: { status: 'contacted' } });
      const qualifiedLeads = await prisma.leads.count({ where: { status: 'qualified' } });
      const convertedLeads = await prisma.leads.count({ where: { status: 'converted' } });
      const lostLeads = await prisma.leads.count({ where: { status: 'lost' } });

      // Get leads by plan type
      const leadsByPlanType = await prisma.leads.groupBy({
        by: ['plan_type'],
        _count: { plan_type: true },
        orderBy: { _count: { plan_type: 'desc' } },
      });

      // Get leads by month (last 12 months)
      const twelveMonthsAgo = new Date();
      twelveMonthsAgo.setMonth(twelveMonthsAgo.getMonth() - 12);

      const leadsByMonth = await prisma.leads.groupBy({
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
        total: totalLeads,
        byStatus: {
          new: newLeads,
          contacted: contactedLeads,
          qualified: qualifiedLeads,
          converted: convertedLeads,
          lost: lostLeads,
        },
        bySource: leadsByPlanType.map((item: any) => ({
          source: item.plan_type || 'unknown',
          count: item._count.plan_type,
        })),
        byMonth: leadsByMonth.map((item: any) => ({
          month: item.created_at,
          count: item._count.created_at,
        })),
      };
    } catch (error) {
      console.error('Error getting lead statistics:', error);
      throw new Error('Failed to get lead statistics');
    }
  }

  /**
   * Delete lead
   */
  static async deleteLead(leadId: string): Promise<void> {
    try {
      await prisma.leads.delete({
        where: { id: leadId },
      });
    } catch (error) {
      console.error('Error deleting lead:', error);
      throw new Error('Failed to delete lead');
    }
  }
}