import { prisma } from '../database/client';

export interface PlanSearchFilters {
  zipCode?: string;
  planType?: string;
  carrier?: string;
  maxPremium?: number;
  includesPartD?: boolean;
  dentalCoverage?: boolean;
  visionCoverage?: boolean;
  hearingCoverage?: boolean;
  starRating?: number;
  planYear?: number;
}

export interface PlanSearchResult {
  id: string;
  planId: string;
  name: string;
  carrier: {
    id: string;
    name: string;
    amBestRating?: string;
  };
  planType: {
    id: string;
    name: string;
  };
  premium: number;
  deductible: number;
  maxOutOfPocket: number;
  starRating?: number;
  includesPartD: boolean;
  dentalCoverage: boolean;
  visionCoverage: boolean;
  hearingCoverage: boolean;
  fitnessBenefits: boolean;
  transportation: boolean;
  otcBenefits: boolean;
  networkSize?: string;
  requiresReferrals: boolean;
  planYear: number;
  status: string;
}

export class MedicarePlanService {
  /**
   * Search for Medicare plans based on filters
   */
  static async searchPlans(filters: PlanSearchFilters, limit: number = 50, offset: number = 0): Promise<PlanSearchResult[]> {
    try {
      const where: any = {
        status: 'active',
      };

      // Apply filters
      if (filters.planYear) {
        where.plan_year = filters.planYear;
      } else {
        where.plan_year = new Date().getFullYear();
      }

      if (filters.planType) {
        where.plan_types = {
          code: filters.planType,
        };
      }

      if (filters.carrier) {
        where.carriers = {
          name: {
            contains: filters.carrier,
            mode: 'insensitive',
          },
        };
      }

      if (filters.maxPremium) {
        where.premium = {
          lte: filters.maxPremium,
        };
      }

      if (filters.includesPartD !== undefined) {
        where.includes_part_d = filters.includesPartD;
      }

      if (filters.dentalCoverage !== undefined) {
        where.dental_coverage = filters.dentalCoverage;
      }

      if (filters.visionCoverage !== undefined) {
        where.vision_coverage = filters.visionCoverage;
      }

      if (filters.hearingCoverage !== undefined) {
        where.hearing_coverage = filters.hearingCoverage;
      }

      if (filters.starRating) {
        where.star_rating = {
          gte: filters.starRating,
        };
      }

      // Location-based search
      if (filters.zipCode) {
        where.plan_locations = {
          some: {
            locations: {
              zip_code: filters.zipCode,
            },
          },
        };
      }

      const plans = await prisma.medicare_plans.findMany({
        where,
        include: {
          carriers: true,
          plan_types: true,
        },
        orderBy: [
          { premium: 'asc' },
          { star_rating: 'desc' },
        ],
        take: limit,
        skip: offset,
      });

      return plans.map((plan: any) => ({
        id: plan.id,
        planId: plan.id,
        name: plan.name,
        carrier: {
          id: plan.carriers.id,
          name: plan.carriers.name,
          amBestRating: plan.carriers.am_best_rating || undefined,
        },
        planType: {
          id: plan.plan_types.id,
          name: plan.plan_types.name,

        },
        premium: Number(plan.premium),
        deductible: Number(plan.deductible),
        maxOutOfPocket: Number(plan.max_out_of_pocket),
        starRating: plan.star_rating ? Number(plan.star_rating) : undefined,
        includesPartD: false, // Default value since field doesn't exist
        dentalCoverage: false, // Default value since field doesn't exist
        visionCoverage: false, // Default value since field doesn't exist
        hearingCoverage: false, // Default value since field doesn't exist
        fitnessBenefits: false, // Default value since field doesn't exist
        transportation: false, // Default value since field doesn't exist
        otcBenefits: false, // Default value since field doesn't exist
        networkSize: undefined, // Default value since field doesn't exist
        requiresReferrals: true, // Default value since field doesn't exist
        planYear: new Date().getFullYear(), // Default to current year
        status: 'active', // Default value since field doesn't exist
      }));
    } catch (error) {
      console.error('Error searching Medicare plans:', error);
      throw new Error('Failed to search Medicare plans');
    }
  }

  /**
   * Get plan details by ID
   */
  static async getPlanById(planId: string): Promise<PlanSearchResult | null> {
    try {
      const plan = await prisma.medicare_plans.findUnique({
        where: { id: planId },
        include: {
          carriers: true,
          plan_types: true,
          formularies: true,
          plan_providers: {
            include: {
              providers: true,
            },
          },
        },
      });

      if (!plan) {
        return null;
      }

      return {
        id: plan.id,
        planId: plan.id,
        name: plan.name,
        carrier: {
          id: plan.carriers.id,
          name: plan.carriers.name,
          amBestRating: plan.carriers.am_best_rating || undefined,
        },
        planType: {
          id: plan.plan_types.id,
          name: plan.plan_types.name,

        },
        premium: Number(plan.premium),
        deductible: Number(plan.deductible),
        maxOutOfPocket: Number(plan.max_out_of_pocket),
        starRating: plan.star_rating ? Number(plan.star_rating) : undefined,
        includesPartD: false, // Default value since field doesn't exist
        dentalCoverage: false, // Default value since field doesn't exist
        visionCoverage: false, // Default value since field doesn't exist
        hearingCoverage: false, // Default value since field doesn't exist
        fitnessBenefits: false, // Default value since field doesn't exist
        transportation: false, // Default value since field doesn't exist
        otcBenefits: false, // Default value since field doesn't exist
        networkSize: undefined, // Default value since field doesn't exist
        requiresReferrals: true, // Default value since field doesn't exist
        planYear: new Date().getFullYear(), // Default to current year
        status: 'active', // Default value since field doesn't exist
      };
    } catch (error) {
      console.error('Error getting plan details:', error);
      throw new Error('Failed to get plan details');
    }
  }

  /**
   * Get plans available in a specific ZIP code
   */
  static async getPlansByZipCode(zipCode: string, planYear?: number): Promise<PlanSearchResult[]> {
    try {
      const year = planYear || new Date().getFullYear();

      const plans = await prisma.medicare_plans.findMany({
        where: {
          // plan_year field doesn't exist, so we'll just get all active plans
          plan_locations: {
            some: {
              locations: {
                zip_code: zipCode,
              },
            },
          },
        },
        include: {
          carriers: true,
          plan_types: true,
        },
        orderBy: [
          { premium: 'asc' },
          { star_rating: 'desc' },
        ],
      });

      return plans.map((plan: any) => ({
        id: plan.id,
        planId: plan.id,
        name: plan.name,
        carrier: {
          id: plan.carriers.id,
          name: plan.carriers.name,
          amBestRating: plan.carriers.am_best_rating || undefined,
        },
        planType: {
          id: plan.plan_types.id,
          name: plan.plan_types.name,

        },
        premium: Number(plan.premium),
        deductible: Number(plan.deductible),
        maxOutOfPocket: Number(plan.max_out_of_pocket),
        starRating: plan.star_rating ? Number(plan.star_rating) : undefined,
        includesPartD: false, // Default value since field doesn't exist
        dentalCoverage: false, // Default value since field doesn't exist
        visionCoverage: false, // Default value since field doesn't exist
        hearingCoverage: false, // Default value since field doesn't exist
        fitnessBenefits: false, // Default value since field doesn't exist
        transportation: false, // Default value since field doesn't exist
        otcBenefits: false, // Default value since field doesn't exist
        networkSize: undefined, // Default value since field doesn't exist
        requiresReferrals: true, // Default value since field doesn't exist
        planYear: new Date().getFullYear(), // Default to current year
        status: 'active', // Default value since field doesn't exist
      }));
    } catch (error) {
      console.error('Error getting plans by ZIP code:', error);
      throw new Error('Failed to get plans by ZIP code');
    }
  }

  /**
   * Get all carriers
   */
  static async getCarriers(): Promise<Array<{ id: string; name: string; amBestRating?: string }>> {
    try {
      const carriers = await prisma.carriers.findMany({
        orderBy: { name: 'asc' },
      });

      return carriers.map((carrier: any) => ({
        id: carrier.id,
        name: carrier.name,
        amBestRating: carrier.am_best_rating || undefined,
      }));
    } catch (error) {
      console.error('Error getting carriers:', error);
      throw new Error('Failed to get carriers');
    }
  }

  /**
   * Get all plan types
   */
  static async getPlanTypes(): Promise<Array<{ id: string; name: string; description?: string }>> {
    try {
      const planTypes = await prisma.plan_types.findMany({
        orderBy: { name: 'asc' },
      });

      return planTypes.map((type: any) => ({
        id: type.id,
        name: type.name,
        description: type.description || undefined,
      }));
    } catch (error) {
      console.error('Error getting plan types:', error);
      throw new Error('Failed to get plan types');
    }
  }

  /**
   * Get location information by ZIP code
   */
  static async getLocationByZipCode(zipCode: string) {
    try {
      const location = await prisma.locations.findFirst({
        where: { zip_code: zipCode },
      });

      return location ? {
        id: location.id,
        zipCode: location.zip_code,
        city: location.city,
        state: location.state,
        county: location.county,
        latitude: undefined, // Field doesn't exist in database
        longitude: undefined, // Field doesn't exist in database
        population: undefined, // Field doesn't exist in database
      } : null;
    } catch (error) {
      console.error('Error getting location by ZIP code:', error);
      throw new Error('Failed to get location by ZIP code');
    }
  }
}
