import { prisma } from '../database/client';

export interface Provider {
  id: string;
  npi?: string;
  name: string;
  specialty?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phone?: string;
  acceptingNewPatients: boolean;
  createdAt: Date;
}

export interface ProviderNetwork {
  planId: string;
  providerId: string;
  networkTier: string;
  provider: Provider;
}

export interface Formulary {
  id: string;
  planId: string;
  drugName: string;
  genericName?: string;
  tier: number;
  copayAmount?: number;
  coinsurancePercentage?: number;
  priorAuthorization?: boolean;
  stepTherapy?: boolean;
  quantityLimits?: string;
  createdAt: Date;
}

export interface ProviderSearchFilters {
  zipCode?: string;
  city?: string;
  state?: string;
  specialty?: string;
  acceptingNewPatients?: boolean;
  planId?: string;
  networkTier?: string;
}

export class ProviderService {
  /**
   * Search for providers based on filters
   */
  static async searchProviders(filters: ProviderSearchFilters, limit: number = 50, offset: number = 0): Promise<Provider[]> {
    try {
      const where: any = {};

      // Apply filters
      if (filters.zipCode) {
        where.zip_code = filters.zipCode;
      }

      if (filters.city) {
        where.city = {
          contains: filters.city,
          mode: 'insensitive',
        };
      }

      if (filters.state) {
        where.state = filters.state;
      }

      if (filters.specialty) {
        where.specialty = {
          contains: filters.specialty,
          mode: 'insensitive',
        };
      }

      if (filters.acceptingNewPatients !== undefined) {
        where.accepting_new_patients = filters.acceptingNewPatients;
      }

      // If searching by plan, filter through plan_providers
      if (filters.planId) {
        where.plan_providers = {
          some: {
            plan_id: filters.planId,
            ...(filters.networkTier && { network_tier: filters.networkTier }),
          },
        };
      }

      const providers = await prisma.providers.findMany({
        where,
        orderBy: { name: 'asc' },
        take: limit,
        skip: offset,
      });

      return providers.map(provider => ({
        id: provider.id,
        npi: provider.npi || undefined,
        name: provider.name,
        specialty: provider.specialty || undefined,
        addressLine1: provider.address_line1 || undefined,
        addressLine2: provider.address_line2 || undefined,
        city: provider.city || undefined,
        state: provider.state || undefined,
        zipCode: provider.zip_code || undefined,
        phone: provider.phone || undefined,
        acceptingNewPatients: provider.accepting_new_patients || false,
        createdAt: provider.created_at || new Date(),
      }));
    } catch (error) {
      console.error('Error searching providers:', error);
      throw new Error('Failed to search providers');
    }
  }

  /**
   * Get provider by ID
   */
  static async getProviderById(providerId: string): Promise<Provider | null> {
    try {
      const provider = await prisma.providers.findUnique({
        where: { id: providerId },
      });

      if (!provider) {
        return null;
      }

      return {
        id: provider.id,
        npi: provider.npi || undefined,
        name: provider.name,
        specialty: provider.specialty || undefined,
        addressLine1: provider.address_line1 || undefined,
        addressLine2: provider.address_line2 || undefined,
        city: provider.city || undefined,
        state: provider.state || undefined,
        zipCode: provider.zip_code || undefined,
        phone: provider.phone || undefined,
        acceptingNewPatients: provider.accepting_new_patients || false,
        createdAt: provider.created_at || new Date(),
      };
    } catch (error) {
      console.error('Error getting provider:', error);
      throw new Error('Failed to get provider');
    }
  }

  /**
   * Get providers by NPI
   */
  static async getProviderByNPI(npi: string): Promise<Provider | null> {
    try {
      const provider = await prisma.providers.findUnique({
        where: { npi },
      });

      if (!provider) {
        return null;
      }

      return {
        id: provider.id,
        npi: provider.npi || undefined,
        name: provider.name,
        specialty: provider.specialty || undefined,
        addressLine1: provider.address_line1 || undefined,
        addressLine2: provider.address_line2 || undefined,
        city: provider.city || undefined,
        state: provider.state || undefined,
        zipCode: provider.zip_code || undefined,
        phone: provider.phone || undefined,
        acceptingNewPatients: provider.accepting_new_patients || false,
        createdAt: provider.created_at || new Date(),
      };
    } catch (error) {
      console.error('Error getting provider by NPI:', error);
      throw new Error('Failed to get provider by NPI');
    }
  }

  /**
   * Get provider network for a specific plan
   */
  static async getProviderNetwork(planId: string, networkTier?: string): Promise<ProviderNetwork[]> {
    try {
      const where: any = { plan_id: planId };
      if (networkTier) {
        where.network_tier = networkTier;
      }

      const network = await prisma.plan_providers.findMany({
        where,
        include: {
          providers: true,
        },
        orderBy: {
          providers: {
            name: 'asc',
          },
        },
      });

      return network.map(item => ({
        planId: item.plan_id,
        providerId: item.provider_id,
        networkTier: item.network_tier || 'in-network',
        provider: {
          id: item.providers.id,
          npi: item.providers.npi || undefined,
          name: item.providers.name,
          specialty: item.providers.specialty || undefined,
          addressLine1: item.providers.address_line1 || undefined,
          addressLine2: item.providers.address_line2 || undefined,
          city: item.providers.city || undefined,
          state: item.providers.state || undefined,
          zipCode: item.providers.zip_code || undefined,
          phone: item.providers.phone || undefined,
          acceptingNewPatients: item.providers.accepting_new_patients || false,
          createdAt: item.providers.created_at || new Date(),
        },
      }));
    } catch (error) {
      console.error('Error getting provider network:', error);
      throw new Error('Failed to get provider network');
    }
  }

  /**
   * Search formulary for a specific plan
   */
  static async searchFormulary(planId: string, searchTerm?: string, tier?: number): Promise<Formulary[]> {
    try {
      const where: any = { plan_id: planId };

      if (searchTerm) {
        where.OR = [
          { drug_name: { contains: searchTerm, mode: 'insensitive' } },
          { generic_name: { contains: searchTerm, mode: 'insensitive' } },
        ];
      }

      if (tier !== undefined) {
        where.tier = tier;
      }

      const formulary = await prisma.formularies.findMany({
        where,
        orderBy: [
          { tier: 'asc' },
          { drug_name: 'asc' },
        ],
      });

      return formulary.map(item => ({
        id: item.id,
        planId: item.plan_id,
        drugName: item.drug_name,
        genericName: item.generic_name || undefined,
        tier: item.tier,
        copayAmount: item.copay_amount ? Number(item.copay_amount) : undefined,
        coinsurancePercentage: item.coinsurance_percentage ? Number(item.coinsurance_percentage) : undefined,
        priorAuthorization: item.prior_authorization || false,
        stepTherapy: item.step_therapy || false,
        quantityLimits: item.quantity_limits || undefined,
        createdAt: item.created_at || new Date(),
      }));
    } catch (error) {
      console.error('Error searching formulary:', error);
      throw new Error('Failed to search formulary');
    }
  }

  /**
   * Get formulary tiers for a specific plan
   */
  static async getFormularyTiers(planId: string): Promise<Array<{ tier: number; count: number }>> {
    try {
      const tiers = await prisma.formularies.groupBy({
        by: ['tier'],
        where: { plan_id: planId },
        _count: { tier: true },
        orderBy: { tier: 'asc' },
      });

      return tiers.map(item => ({
        tier: item.tier,
        count: item._count.tier,
      }));
    } catch (error) {
      console.error('Error getting formulary tiers:', error);
      throw new Error('Failed to get formulary tiers');
    }
  }

  /**
   * Get provider statistics
   */
  static async getProviderStatistics() {
    try {
      const totalProviders = await prisma.providers.count();
      const acceptingNewPatients = await prisma.providers.count({
        where: { accepting_new_patients: true },
      });
      const notAcceptingNewPatients = await prisma.providers.count({
        where: { accepting_new_patients: false },
      });

      // Get providers by specialty
      const providersBySpecialty = await prisma.providers.groupBy({
        by: ['specialty'],
        _count: { specialty: true },
        orderBy: { _count: { specialty: 'desc' } },
        where: {
          specialty: { not: null },
        },
      });

      // Get providers by state
      const providersByState = await prisma.providers.groupBy({
        by: ['state'],
        _count: { state: true },
        orderBy: { _count: { state: 'desc' } },
        where: {
          state: { not: null },
        },
      });

      return {
        total: totalProviders,
        acceptingNewPatients,
        notAcceptingNewPatients,
        bySpecialty: providersBySpecialty.map(item => ({
          specialty: item.specialty || 'Unknown',
          count: item._count.specialty,
        })),
        byState: providersByState.map(item => ({
          state: item.state || 'Unknown',
          count: item._count.state,
        })),
      };
    } catch (error) {
      console.error('Error getting provider statistics:', error);
      throw new Error('Failed to get provider statistics');
    }
  }
}
