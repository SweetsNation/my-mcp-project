// Paid Advertising Campaign Configuration
// Google Ads, Facebook Ads, and other paid marketing channels

import { marketingStrategies } from './marketing-strategy-config';

export interface GoogleAdsConfig {
  campaignName: string;
  campaignType: 'Search' | 'Display' | 'Shopping' | 'Video' | 'Performance Max';
  budget: {
    daily: number;
    monthly: number;
    currency: string;
  };
  bidStrategy: string;
  targetCPC: number;
  adGroups: GoogleAdGroup[];
  negativeKeywords: string[];
  extensions: AdExtension[];
  conversionTracking: ConversionGoal[];
}

export interface GoogleAdGroup {
  name: string;
  keywords: GoogleKeyword[];
  ads: GoogleAd[];
  bidAdjustments: BidAdjustment[];
  demographics: DemographicTargeting;
  geographic: GeographicTargeting;
}

export interface GoogleKeyword {
  text: string;
  matchType: 'exact' | 'phrase' | 'broad';
  maxCPC: number;
  quality: {
    expectedQualityScore: number;
    expectedCTR: number;
    adRelevance: string;
    landingPageExperience: string;
  };
}

export interface GoogleAd {
  headline1: string;
  headline2: string;
  headline3?: string;
  description1: string;
  description2?: string;
  displayURL: string;
  finalURL: string;
  callouts?: string[];
  sitelinks?: Sitelink[];
}

export interface FacebookAdsConfig {
  campaignName: string;
  objective: string;
  budget: {
    daily: number;
    monthly: number;
    currency: string;
  };
  adSets: FacebookAdSet[];
  creatives: FacebookCreative[];
  audiences: FacebookAudience[];
  placements: string[];
  optimization: {
    bidStrategy: string;
    optimizationGoal: string;
  };
}

export interface FacebookAdSet {
  name: string;
  audience: FacebookAudience;
  placement: string[];
  budget: number;
  schedule: {
    startDate: string;
    endDate?: string;
    dayParting?: DayPartingSchedule[];
  };
  bidCap?: number;
}

export interface FacebookAudience {
  name: string;
  type: 'saved' | 'custom' | 'lookalike';
  demographics: {
    ageMin: number;
    ageMax: number;
    gender: string[];
    locations: string[];
    languages: string[];
  };
  interests: string[];
  behaviors: string[];
  customAudiences?: string[];
  exclusions?: string[];
}

export interface FacebookCreative {
  name: string;
  format: 'single_image' | 'carousel' | 'video' | 'collection' | 'instant_experience';
  headline: string;
  primaryText: string;
  description?: string;
  callToAction: string;
  media: {
    images?: string[];
    video?: string;
    thumbnail?: string;
  };
  landingPage: string;
}

export interface ConversionGoal {
  name: string;
  value: number;
  action: string;
  category: string;
}

export interface BidAdjustment {
  type: 'device' | 'location' | 'demographic' | 'time';
  modifier: number;
  criteria: string;
}

export interface DemographicTargeting {
  age?: { min: number; max: number };
  gender?: string[];
  householdIncome?: string[];
  parentalStatus?: string[];
}

export interface GeographicTargeting {
  locations: string[];
  radius?: number;
  locationType: 'presence' | 'interest' | 'search';
  exclusions?: string[];
}

export interface AdExtension {
  type: 'sitelink' | 'callout' | 'structured_snippet' | 'call' | 'location' | 'price';
  data: any;
}

export interface Sitelink {
  text: string;
  url: string;
  description1?: string;
  description2?: string;
}

export interface DayPartingSchedule {
  day: string;
  startHour: number;
  endHour: number;
  bidAdjustment: number;
}

export const paidAdvertisingCampaigns: Record<string, {
  googleAds: GoogleAdsConfig[];
  facebookAds: FacebookAdsConfig[];
  totalMonthlyBudget: number;
  expectedResults: {
    clicks: number;
    impressions: number;
    conversions: number;
    costPerLead: number;
  };
}> = {
  'medicare-advantage-maui-county-hawaii': {
    googleAds: [
      {
        campaignName: 'Maui County Medicare Advantage - Search',
        campaignType: 'Search',
        budget: {
          daily: 150,
          monthly: 4500,
          currency: 'USD'
        },
        bidStrategy: 'Target CPA',
        targetCPC: 12.50,
        adGroups: [
          {
            name: 'Maui Medicare Plans',
            keywords: [
              {
                text: 'Medicare Advantage Maui County',
                matchType: 'exact',
                maxCPC: 15.00,
                quality: {
                  expectedQualityScore: 8,
                  expectedCTR: 3.2,
                  adRelevance: 'above_average',
                  landingPageExperience: 'above_average'
                }
              },
              {
                text: 'Medicare plans Hawaii',
                matchType: 'phrase',
                maxCPC: 12.00,
                quality: {
                  expectedQualityScore: 7,
                  expectedCTR: 2.8,
                  adRelevance: 'average',
                  landingPageExperience: 'above_average'
                }
              },
              {
                text: 'Kaiser Permanente Medicare Hawaii',
                matchType: 'phrase',
                maxCPC: 14.00,
                quality: {
                  expectedQualityScore: 8,
                  expectedCTR: 3.5,
                  adRelevance: 'above_average',
                  landingPageExperience: 'above_average'
                }
              }
            ],
            ads: [
              {
                headline1: 'Medicare Advantage Maui County',
                headline2: 'Kaiser & HMSA Networks Available',
                headline3: 'Inter-Island Coverage Included',
                description1: 'Compare Medicare Advantage plans in Maui County with access to top Hawaii healthcare networks. Inter-island emergency coverage included.',
                description2: 'Licensed Hawaii Medicare specialist. Free consultation and plan comparison.',
                displayURL: 'MedicareHawaii.com/Maui',
                finalURL: 'https://your-domain.com/medicare-advantage/maui-county-hawaii',
                callouts: ['Free Expert Consultation', 'Licensed Hawaii Agent', 'Inter-Island Coverage', 'Kaiser & HMSA Networks'],
                sitelinks: [
                  {
                    text: 'Kaiser Medicare Hawaii',
                    url: 'https://your-domain.com/medicare-advantage/maui-county-hawaii#kaiser',
                    description1: 'Kaiser Permanente Medicare',
                    description2: 'Integrated healthcare system'
                  },
                  {
                    text: 'HMSA Medicare Plans',
                    url: 'https://your-domain.com/medicare-advantage/maui-county-hawaii#hmsa',
                    description1: 'HMSA Medicare Advantage',
                    description2: 'Broad provider network'
                  }
                ]
              },
              {
                headline1: 'Hawaii Medicare Expert Help',
                headline2: 'Maui County Residents',
                headline3: 'Compare All Available Plans',
                description1: 'Get personalized Medicare Advantage recommendations from licensed Hawaii specialists. Compare Kaiser, HMSA, and other top plans.',
                description2: 'Call now for free consultation: 331-343-2584',
                displayURL: 'MedicareHawaii.com/Expert',
                finalURL: 'https://your-domain.com/medicare-advantage/maui-county-hawaii'
              }
            ],
            bidAdjustments: [
              {
                type: 'location',
                modifier: 1.20,
                criteria: 'Maui County'
              },
              {
                type: 'device',
                modifier: 0.90,
                criteria: 'mobile'
              },
              {
                type: 'time',
                modifier: 1.15,
                criteria: 'business_hours'
              }
            ],
            demographics: {
              age: { min: 60, max: 75 },
              gender: ['male', 'female'],
              householdIncome: ['top_50_percent']
            },
            geographic: {
              locations: ['Maui County, Hawaii', 'Kahului, HI', 'Lahaina, HI', 'Kihei, HI'],
              radius: 25,
              locationType: 'presence'
            }
          }
        ],
        negativeKeywords: [
          'free Medicare',
          'Medicaid',
          'travel insurance',
          'temporary coverage',
          'Medicare Part D only',
          'prescription only'
        ],
        extensions: [
          {
            type: 'call',
            data: {
              phoneNumber: '331-343-2584',
              countryCode: 'US'
            }
          },
          {
            type: 'location',
            data: {
              businessName: 'Medicare Specialists Hawaii',
              address: 'Serving All Hawaiian Islands'
            }
          },
          {
            type: 'structured_snippet',
            data: {
              header: 'Insurance Types',
              values: ['Medicare Advantage', 'Medicare Supplement', 'Part D Prescription']
            }
          }
        ],
        conversionTracking: [
          {
            name: 'Maui Medicare Phone Call',
            value: 95,
            action: 'phone_call',
            category: 'lead'
          },
          {
            name: 'Maui Medicare Quote Request',
            value: 70,
            action: 'form_submit',
            category: 'lead'
          }
        ]
      }
    ],
    facebookAds: [
      {
        campaignName: 'Maui County Medicare Advantage - Lead Generation',
        objective: 'LEAD_GENERATION',
        budget: {
          daily: 75,
          monthly: 2250,
          currency: 'USD'
        },
        adSets: [
          {
            name: 'Hawaii Residents 60-75',
            audience: {
              name: 'Hawaii Medicare Eligible',
              type: 'saved',
              demographics: {
                ageMin: 60,
                ageMax: 75,
                gender: ['male', 'female'],
                locations: ['Hawaii'],
                languages: ['English']
              },
              interests: [
                'Medicare',
                'Health insurance',
                'Healthcare',
                'Kaiser Permanente',
                'Retirement planning',
                'Senior living',
                'Hawaii healthcare'
              ],
              behaviors: [
                'Interested in healthcare',
                'Likely to engage with health content',
                'Medicare eligible age',
                'Hawaii residents'
              ]
            },
            placement: ['facebook_feeds', 'instagram_feeds', 'facebook_right_column'],
            budget: 50,
            schedule: {
              startDate: '2025-01-01',
              dayParting: [
                {
                  day: 'monday',
                  startHour: 8,
                  endHour: 20,
                  bidAdjustment: 1.0
                },
                {
                  day: 'tuesday',
                  startHour: 8,
                  endHour: 20,
                  bidAdjustment: 1.0
                }
              ]
            }
          }
        ],
        creatives: [
          {
            name: 'Maui Medicare Paradise',
            format: 'single_image',
            headline: 'Medicare Advantage Plans for Maui County',
            primaryText: 'Living in paradise shouldn\'t mean compromising on healthcare. Compare Medicare Advantage plans in Maui County with access to Kaiser Permanente and HMSA networks, plus inter-island coverage for peace of mind.',
            description: 'Licensed Hawaii Medicare specialist. Free consultation.',
            callToAction: 'Learn More',
            media: {
              images: ['/images/maui-healthcare-paradise.jpg']
            },
            landingPage: 'https://your-domain.com/medicare-advantage/maui-county-hawaii'
          },
          {
            name: 'Inter-Island Coverage Focus',
            format: 'carousel',
            headline: 'Medicare That Covers All Hawaiian Islands',
            primaryText: 'Worried about medical care when traveling between islands? Our Medicare Advantage plans include inter-island emergency transportation and coverage across all Hawaiian islands.',
            callToAction: 'Get Info',
            media: {
              images: [
                '/images/hawaii-inter-island-1.jpg',
                '/images/hawaii-inter-island-2.jpg',
                '/images/hawaii-healthcare-network.jpg'
              ]
            },
            landingPage: 'https://your-domain.com/medicare-advantage/maui-county-hawaii'
          }
        ],
        audiences: [
          {
            name: 'Hawaii Medicare Eligible',
            type: 'saved',
            demographics: {
              ageMin: 60,
              ageMax: 75,
              gender: ['male', 'female'],
              locations: ['Hawaii'],
              languages: ['English']
            },
            interests: ['Medicare', 'Healthcare', 'Kaiser Permanente'],
            behaviors: ['Healthcare interested', 'Medicare age eligible']
          },
          {
            name: 'Mainland Retirees to Hawaii',
            type: 'custom',
            demographics: {
              ageMin: 55,
              ageMax: 70,
              gender: ['male', 'female'],
              locations: ['Hawaii'],
              languages: ['English']
            },
            interests: ['Hawaii relocation', 'Retirement', 'Medicare'],
            behaviors: ['Recently moved', 'Retirement planning']
          }
        ],
        placements: ['facebook_feeds', 'instagram_feeds', 'audience_network'],
        optimization: {
          bidStrategy: 'lowest_cost_without_cap',
          optimizationGoal: 'LEAD_GENERATION'
        }
      }
    ],
    totalMonthlyBudget: 6750,
    expectedResults: {
      clicks: 850,
      impressions: 28500,
      conversions: 42,
      costPerLead: 160.71
    }
  },

  'medicare-advantage-cobb-county-georgia': {
    googleAds: [
      {
        campaignName: 'Cobb County Medicare Advantage - Premium Networks',
        campaignType: 'Search',
        budget: {
          daily: 120,
          monthly: 3600,
          currency: 'USD'
        },
        bidStrategy: 'Target ROAS',
        targetCPC: 11.50,
        adGroups: [
          {
            name: 'Premium Healthcare Networks',
            keywords: [
              {
                text: 'Wellstar Medicare Advantage',
                matchType: 'phrase',
                maxCPC: 13.50,
                quality: {
                  expectedQualityScore: 8,
                  expectedCTR: 3.8,
                  adRelevance: 'above_average',
                  landingPageExperience: 'above_average'
                }
              },
              {
                text: 'Northside Hospital Medicare',
                matchType: 'phrase',
                maxCPC: 12.75,
                quality: {
                  expectedQualityScore: 7,
                  expectedCTR: 3.2,
                  adRelevance: 'above_average',
                  landingPageExperience: 'above_average'
                }
              },
              {
                text: 'Medicare Advantage Cobb County Georgia',
                matchType: 'exact',
                maxCPC: 14.00,
                quality: {
                  expectedQualityScore: 9,
                  expectedCTR: 4.1,
                  adRelevance: 'above_average',
                  landingPageExperience: 'above_average'
                }
              }
            ],
            ads: [
              {
                headline1: 'Premium Medicare Advantage',
                headline2: 'Cobb County Networks',
                headline3: 'Wellstar • Northside • Emory',
                description1: 'Access Atlanta\'s finest healthcare networks with Medicare Advantage plans in Cobb County. Wellstar, Northside, and Emory providers available.',
                description2: 'Expert guidance for affluent communities. Call 331-343-2584',
                displayURL: 'AtlantaMedicare.com/Cobb',
                finalURL: 'https://your-domain.com/medicare-advantage/cobb-county-georgia'
              }
            ],
            bidAdjustments: [
              {
                type: 'location',
                modifier: 1.25,
                criteria: 'Cobb County, GA'
              },
              {
                type: 'demographic',
                modifier: 1.20,
                criteria: 'household_income_top_30_percent'
              }
            ],
            demographics: {
              age: { min: 58, max: 72 },
              householdIncome: ['top_30_percent', 'top_50_percent']
            },
            geographic: {
              locations: ['Cobb County, GA', 'Marietta, GA', 'Kennesaw, GA', 'Smyrna, GA'],
              locationType: 'presence'
            }
          }
        ],
        negativeKeywords: [
          'cheap Medicare',
          'free Medicare',
          'Medicaid',
          'low income',
          'emergency only'
        ],
        extensions: [
          {
            type: 'call',
            data: { phoneNumber: '331-343-2584' }
          },
          {
            type: 'sitelink',
            data: [
              { text: 'Wellstar Network', url: '/medicare-advantage/cobb-county-georgia#wellstar' },
              { text: 'Northside Hospitals', url: '/medicare-advantage/cobb-county-georgia#northside' },
              { text: 'Executive Benefits', url: '/medicare-advantage/cobb-county-georgia#executive' }
            ]
          }
        ],
        conversionTracking: [
          {
            name: 'Cobb County Premium Lead',
            value: 80,
            action: 'phone_call',
            category: 'premium_lead'
          }
        ]
      }
    ],
    facebookAds: [
      {
        campaignName: 'Cobb County Executive Medicare',
        objective: 'CONVERSIONS',
        budget: {
          daily: 60,
          monthly: 1800,
          currency: 'USD'
        },
        adSets: [
          {
            name: 'Affluent Atlanta Suburbs',
            audience: {
              name: 'Atlanta Executive Medicare',
              type: 'saved',
              demographics: {
                ageMin: 55,
                ageMax: 70,
                gender: ['male', 'female'],
                locations: ['Cobb County, GA', 'Marietta, GA'],
                languages: ['English']
              },
              interests: [
                'Executive benefits',
                'Premium healthcare',
                'Wellstar Health System',
                'Corporate retirement'
              ],
              behaviors: [
                'High net worth',
                'Executive level',
                'Premium healthcare users'
              ]
            },
            placement: ['facebook_feeds', 'instagram_feeds'],
            budget: 40,
            schedule: {
              startDate: '2025-01-01'
            }
          }
        ],
        creatives: [
          {
            name: 'Executive Medicare Transition',
            format: 'single_image',
            headline: 'Medicare for Atlanta Executives',
            primaryText: 'Transitioning from corporate benefits to Medicare? Get premium Medicare Advantage plans with access to Wellstar, Northside, and Emory networks in Cobb County.',
            callToAction: 'Learn More',
            media: {
              images: ['/images/atlanta-executive-healthcare.jpg']
            },
            landingPage: 'https://your-domain.com/medicare-advantage/cobb-county-georgia'
          }
        ],
        audiences: [],
        placements: ['facebook_feeds', 'instagram_feeds'],
        optimization: {
          bidStrategy: 'lowest_cost_without_cap',
          optimizationGoal: 'CONVERSIONS'
        }
      }
    ],
    totalMonthlyBudget: 5400,
    expectedResults: {
      clicks: 680,
      impressions: 22000,
      conversions: 32,
      costPerLead: 168.75
    }
  },

  'medicare-cost-calculator': {
    googleAds: [
      {
        campaignName: 'Medicare Cost Calculator - High Intent',
        campaignType: 'Search',
        budget: {
          daily: 200,
          monthly: 6000,
          currency: 'USD'
        },
        bidStrategy: 'Maximize Conversions',
        targetCPC: 8.75,
        adGroups: [
          {
            name: 'Cost Calculator Tools',
            keywords: [
              {
                text: 'Medicare cost calculator',
                matchType: 'exact',
                maxCPC: 12.50,
                quality: {
                  expectedQualityScore: 9,
                  expectedCTR: 5.2,
                  adRelevance: 'above_average',
                  landingPageExperience: 'above_average'
                }
              },
              {
                text: 'Medicare premium calculator',
                matchType: 'phrase',
                maxCPC: 9.80,
                quality: {
                  expectedQualityScore: 8,
                  expectedCTR: 4.1,
                  adRelevance: 'above_average',
                  landingPageExperience: 'above_average'
                }
              },
              {
                text: 'Medicare out of pocket calculator',
                matchType: 'phrase',
                maxCPC: 11.25,
                quality: {
                  expectedQualityScore: 8,
                  expectedCTR: 3.8,
                  adRelevance: 'above_average',
                  landingPageExperience: 'above_average'
                }
              }
            ],
            ads: [
              {
                headline1: 'Free Medicare Cost Calculator',
                headline2: 'Instant Results - No Sign Up',
                headline3: '2025 Rates Updated Daily',
                description1: 'Calculate your Medicare costs instantly. Compare premiums, deductibles, and out-of-pocket expenses. Free tool, no personal info required.',
                description2: 'Updated with official 2025 Medicare rates. Get accurate estimates now.',
                displayURL: 'MedicareCostCalculator.com',
                finalURL: 'https://your-domain.com/medicare-cost-calculator',
                callouts: ['100% Free Tool', 'No Registration Required', 'Instant Results', '2025 Medicare Rates']
              },
              {
                headline1: 'Calculate Medicare Costs',
                headline2: 'Compare All Plan Types',
                headline3: 'Save Money on Medicare',
                description1: 'Free Medicare cost calculator helps you compare Advantage vs Supplement costs. Find the most affordable Medicare option for your needs.',
                description2: 'Expert analysis included. Call 331-343-2584 for help.',
                displayURL: 'MedicareCostCalculator.com',
                finalURL: 'https://your-domain.com/medicare-cost-calculator'
              }
            ],
            bidAdjustments: [
              {
                type: 'device',
                modifier: 1.10,
                criteria: 'desktop'
              },
              {
                type: 'time',
                modifier: 1.20,
                criteria: 'business_hours'
              }
            ],
            demographics: {
              age: { min: 55, max: 80 }
            },
            geographic: {
              locations: ['United States'],
              locationType: 'presence'
            }
          }
        ],
        negativeKeywords: [
          'free Medicare',
          'Medicare fraud',
          'Medicare scam',
          'illegal Medicare',
          'Medicare card replacement'
        ],
        extensions: [
          {
            type: 'sitelink',
            data: [
              { text: 'Medicare Advantage Calculator', url: '/medicare-cost-calculator#advantage' },
              { text: 'Supplement Cost Calculator', url: '/medicare-cost-calculator#supplement' },
              { text: 'Part D Cost Calculator', url: '/medicare-cost-calculator#partd' },
              { text: 'Total Medicare Cost Guide', url: '/medicare-cost-calculator#total' }
            ]
          },
          {
            type: 'structured_snippet',
            data: {
              header: 'Calculator Features',
              values: ['Premium Calculator', 'Deductible Calculator', 'Out-of-Pocket Calculator', 'Savings Calculator']
            }
          }
        ],
        conversionTracking: [
          {
            name: 'Calculator Completion',
            value: 40,
            action: 'calculator_complete',
            category: 'engagement'
          },
          {
            name: 'Post-Calculator Phone Call',
            value: 85,
            action: 'phone_call',
            category: 'high_intent_lead'
          }
        ]
      }
    ],
    facebookAds: [
      {
        campaignName: 'Medicare Cost Planning - Educational',
        objective: 'TRAFFIC',
        budget: {
          daily: 100,
          monthly: 3000,
          currency: 'USD'
        },
        adSets: [
          {
            name: 'Medicare Planning Audience',
            audience: {
              name: 'Medicare Cost Researchers',
              type: 'saved',
              demographics: {
                ageMin: 55,
                ageMax: 75,
                gender: ['male', 'female'],
                locations: ['United States'],
                languages: ['English']
              },
              interests: [
                'Medicare',
                'Healthcare costs',
                'Retirement planning',
                'Financial planning',
                'Budget planning'
              ],
              behaviors: [
                'Healthcare cost conscious',
                'Retirement planning',
                'Medicare research'
              ]
            },
            placement: ['facebook_feeds', 'instagram_feeds'],
            budget: 70,
            schedule: {
              startDate: '2025-01-01'
            }
          }
        ],
        creatives: [
          {
            name: 'Medicare Cost Shock Prevention',
            format: 'video',
            headline: 'Don\'t Get Shocked by Medicare Costs',
            primaryText: 'Many people are surprised by Medicare costs. Use our free calculator to estimate your Medicare premiums, deductibles, and out-of-pocket expenses before you enroll.',
            callToAction: 'Learn More',
            media: {
              video: '/videos/medicare-cost-calculator-demo.mp4',
              thumbnail: '/images/medicare-cost-calculator-thumbnail.jpg'
            },
            landingPage: 'https://your-domain.com/medicare-cost-calculator'
          }
        ],
        audiences: [],
        placements: ['facebook_feeds', 'instagram_feeds', 'facebook_stories'],
        optimization: {
          bidStrategy: 'lowest_cost_without_cap',
          optimizationGoal: 'LINK_CLICKS'
        }
      }
    ],
    totalMonthlyBudget: 9000,
    expectedResults: {
      clicks: 2100,
      impressions: 75000,
      conversions: 168,
      costPerLead: 53.57
    }
  },

  'disability-insurance': {
    googleAds: [
      {
        campaignName: 'Disability Insurance - Professional Focus',
        campaignType: 'Search',
        budget: {
          daily: 180,
          monthly: 5400,
          currency: 'USD'
        },
        bidStrategy: 'Target CPA',
        targetCPC: 22.50,
        adGroups: [
          {
            name: 'High Income Professionals',
            keywords: [
              {
                text: 'disability insurance for self employed',
                matchType: 'phrase',
                maxCPC: 28.50,
                quality: {
                  expectedQualityScore: 8,
                  expectedCTR: 2.8,
                  adRelevance: 'above_average',
                  landingPageExperience: 'above_average'
                }
              },
              {
                text: 'individual disability insurance',
                matchType: 'phrase',
                maxCPC: 25.75,
                quality: {
                  expectedQualityScore: 7,
                  expectedCTR: 2.4,
                  adRelevance: 'above_average',
                  landingPageExperience: 'above_average'
                }
              },
              {
                text: 'long term disability insurance',
                matchType: 'phrase',
                maxCPC: 22.50,
                quality: {
                  expectedQualityScore: 8,
                  expectedCTR: 3.1,
                  adRelevance: 'above_average',
                  landingPageExperience: 'above_average'
                }
              }
            ],
            ads: [
              {
                headline1: 'Protect Your Professional Income',
                headline2: 'Disability Insurance Experts',
                headline3: 'Self-Employed Specialists',
                description1: 'Don\'t risk your most valuable asset - your income. Get disability insurance quotes from top-rated carriers. Specialized coverage for professionals.',
                description2: '1 in 4 workers become disabled. Protect your family\'s future.',
                displayURL: 'DisabilityInsuranceExperts.com',
                finalURL: 'https://your-domain.com/disability-insurance'
              },
              {
                headline1: 'Self-Employed Disability Insurance',
                headline2: 'Replace 70% of Your Income',
                headline3: 'Tax-Free Benefits Available',
                description1: 'Self-employed professionals need individual disability insurance. Get quotes for coverage that replaces up to 70% of your income when you can\'t work.',
                description2: 'Free consultation with disability insurance specialists.',
                displayURL: 'SelfEmployedDisability.com',
                finalURL: 'https://your-domain.com/disability-insurance'
              }
            ],
            bidAdjustments: [
              {
                type: 'demographic',
                modifier: 1.30,
                criteria: 'household_income_top_20_percent'
              },
              {
                type: 'device',
                modifier: 1.15,
                criteria: 'desktop'
              }
            ],
            demographics: {
              age: { min: 25, max: 55 },
              householdIncome: ['top_20_percent', 'top_30_percent']
            },
            geographic: {
              locations: ['United States'],
              locationType: 'presence'
            }
          }
        ],
        negativeKeywords: [
          'social security disability',
          'workers compensation',
          'unemployment benefits',
          'free disability',
          'government disability'
        ],
        extensions: [
          {
            type: 'call',
            data: { phoneNumber: '331-343-2584' }
          },
          {
            type: 'sitelink',
            data: [
              { text: 'Income Calculator', url: '/disability-insurance#calculator' },
              { text: 'Professional Coverage', url: '/disability-insurance#professional' },
              { text: 'Self-Employed Guide', url: '/disability-insurance#self-employed' },
              { text: 'Get Free Quote', url: '/disability-insurance#quote' }
            ]
          }
        ],
        conversionTracking: [
          {
            name: 'Disability Insurance Quote Request',
            value: 120,
            action: 'quote_request',
            category: 'high_value_lead'
          },
          {
            name: 'Disability Insurance Phone Consultation',
            value: 150,
            action: 'phone_call',
            category: 'consultation'
          }
        ]
      }
    ],
    facebookAds: [
      {
        campaignName: 'Professional Income Protection',
        objective: 'LEAD_GENERATION',
        budget: {
          daily: 80,
          monthly: 2400,
          currency: 'USD'
        },
        adSets: [
          {
            name: 'High-Income Professionals',
            audience: {
              name: 'Professional Income Protectors',
              type: 'saved',
              demographics: {
                ageMin: 25,
                ageMax: 55,
                gender: ['male', 'female'],
                locations: ['United States'],
                languages: ['English']
              },
              interests: [
                'Income protection',
                'Professional insurance',
                'Financial planning',
                'Self-employment',
                'Business insurance'
              ],
              behaviors: [
                'High net worth',
                'Self-employed',
                'Professional occupations',
                'Business owners'
              ]
            },
            placement: ['facebook_feeds', 'instagram_feeds'],
            budget: 55,
            schedule: {
              startDate: '2025-01-01'
            }
          }
        ],
        creatives: [
          {
            name: 'Income Protection Reality Check',
            format: 'single_image',
            headline: 'What If You Couldn\'t Work Tomorrow?',
            primaryText: '1 in 4 professionals will become disabled before retirement. Are you prepared? Protect your income with disability insurance that replaces up to 70% of your earnings.',
            callToAction: 'Get Quote',
            media: {
              images: ['/images/professional-income-protection.jpg']
            },
            landingPage: 'https://your-domain.com/disability-insurance'
          },
          {
            name: 'Self-Employed Focus',
            format: 'carousel',
            headline: 'Self-Employed? You Need Disability Insurance',
            primaryText: 'No employer safety net means you need individual disability insurance. See how much coverage you need and get quotes from top-rated carriers.',
            callToAction: 'Learn More',
            media: {
              images: [
                '/images/self-employed-protection-1.jpg',
                '/images/self-employed-protection-2.jpg',
                '/images/disability-insurance-benefits.jpg'
              ]
            },
            landingPage: 'https://your-domain.com/disability-insurance'
          }
        ],
        audiences: [],
        placements: ['facebook_feeds', 'instagram_feeds', 'audience_network'],
        optimization: {
          bidStrategy: 'lowest_cost_without_cap',
          optimizationGoal: 'LEAD_GENERATION'
        }
      }
    ],
    totalMonthlyBudget: 7800,
    expectedResults: {
      clicks: 520,
      impressions: 26000,
      conversions: 26,
      costPerLead: 300.00
    }
  }
};

// Campaign Performance Tracking
export interface CampaignMetrics {
  campaignName: string;
  platform: 'google' | 'facebook' | 'linkedin' | 'microsoft';
  period: string;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
  cpc: number;
  conversionRate: number;
  costPerConversion: number;
  roas: number;
}

export const trackCampaignPerformance = (
  pageKey: string,
  campaignName: string,
  metrics: Partial<CampaignMetrics>
): CampaignMetrics => {
  return {
    campaignName,
    platform: metrics.platform || 'google',
    period: metrics.period || 'monthly',
    spend: metrics.spend || 0,
    impressions: metrics.impressions || 0,
    clicks: metrics.clicks || 0,
    conversions: metrics.conversions || 0,
    ctr: metrics.clicks && metrics.impressions ? (metrics.clicks / metrics.impressions) * 100 : 0,
    cpc: metrics.spend && metrics.clicks ? metrics.spend / metrics.clicks : 0,
    conversionRate: metrics.conversions && metrics.clicks ? (metrics.conversions / metrics.clicks) * 100 : 0,
    costPerConversion: metrics.spend && metrics.conversions ? metrics.spend / metrics.conversions : 0,
    roas: metrics.conversions && metrics.spend ? (metrics.conversions * 100) / metrics.spend : 0
  };
};

export const generateCampaignOptimizationRecommendations = (
  pageKey: string,
  metrics: CampaignMetrics[]
): string[] => {
  const recommendations: string[] = [];
  const campaigns = paidAdvertisingCampaigns[pageKey];

  if (!campaigns) return recommendations;

  metrics.forEach(metric => {
    if (metric.ctr < 2.0) {
      recommendations.push(`Improve ad copy and headlines for ${metric.campaignName} - CTR below 2%`);
    }

    if (metric.conversionRate < 1.5) {
      recommendations.push(`Optimize landing page experience for ${metric.campaignName} - low conversion rate`);
    }

    if (metric.costPerConversion > campaigns.expectedResults.costPerLead * 1.5) {
      recommendations.push(`Review keyword targeting for ${metric.campaignName} - high cost per conversion`);
    }

    if (metric.roas < 300) {
      recommendations.push(`Improve bid strategy and audience targeting for ${metric.campaignName} - low ROAS`);
    }
  });

  return recommendations;
};

export default paidAdvertisingCampaigns;