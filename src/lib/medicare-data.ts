import { MedicarePlan } from '@/types/medicare';

// This would typically come from a database or API
export const sampleMedicarePlans: MedicarePlan[] = [
  {
    id: '1',
    name: 'UnitedHealthcare AARP MedicareComplete Plan 1 (HMO)',
    carrier: 'UnitedHealthcare',
    type: 'HMO',
    premium: 0,
    deductible: 0,
    maxOutOfPocket: 6700,
    dental: true,
    dentalLimit: 3000,
    vision: true,
    visionLimit: 200,
    hearing: true,
    hearingLimit: 2500,
    fitness: true,
    transportation: true,
    overTheCounter: true,
    otcLimit: 120,
    rating: 4.5,
    doctorCopay: 0,
    specialistCopay: 35,
    hospitalCopay: 300,
    urgentCareCopay: 50,
    emergencyRoomCopay: 120,
    zipCodes: ['10001', '10002', '10003', '10004', '10005'],
    counties: ['New York County', 'Kings County', 'Queens County'],
  },
  {
    id: '2',
    name: 'Humana HMO Value Plus',
    carrier: 'Humana',
    type: 'HMO',
    premium: 29,
    deductible: 395,
    maxOutOfPocket: 4900,
    dental: true,
    dentalLimit: 1000,
    vision: true,
    visionLimit: 150,
    hearing: false,
    hearingLimit: 0,
    fitness: true,
    transportation: false,
    overTheCounter: true,
    otcLimit: 75,
    rating: 4.2,
    doctorCopay: 10,
    specialistCopay: 50,
    hospitalCopay: 395,
    urgentCareCopay: 35,
    emergencyRoomCopay: 150,
    zipCodes: ['10001', '10002', '10003', '90210', '90211'],
    counties: ['New York County', 'Los Angeles County'],
  },
  {
    id: '3',
    name: 'Kaiser Permanente Senior Advantage (HMO)',
    carrier: 'Kaiser Permanente',
    type: 'HMO',
    premium: 0,
    deductible: 0,
    maxOutOfPocket: 5900,
    dental: true,
    dentalLimit: 2000,
    vision: true,
    visionLimit: 250,
    hearing: true,
    hearingLimit: 3000,
    fitness: false,
    transportation: true,
    overTheCounter: false,
    otcLimit: 0,
    rating: 4.8,
    doctorCopay: 20,
    specialistCopay: 40,
    hospitalCopay: 0,
    urgentCareCopay: 40,
    emergencyRoomCopay: 100,
    zipCodes: ['94102', '94103', '94104', '94105'],
    counties: ['San Francisco County', 'Santa Clara County'],
  },
  {
    id: '4',
    name: 'Anthem MediBlue Plus (PPO)',
    carrier: 'Anthem',
    type: 'PPO',
    premium: 58,
    deductible: 0,
    maxOutOfPocket: 7550,
    dental: true,
    dentalLimit: 1500,
    vision: true,
    visionLimit: 200,
    hearing: true,
    hearingLimit: 1500,
    fitness: true,
    transportation: true,
    overTheCounter: true,
    otcLimit: 100,
    rating: 4.1,
    doctorCopay: 5,
    specialistCopay: 45,
    hospitalCopay: 0,
    urgentCareCopay: 55,
    emergencyRoomCopay: 130,
    zipCodes: ['30309', '30310', '30311', '30312'],
    counties: ['Fulton County', 'Dekalb County'],
  },
  {
    id: '5',
    name: 'Aetna Better Health Premier (HMO)',
    carrier: 'Aetna',
    type: 'HMO',
    premium: 15,
    deductible: 0,
    maxOutOfPocket: 5500,
    dental: true,
    dentalLimit: 2500,
    vision: true,
    visionLimit: 300,
    hearing: true,
    hearingLimit: 2000,
    fitness: true,
    transportation: true,
    overTheCounter: true,
    otcLimit: 150,
    rating: 4.3,
    doctorCopay: 0,
    specialistCopay: 30,
    hospitalCopay: 250,
    urgentCareCopay: 45,
    emergencyRoomCopay: 100,
    zipCodes: ['33101', '33102', '33103', '33104'],
    counties: ['Miami-Dade County', 'Broward County'],
  },
];

export function getPlansByZipCode(zipCode: string): MedicarePlan[] {
  return sampleMedicarePlans.filter(plan => 
    plan.zipCodes.includes(zipCode)
  );
}

export function getPlansById(ids: string[]): MedicarePlan[] {
  return sampleMedicarePlans.filter(plan => ids.includes(plan.id));
}

export function calculateAnnualCost(plan: MedicarePlan, usage: {
  doctorVisits: number;
  specialistVisits: number;
  hospitalStays: number;
  urgentCareVisits: number;
  emergencyRoomVisits: number;
}): number {
  const premiumCost = plan.premium * 12;
  const doctorCost = usage.doctorVisits * plan.doctorCopay;
  const specialistCost = usage.specialistVisits * plan.specialistCopay;
  const hospitalCost = usage.hospitalStays * plan.hospitalCopay;
  const urgentCareCost = usage.urgentCareVisits * plan.urgentCareCopay;
  const emergencyRoomCost = usage.emergencyRoomVisits * plan.emergencyRoomCopay;
  
  const totalUsageCost = doctorCost + specialistCost + hospitalCost + urgentCareCost + emergencyRoomCost;
  
  // Apply deductible and max out-of-pocket
  const totalMedicalCost = Math.min(plan.deductible + totalUsageCost, plan.maxOutOfPocket);
  
  return premiumCost + totalMedicalCost;
}