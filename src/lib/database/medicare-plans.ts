import { query } from './connection';
import { MedicarePlan } from '@/types/medicare';

interface DbMedicarePlan {
  id: string;
  plan_id: string;
  name: string;
  carrier_name: string;
  plan_type_code: string;
  plan_year: number;
  premium: number;
  deductible: number;
  max_out_of_pocket: number;
  doctor_copay: number;
  specialist_copay: number;
  hospital_copay: number;
  urgent_care_copay: number;
  emergency_room_copay: number;
  star_rating: number;
  dental_coverage: boolean;
  dental_limit: number;
  vision_coverage: boolean;
  vision_limit: number;
  hearing_coverage: boolean;
  hearing_limit: number;
  fitness_benefits: boolean;
  transportation: boolean;
  otc_benefits: boolean;
  otc_limit: number;
}

function transformDbPlanToMedicarePlan(dbPlan: DbMedicarePlan): MedicarePlan {
  return {
    id: dbPlan.id,
    name: dbPlan.name,
    carrier: dbPlan.carrier_name,
    type: dbPlan.plan_type_code as 'HMO' | 'PPO' | 'HMO-POS' | 'PFFS',
    premium: Number(dbPlan.premium),
    deductible: Number(dbPlan.deductible),
    maxOutOfPocket: Number(dbPlan.max_out_of_pocket),
    dental: dbPlan.dental_coverage,
    dentalLimit: Number(dbPlan.dental_limit),
    vision: dbPlan.vision_coverage,
    visionLimit: Number(dbPlan.vision_limit),
    hearing: dbPlan.hearing_coverage,
    hearingLimit: Number(dbPlan.hearing_limit),
    fitness: dbPlan.fitness_benefits,
    transportation: dbPlan.transportation,
    overTheCounter: dbPlan.otc_benefits,
    otcLimit: Number(dbPlan.otc_limit),
    rating: Number(dbPlan.star_rating),
    doctorCopay: Number(dbPlan.doctor_copay),
    specialistCopay: Number(dbPlan.specialist_copay),
    hospitalCopay: Number(dbPlan.hospital_copay),
    urgentCareCopay: Number(dbPlan.urgent_care_copay),
    emergencyRoomCopay: Number(dbPlan.emergency_room_copay),
    zipCodes: [], // These would be populated from plan_locations table
    counties: [], // These would be populated from plan_locations table
  };
}

export async function getMedicareplansByZipCode(zipCode: string, year: number = new Date().getFullYear()): Promise<MedicarePlan[]> {
  const sql = `
    SELECT DISTINCT
      mp.id,
      mp.plan_id,
      mp.name,
      c.name as carrier_name,
      pt.code as plan_type_code,
      mp.plan_year,
      mp.premium,
      mp.deductible,
      mp.max_out_of_pocket,
      mp.doctor_copay,
      mp.specialist_copay,
      mp.hospital_copay,
      mp.urgent_care_copay,
      mp.emergency_room_copay,
      mp.star_rating,
      mp.dental_coverage,
      mp.dental_limit,
      mp.vision_coverage,
      mp.vision_limit,
      mp.hearing_coverage,
      mp.hearing_limit,
      mp.fitness_benefits,
      mp.transportation,
      mp.otc_benefits,
      mp.otc_limit
    FROM medicare_plans mp
    INNER JOIN carriers c ON mp.carrier_id = c.id
    INNER JOIN plan_types pt ON mp.plan_type_id = pt.id
    INNER JOIN plan_locations pl ON mp.id = pl.plan_id
    INNER JOIN locations l ON pl.location_id = l.id
    WHERE l.zip_code = $1 
      AND mp.plan_year = $2 
      AND mp.status = 'active'
    ORDER BY mp.premium ASC, mp.star_rating DESC;
  `;

  const dbPlans = await query<DbMedicarePlan>(sql, [zipCode, year]);
  return dbPlans.map(transformDbPlanToMedicarePlan);
}

export async function getMedicarePlanById(planId: string): Promise<MedicarePlan | null> {
  const sql = `
    SELECT 
      mp.id,
      mp.plan_id,
      mp.name,
      c.name as carrier_name,
      pt.code as plan_type_code,
      mp.plan_year,
      mp.premium,
      mp.deductible,
      mp.max_out_of_pocket,
      mp.doctor_copay,
      mp.specialist_copay,
      mp.hospital_copay,
      mp.urgent_care_copay,
      mp.emergency_room_copay,
      mp.star_rating,
      mp.dental_coverage,
      mp.dental_limit,
      mp.vision_coverage,
      mp.vision_limit,
      mp.hearing_coverage,
      mp.hearing_limit,
      mp.fitness_benefits,
      mp.transportation,
      mp.otc_benefits,
      mp.otc_limit
    FROM medicare_plans mp
    INNER JOIN carriers c ON mp.carrier_id = c.id
    INNER JOIN plan_types pt ON mp.plan_type_id = pt.id
    WHERE mp.id = $1 AND mp.status = 'active';
  `;

  const dbPlans = await query<DbMedicarePlan>(sql, [planId]);
  return dbPlans.length > 0 ? transformDbPlanToMedicarePlan(dbPlans[0]) : null;
}

export async function searchMedicarePlans(filters: {
  zipCode?: string;
  planType?: string;
  maxPremium?: number;
  needsDental?: boolean;
  needsVision?: boolean;
  minRating?: number;
  year?: number;
}): Promise<MedicarePlan[]> {
  let sql = `
    SELECT DISTINCT
      mp.id,
      mp.plan_id,
      mp.name,
      c.name as carrier_name,
      pt.code as plan_type_code,
      mp.plan_year,
      mp.premium,
      mp.deductible,
      mp.max_out_of_pocket,
      mp.doctor_copay,
      mp.specialist_copay,
      mp.hospital_copay,
      mp.urgent_care_copay,
      mp.emergency_room_copay,
      mp.star_rating,
      mp.dental_coverage,
      mp.dental_limit,
      mp.vision_coverage,
      mp.vision_limit,
      mp.hearing_coverage,
      mp.hearing_limit,
      mp.fitness_benefits,
      mp.transportation,
      mp.otc_benefits,
      mp.otc_limit
    FROM medicare_plans mp
    INNER JOIN carriers c ON mp.carrier_id = c.id
    INNER JOIN plan_types pt ON mp.plan_type_id = pt.id
  `;

  const conditions: string[] = [];
  const params: any[] = [];
  let paramIndex = 1;

  // Add location filter if zipCode provided
  if (filters.zipCode) {
    sql += `
      INNER JOIN plan_locations pl ON mp.id = pl.plan_id
      INNER JOIN locations l ON pl.location_id = l.id
    `;
    conditions.push(`l.zip_code = $${paramIndex++}`);
    params.push(filters.zipCode);
  }

  // Base conditions
  conditions.push('mp.status = $' + paramIndex++);
  params.push('active');

  conditions.push('mp.plan_year = $' + paramIndex++);
  params.push(filters.year || new Date().getFullYear());

  // Additional filters
  if (filters.planType && filters.planType !== 'all') {
    conditions.push(`pt.code = $${paramIndex++}`);
    params.push(filters.planType);
  }

  if (filters.maxPremium !== undefined) {
    conditions.push(`mp.premium <= $${paramIndex++}`);
    params.push(filters.maxPremium);
  }

  if (filters.needsDental) {
    conditions.push('mp.dental_coverage = true');
  }

  if (filters.needsVision) {
    conditions.push('mp.vision_coverage = true');
  }

  if (filters.minRating) {
    conditions.push(`mp.star_rating >= $${paramIndex++}`);
    params.push(filters.minRating);
  }

  if (conditions.length > 0) {
    sql += ' WHERE ' + conditions.join(' AND ');
  }

  sql += ' ORDER BY mp.premium ASC, mp.star_rating DESC LIMIT 100;';

  const dbPlans = await query<DbMedicarePlan>(sql, params);
  return dbPlans.map(transformDbPlanToMedicarePlan);
}

export async function getPopularPlans(zipCode?: string, limit: number = 10): Promise<MedicarePlan[]> {
  let sql = `
    SELECT DISTINCT
      mp.id,
      mp.plan_id,
      mp.name,
      c.name as carrier_name,
      pt.code as plan_type_code,
      mp.plan_year,
      mp.premium,
      mp.deductible,
      mp.max_out_of_pocket,
      mp.doctor_copay,
      mp.specialist_copay,
      mp.hospital_copay,
      mp.urgent_care_copay,
      mp.emergency_room_copay,
      mp.star_rating,
      mp.dental_coverage,
      mp.dental_limit,
      mp.vision_coverage,
      mp.vision_limit,
      mp.hearing_coverage,
      mp.hearing_limit,
      mp.fitness_benefits,
      mp.transportation,
      mp.otc_benefits,
      mp.otc_limit
    FROM medicare_plans mp
    INNER JOIN carriers c ON mp.carrier_id = c.id
    INNER JOIN plan_types pt ON mp.plan_type_id = pt.id
  `;

  const params: any[] = [];
  let paramIndex = 1;

  if (zipCode) {
    sql += `
      INNER JOIN plan_locations pl ON mp.id = pl.plan_id
      INNER JOIN locations l ON pl.location_id = l.id
      WHERE l.zip_code = $${paramIndex++} AND mp.status = 'active'
    `;
    params.push(zipCode);
  } else {
    sql += " WHERE mp.status = 'active'";
  }

  sql += ` AND mp.plan_year = $${paramIndex++}`;
  params.push(new Date().getFullYear());

  // Order by popularity metrics (star rating, low premium, good benefits)
  sql += `
    ORDER BY 
      mp.star_rating DESC,
      (CASE WHEN mp.premium = 0 THEN 1 ELSE 0 END) DESC,
      mp.premium ASC,
      (CASE WHEN mp.dental_coverage AND mp.vision_coverage THEN 1 ELSE 0 END) DESC
    LIMIT $${paramIndex++};
  `;
  params.push(limit);

  const dbPlans = await query<DbMedicarePlan>(sql, params);
  return dbPlans.map(transformDbPlanToMedicarePlan);
}