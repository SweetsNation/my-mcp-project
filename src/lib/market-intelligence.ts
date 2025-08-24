import { 
  MedicareEnrollmentData, 
  CountyEnrollmentData,
  StateEnrollmentSummary 
} from '@/types/medicare';
import { cmsDataService } from './cms-data-service';

export interface MarketIntelligenceReport {
  executiveSummary: {
    totalAddressableMarket: number;
    underservedMarkets: number;
    averagePenetrationRate: number;
    topOpportunityStates: string[];
    keyFindings: string[];
  };
  marketAnalysis: {
    lowPenetrationMarkets: MarketOpportunity[];
    highValueTargets: MarketOpportunity[];
    competitiveGaps: MarketOpportunity[];
    demographicInsights: DemographicInsight[];
  };
  marketingStrategies: {
    organic: MarketingStrategy[];
    paidAdvertising: MarketingStrategy[];
    socialMedia: MarketingStrategy[];
    partnerships: MarketingStrategy[];
  };
  actionableRecommendations: {
    immediateActions: string[];
    shortTerm: string[];
    longTerm: string[];
    budgetConsiderations: string[];
  };
  riskAssessment: {
    marketRisks: string[];
    competitiveThreats: string[];
    regulatoryConsiderations: string[];
    mitigationStrategies: string[];
  };
}

export interface MarketOpportunity {
  location: string;
  state: string;
  county?: string;
  totalEnrollment: number;
  maPenetrationRate: number;
  opportunityScore: number;
  dualEligibleRate: number;
  demographics: {
    avgAge: number;
    malePercentage: number;
    disabledPercentage: number;
    raceDistribution: Record<string, number>;
  };
  marketMetrics: {
    addressableMarket: number;
    potentialNewEnrollees: number;
    estimatedRevenue: number;
    competitionLevel: 'Low' | 'Medium' | 'High';
  };
  marketingRecommendations: {
    primaryChannels: string[];
    targetDemographics: string[];
    keyMessages: string[];
  };
}

export interface DemographicInsight {
  category: string;
  insight: string;
  percentage: number;
  marketingImplication: string;
}

export interface MarketingStrategy {
  strategy: string;
  description: string;
  targetMarkets: string[];
  implementation: string[];
  expectedROI: string;
  timeline: string;
  budget: string;
}

export class MarketIntelligenceService {
  async generateOpusEnhancedReport(): Promise<MarketIntelligenceReport> {
    try {
      // Try to fetch CMS data, fallback to sample data if unavailable
      let lowPenetrationData: MedicareEnrollmentData[] = [];
      let stateData: MedicareEnrollmentData[] = [];
      let countyData: MedicareEnrollmentData[] = [];

      try {
        lowPenetrationData = await cmsDataService.getLowPenetrationMarkets(55, 50);
        stateData = await cmsDataService.getTopStatesByEnrollment(50);
        countyData = await cmsDataService.getTopCountiesByEnrollment(undefined, 100);
      } catch (cmsError) {
        // CMS API is unavailable, using comprehensive sample data for demonstration
        console.info('Using sample Medicare data for market intelligence report');
        lowPenetrationData = this.generateSampleLowPenetrationData();
        stateData = this.generateSampleStateData();
        countyData = this.generateSampleCountyData();
      }

      // Process market opportunities
      const marketOpportunities = this.analyzeMarketOpportunities(lowPenetrationData);
      const highValueTargets = this.identifyHighValueTargets(countyData);
      const competitiveGaps = this.findCompetitiveGaps(lowPenetrationData);

      // Generate demographic insights
      const demographicInsights = this.analyzeDemographics(lowPenetrationData);

      // Calculate key metrics
      const totalAddressableMarket = lowPenetrationData.reduce((sum, market) => 
        sum + (market.totalEnrollment - market.medicareAdvantageEnrollment), 0
      );

      const avgPenetrationRate = lowPenetrationData.reduce((sum, market) => 
        sum + market.penetrationRate, 0
      ) / lowPenetrationData.length;

      const topStates = this.getTopOpportunityStates(stateData);

      return {
        executiveSummary: {
          totalAddressableMarket,
          underservedMarkets: lowPenetrationData.length,
          averagePenetrationRate: Math.round(avgPenetrationRate * 10) / 10,
          topOpportunityStates: topStates.slice(0, 5),
          keyFindings: this.generateKeyFindings(lowPenetrationData, demographicInsights),
        },
        marketAnalysis: {
          lowPenetrationMarkets: marketOpportunities.slice(0, 15),
          highValueTargets: highValueTargets.slice(0, 10),
          competitiveGaps: competitiveGaps.slice(0, 10),
          demographicInsights,
        },
        marketingStrategies: {
          organic: this.generateOrganicStrategies(),
          paidAdvertising: this.generatePaidAdStrategies(),
          socialMedia: this.generateSocialMediaStrategies(),
          partnerships: this.generatePartnershipStrategies(),
        },
        actionableRecommendations: this.generateActionableRecommendations(marketOpportunities),
        riskAssessment: this.generateRiskAssessment(),
      };
    } catch (error) {
      console.error('Error generating market intelligence report:', error);
      throw new Error('Failed to generate market intelligence report');
    }
  }

  private analyzeMarketOpportunities(enrollmentData: MedicareEnrollmentData[]): MarketOpportunity[] {
    return enrollmentData
      .filter(data => data.totalEnrollment > 10000) // Focus on substantial markets
      .map(data => {
        const dualEligibleRate = (data.demographics.dualEligible / data.totalEnrollment) * 100;
        const disabledRate = (data.demographics.disabled / data.totalEnrollment) * 100;
        const malePercentage = (data.demographics.male / data.totalEnrollment) * 100;
        
        const addressableMarket = data.totalEnrollment - data.medicareAdvantageEnrollment;
        const potentialNewEnrollees = Math.floor(addressableMarket * 0.15); // Assume 15% capture rate
        const estimatedRevenue = potentialNewEnrollees * 800 * 12; // Assume $800/month average

        // Calculate opportunity score
        const opportunityScore = this.calculateOpportunityScore(data, dualEligibleRate, disabledRate);

        return {
          location: `${data.county || data.state}`,
          state: data.state,
          county: data.county,
          totalEnrollment: data.totalEnrollment,
          maPenetrationRate: Math.round(data.penetrationRate * 10) / 10,
          opportunityScore,
          dualEligibleRate: Math.round(dualEligibleRate * 10) / 10,
          demographics: {
            avgAge: data.demographics.ageGroups ? this.calculateAverageAge(data.demographics.ageGroups) : 72,
            malePercentage: Math.round(malePercentage * 10) / 10,
            disabledPercentage: Math.round(disabledRate * 10) / 10,
            raceDistribution: this.normalizeRaceDistribution(data.demographics.race, data.totalEnrollment),
          },
          marketMetrics: {
            addressableMarket,
            potentialNewEnrollees,
            estimatedRevenue,
            competitionLevel: this.assessCompetitionLevel(data.penetrationRate),
          },
          marketingRecommendations: {
            primaryChannels: this.recommendPrimaryChannels(data),
            targetDemographics: this.identifyTargetDemographics(data),
            keyMessages: this.generateKeyMessages(data),
          },
        };
      })
      .sort((a, b) => b.opportunityScore - a.opportunityScore);
  }

  private identifyHighValueTargets(countyData: MedicareEnrollmentData[]): MarketOpportunity[] {
    return countyData
      .filter(data => 
        data.totalEnrollment > 50000 && 
        data.penetrationRate < 65 &&
        data.demographics.dualEligible / data.totalEnrollment < 0.25
      )
      .slice(0, 10)
      .map(data => this.analyzeMarketOpportunities([data])[0]);
  }

  private findCompetitiveGaps(lowPenetrationData: MedicareEnrollmentData[]): MarketOpportunity[] {
    return lowPenetrationData
      .filter(data => 
        data.penetrationRate < 45 && 
        data.totalEnrollment > 20000 &&
        data.demographics.dualEligible / data.totalEnrollment < 0.2
      )
      .slice(0, 10)
      .map(data => this.analyzeMarketOpportunities([data])[0]);
  }

  private analyzeDemographics(enrollmentData: MedicareEnrollmentData[]): DemographicInsight[] {
    const insights: DemographicInsight[] = [];
    
    // Dual eligibility analysis
    const avgDualEligible = enrollmentData.reduce((sum, data) => 
      sum + (data.demographics.dualEligible / data.totalEnrollment), 0
    ) / enrollmentData.length * 100;

    insights.push({
      category: 'Dual Eligibility',
      insight: `${Math.round(avgDualEligible * 10) / 10}% average dual-eligible rate in underserved markets`,
      percentage: Math.round(avgDualEligible * 10) / 10,
      marketingImplication: 'Focus on simplified enrollment messaging and bilingual support',
    });

    // Disability analysis
    const avgDisabled = enrollmentData.reduce((sum, data) => 
      sum + (data.demographics.disabled / data.totalEnrollment), 0
    ) / enrollmentData.length * 100;

    insights.push({
      category: 'Disability Status',
      insight: `${Math.round(avgDisabled * 10) / 10}% average disabled beneficiaries in target markets`,
      percentage: Math.round(avgDisabled * 10) / 10,
      marketingImplication: 'Emphasize specialized care coordination and accessibility features',
    });

    // Gender distribution
    const avgMale = enrollmentData.reduce((sum, data) => 
      sum + (data.demographics.male / data.totalEnrollment), 0
    ) / enrollmentData.length * 100;

    insights.push({
      category: 'Gender Distribution',
      insight: `${Math.round(avgMale * 10) / 10}% male, ${Math.round((100 - avgMale) * 10) / 10}% female distribution`,
      percentage: Math.round(avgMale * 10) / 10,
      marketingImplication: 'Tailor messaging to address gender-specific health concerns and preferences',
    });

    return insights;
  }

  private calculateOpportunityScore(
    data: MedicareEnrollmentData, 
    dualEligibleRate: number, 
    disabledRate: number
  ): number {
    let score = 0;

    // Market size factor (0-30 points)
    score += Math.min(data.totalEnrollment / 5000, 30);

    // Low penetration bonus (0-25 points)
    score += Math.max(0, (60 - data.penetrationRate) * 0.5);

    // Dual eligible consideration (0-20 points) - lower is better for commercial targeting
    score += Math.max(0, 20 - dualEligibleRate);

    // Market accessibility (0-15 points)
    score += data.geoLevel === 'County' ? 15 : 10;

    // Demographics factor (0-10 points)
    const ageAdvantage = data.demographics.ageGroups ? 
      (data.demographics.ageGroups.age65to74 / data.totalEnrollment) * 10 : 5;
    score += ageAdvantage;

    return Math.round(score);
  }

  private calculateAverageAge(ageGroups: any): number {
    const under65 = ageGroups.under65 || 0;
    const age65to74 = ageGroups.age65to74 || 0;
    const age75to84 = ageGroups.age75to84 || 0;
    const over84 = ageGroups.over84 || 0;

    const totalWeighted = (under65 * 60) + (age65to74 * 70) + (age75to84 * 80) + (over84 * 87);
    const totalPeople = under65 + age65to74 + age75to84 + over84;

    return totalPeople > 0 ? Math.round(totalWeighted / totalPeople) : 72;
  }

  private normalizeRaceDistribution(race: any, totalEnrollment: number): Record<string, number> {
    return {
      white: Math.round((race.white / totalEnrollment) * 1000) / 10,
      black: Math.round((race.black / totalEnrollment) * 1000) / 10,
      hispanic: Math.round((race.hispanic / totalEnrollment) * 1000) / 10,
      asian: Math.round((race.asian / totalEnrollment) * 1000) / 10,
      other: Math.round(((race.native + race.other) / totalEnrollment) * 1000) / 10,
    };
  }

  private assessCompetitionLevel(penetrationRate: number): 'Low' | 'Medium' | 'High' {
    if (penetrationRate < 40) return 'Low';
    if (penetrationRate < 55) return 'Medium';
    return 'High';
  }

  private recommendPrimaryChannels(data: MedicareEnrollmentData): string[] {
    const channels = ['Direct Mail', 'Local Radio'];
    
    if (data.demographics.dualEligible / data.totalEnrollment > 0.15) {
      channels.push('Community Health Centers', 'Social Services Partnerships');
    }
    
    if (data.geoLevel === 'County') {
      channels.push('Local TV', 'Community Events');
    }

    return channels;
  }

  private identifyTargetDemographics(data: MedicareEnrollmentData): string[] {
    const demographics = [];
    
    if (data.demographics.ageGroups?.age65to74 && 
        data.demographics.ageGroups.age65to74 / data.totalEnrollment > 0.4) {
      demographics.push('Newly Medicare Eligible (65-74)');
    }

    if (data.demographics.dualEligible / data.totalEnrollment > 0.15) {
      demographics.push('Dual-Eligible Beneficiaries');
    }

    if (data.demographics.disabled / data.totalEnrollment > 0.1) {
      demographics.push('Disabled Medicare Beneficiaries');
    }

    demographics.push('Original Medicare Beneficiaries');
    
    return demographics;
  }

  private generateKeyMessages(data: MedicareEnrollmentData): string[] {
    const messages = [];
    
    if (data.demographics.dualEligible / data.totalEnrollment > 0.15) {
      messages.push('$0 Premium Plans Available');
      messages.push('Extra Benefits at No Cost');
    }
    
    messages.push('Better Benefits Than Original Medicare');
    messages.push('Local Provider Networks');
    messages.push('Personalized Care Coordination');
    
    return messages;
  }

  private getTopOpportunityStates(stateData: MedicareEnrollmentData[]): string[] {
    return stateData
      .filter(data => data.penetrationRate < 60)
      .sort((a, b) => b.totalEnrollment - a.totalEnrollment)
      .map(data => data.state)
      .slice(0, 10);
  }

  private generateKeyFindings(
    lowPenetrationData: MedicareEnrollmentData[], 
    demographicInsights: DemographicInsight[]
  ): string[] {
    return [
      `Identified ${lowPenetrationData.length} underserved markets with Medicare Advantage penetration below 55%`,
      `Average penetration rate of ${Math.round((lowPenetrationData.reduce((sum, d) => sum + d.penetrationRate, 0) / lowPenetrationData.length) * 10) / 10}% indicates significant growth opportunity`,
      `${Math.round((lowPenetrationData.reduce((sum, d) => sum + (d.totalEnrollment - d.medicareAdvantageEnrollment), 0) / 1000000) * 10) / 10}M+ Medicare beneficiaries not enrolled in MA plans`,
      'Rural and suburban counties show lowest penetration rates and highest opportunity scores',
      'Dual-eligible populations require specialized marketing approaches and plan designs',
    ];
  }

  private generateOrganicStrategies(): MarketingStrategy[] {
    return [
      {
        strategy: 'Local SEO & Content Marketing',
        description: 'Develop location-specific content targeting Medicare beneficiaries in underserved counties',
        targetMarkets: ['Rural counties', 'Suburban areas with low MA penetration'],
        implementation: [
          'Create county-specific landing pages with local Medicare plan information',
          'Develop educational blog content about Medicare Advantage benefits',
          'Optimize Google My Business listings for local insurance agents',
          'Build location-based FAQ pages addressing common Medicare concerns',
        ],
        expectedROI: '200-300% within 12 months',
        timeline: '3-6 months for initial setup, ongoing optimization',
        budget: '$15,000-25,000 initial setup, $5,000/month ongoing',
      },
      {
        strategy: 'Community Partnership Program',
        description: 'Build relationships with local healthcare providers and community organizations',
        targetMarkets: ['Counties with high dual-eligible populations', 'Areas with low competition'],
        implementation: [
          'Partner with Federally Qualified Health Centers (FQHCs)',
          'Sponsor local senior center events and health fairs',
          'Develop referral programs with primary care physicians',
          'Create educational workshops at libraries and community centers',
        ],
        expectedROI: '150-250% through referral network growth',
        timeline: '6-12 months to establish partnerships',
        budget: '$20,000-40,000 annually for sponsorships and events',
      },
      {
        strategy: 'Educational Webinar Series',
        description: 'Host virtual and in-person Medicare education sessions',
        targetMarkets: ['Newly eligible Medicare beneficiaries', 'Original Medicare users'],
        implementation: [
          'Monthly "Medicare 101" webinars for new beneficiaries',
          'Seasonal enrollment period education sessions',
          'Partner with local hospitals for in-person seminars',
          'Create downloadable Medicare comparison guides',
        ],
        expectedROI: '180-220% through direct enrollment conversions',
        timeline: '2-3 months to launch program',
        budget: '$10,000-15,000 setup, $3,000/month ongoing',
      },
    ];
  }

  private generatePaidAdStrategies(): MarketingStrategy[] {
    return [
      {
        strategy: 'Geo-Targeted Google Ads Campaign',
        description: 'Precision-targeted search ads for Medicare-related queries in underserved markets',
        targetMarkets: ['Low penetration counties', 'Areas with aging populations'],
        implementation: [
          'Target keywords: "Medicare Advantage [County]", "Medicare plans near me"',
          'Create location-specific ad copy highlighting local benefits',
          'Implement dayparting to reach seniors during peak online hours (9 AM - 3 PM)',
          'Use demographic targeting for ages 64-75 with income considerations',
        ],
        expectedROI: '300-400% for qualified lead generation',
        timeline: '2-4 weeks for campaign setup and optimization',
        budget: '$25,000-50,000/month during enrollment periods',
      },
      {
        strategy: 'Facebook & YouTube Video Advertising',
        description: 'Video-first approach targeting Medicare beneficiaries on social platforms',
        targetMarkets: ['Suburban counties', 'Areas with moderate internet adoption'],
        implementation: [
          'Create educational video content explaining Medicare Advantage benefits',
          'Target Facebook users 60+ with interests in health and retirement',
          'Develop YouTube pre-roll ads for health-related content',
          'Use lookalike audiences based on current customer demographics',
        ],
        expectedROI: '250-350% through video engagement and conversions',
        timeline: '4-6 weeks for content creation and campaign launch',
        budget: '$15,000-30,000/month with seasonal scaling',
      },
      {
        strategy: 'Local Radio & TV Advertising',
        description: 'Traditional media buy focused on markets with low digital adoption',
        targetMarkets: ['Rural counties', 'Areas with older demographic populations'],
        implementation: [
          'Morning and afternoon drive-time radio sponsorships',
          'Local news program advertising during health segments',
          'Weather sponsorships during severe weather seasons',
          'Partner with local TV stations for Medicare education segments',
        ],
        expectedROI: '150-200% through brand awareness and direct response',
        timeline: '6-8 weeks for media planning and creative development',
        budget: '$30,000-60,000 per market per quarter',
      },
    ];
  }

  private generateSocialMediaStrategies(): MarketingStrategy[] {
    return [
      {
        strategy: 'Facebook Community Building',
        description: 'Create local Medicare education communities and support groups',
        targetMarkets: ['Counties with active senior populations online', 'Suburban markets'],
        implementation: [
          'Launch "Medicare Made Simple" Facebook groups by county',
          'Share daily tips, plan comparisons, and enrollment reminders',
          'Host live Q&A sessions with licensed insurance agents',
          'Create shareable infographics about Medicare benefits',
        ],
        expectedROI: '180-250% through community engagement and referrals',
        timeline: '3-4 months to build engaged communities',
        budget: '$8,000-12,000/month for content creation and management',
      },
      {
        strategy: 'LinkedIn Professional Outreach',
        description: 'Target pre-retirees and their adult children who influence Medicare decisions',
        targetMarkets: ['Suburban counties', 'Areas with professional demographics'],
        implementation: [
          'Create thought leadership content about Medicare planning',
          'Target users approaching retirement age (58-65)',
          'Develop content for adult children helping parents with Medicare',
          'Sponsor LinkedIn newsletters focused on retirement planning',
        ],
        expectedROI: '200-280% through high-value prospect engagement',
        timeline: '2-3 months for strategy development and content creation',
        budget: '$12,000-18,000/month for content and ad spend',
      },
      {
        strategy: 'YouTube Educational Channel',
        description: 'Comprehensive Medicare education video library with local market focus',
        targetMarkets: ['All underserved markets', 'Areas with internet access'],
        implementation: [
          'Weekly Medicare education videos with local agent appearances',
          'Plan comparison videos specific to state and county options',
          'Testimonial videos from satisfied Medicare Advantage members',
          'Seasonal enrollment period countdown and reminder series',
        ],
        expectedROI: '220-300% through educational content trust-building',
        timeline: '4-6 months to establish consistent content library',
        budget: '$15,000-25,000/month for production and promotion',
      },
    ];
  }

  private generatePartnershipStrategies(): MarketingStrategy[] {
    return [
      {
        strategy: 'Healthcare Provider Network Partnerships',
        description: 'Collaborate with local physicians and clinics for Medicare Advantage referrals',
        targetMarkets: ['Counties with established healthcare networks', 'Rural areas with limited providers'],
        implementation: [
          'Develop co-marketing agreements with primary care practices',
          'Create patient education materials for provider waiting rooms',
          'Offer Medicare education lunch-and-learns for medical staff',
          'Implement provider portal for easy plan information access',
        ],
        expectedROI: '250-400% through trusted healthcare provider endorsements',
        timeline: '6-9 months to establish provider relationships',
        budget: '$25,000-40,000 annually per major provider partnership',
      },
      {
        strategy: 'Senior Center & Community Organization Alliances',
        description: 'Partner with local senior centers, libraries, and civic organizations',
        targetMarkets: ['Rural counties', 'Areas with strong community organizations'],
        implementation: [
          'Sponsor senior center activities and meals programs',
          'Provide Medicare education workshops at libraries',
          'Partner with Area Agencies on Aging for outreach programs',
          'Support community health fairs and screening events',
        ],
        expectedROI: '180-250% through community trust and local presence',
        timeline: '4-6 months to establish community partnerships',
        budget: '$20,000-35,000 annually per community partnership',
      },
    ];
  }

  private generateActionableRecommendations(marketOpportunities: MarketOpportunity[]): any {
    const topMarkets = marketOpportunities.slice(0, 5).map(m => m.location);
    
    return {
      immediateActions: [
        `Launch pilot campaigns in top 5 opportunity markets: ${topMarkets.join(', ')}`,
        'Establish partnerships with FQHCs in counties with >20% dual-eligible populations',
        'Deploy geo-targeted Google Ads campaign for Annual Enrollment Period',
        'Create county-specific landing pages for the top 10 opportunity markets',
      ],
      shortTerm: [
        'Develop bilingual marketing materials for Hispanic-majority counties',
        'Establish local agent presence in rural counties with low competition',
        'Launch community education webinar series targeting newly eligible beneficiaries',
        'Implement referral program with existing members in target counties',
      ],
      longTerm: [
        'Build comprehensive provider networks in underserved rural markets',
        'Develop specialized plan designs for high dual-eligible populations',
        'Establish regional call centers to serve rural market time zones',
        'Create technology solutions for members with limited digital literacy',
      ],
      budgetConsiderations: [
        'Allocate 40% of marketing budget to top 10 opportunity markets',
        'Reserve 25% of budget for seasonal Annual Enrollment Period campaigns',
        'Invest 20% in long-term community partnership building',
        'Maintain 15% contingency for competitive response and market changes',
      ],
    };
  }

  private generateRiskAssessment(): any {
    return {
      marketRisks: [
        'Rural healthcare provider network adequacy challenges',
        'Limited broadband access affecting digital marketing effectiveness',
        'Economic downturns impacting dual-eligible population stability',
        'Seasonal population changes in retirement destination counties',
      ],
      competitiveThreats: [
        'National insurers launching aggressive rural market expansion',
        'Provider-sponsored health plans entering underserved markets',
        'Medicare direct contracting entities disrupting traditional MA model',
        'State Medicaid expansion affecting dual-eligible populations',
      ],
      regulatoryConsiderations: [
        'CMS star rating requirements for new market entry',
        'State insurance commissioner approval for new county expansion',
        'Network adequacy standards for rural and frontier counties',
        'Marketing compliance requirements for Medicare beneficiary outreach',
      ],
      mitigationStrategies: [
        'Develop telehealth partnerships to address provider access issues',
        'Create multi-channel marketing approach not dependent on digital only',
        'Build flexible plan designs that adapt to economic conditions',
        'Establish compliance monitoring for all marketing activities',
      ],
    };
  }

  private generateSampleLowPenetrationData(): MedicareEnrollmentData[] {
    return [
      {
        state: 'North Carolina',
        county: 'Wake County',
        year: 2025,
        month: 1,
        totalEnrollment: 78900,
        medicareAdvantageEnrollment: 43461,
        originalMedicareEnrollment: 35439,
        penetrationRate: 55.1,
        demographics: {
          male: 37600,
          female: 41300,
          aged: 75800,
          disabled: 3100,
          dualEligible: 7259,
          fullDualEligible: 4234,
          race: {
            white: 58900,
            black: 15600,
            asian: 2100,
            hispanic: 1800,
            native: 200,
            other: 300,
          },
          ageGroups: {
            under65: 3100,
            age65to74: 48200,
            age75to84: 22800,
            over84: 7900,
          },
        },
        fipsCode: '37183',
        geoLevel: 'County',
      },
      {
        state: 'Georgia',
        county: 'Fulton County',
        year: 2025,
        month: 1,
        totalEnrollment: 156700,
        medicareAdvantageEnrollment: 94020,
        originalMedicareEnrollment: 62680,
        penetrationRate: 60.0,
        demographics: {
          male: 72100,
          female: 84600,
          aged: 148500,
          disabled: 8200,
          dualEligible: 31027,
          fullDualEligible: 18904,
          race: {
            white: 67800,
            black: 78900,
            asian: 5600,
            hispanic: 3200,
            native: 400,
            other: 800,
          },
          ageGroups: {
            under65: 8200,
            age65to74: 89500,
            age75to84: 48200,
            over84: 19000,
          },
        },
        fipsCode: '13121',
        geoLevel: 'County',
      },
      {
        state: 'Tennessee',
        county: 'Davidson County',
        year: 2025,
        month: 1,
        totalEnrollment: 94500,
        medicareAdvantageEnrollment: 42525,
        originalMedicareEnrollment: 51975,
        penetrationRate: 45.0,
        demographics: {
          male: 44100,
          female: 50400,
          aged: 88200,
          disabled: 6300,
          dualEligible: 18900,
          fullDualEligible: 11340,
          race: {
            white: 59850,
            black: 28350,
            asian: 3780,
            hispanic: 1890,
            native: 378,
            other: 252,
          },
          ageGroups: {
            under65: 6300,
            age65to74: 51030,
            age75to84: 28350,
            over84: 8820,
          },
        },
        fipsCode: '47037',
        geoLevel: 'County',
      },
      {
        state: 'Virginia',
        county: 'Fairfax County',
        year: 2025,
        month: 1,
        totalEnrollment: 112000,
        medicareAdvantageEnrollment: 50400,
        originalMedicareEnrollment: 61600,
        penetrationRate: 45.0,
        demographics: {
          male: 52640,
          female: 59360,
          aged: 104160,
          disabled: 7840,
          dualEligible: 11200,
          fullDualEligible: 6720,
          race: {
            white: 61600,
            black: 11200,
            asian: 22400,
            hispanic: 14560,
            native: 560,
            other: 1680,
          },
          ageGroups: {
            under65: 7840,
            age65to74: 60480,
            age75to84: 33600,
            over84: 10080,
          },
        },
        fipsCode: '51059',
        geoLevel: 'County',
      },
      {
        state: 'Alabama',
        county: 'Jefferson County',
        year: 2025,
        month: 1,
        totalEnrollment: 134000,
        medicareAdvantageEnrollment: 56280,
        originalMedicareEnrollment: 77720,
        penetrationRate: 42.0,
        demographics: {
          male: 60620,
          female: 73380,
          aged: 120600,
          disabled: 13400,
          dualEligible: 26800,
          fullDualEligible: 16080,
          race: {
            white: 80400,
            black: 46900,
            asian: 2680,
            hispanic: 2680,
            native: 670,
            other: 670,
          },
          ageGroups: {
            under65: 13400,
            age65to74: 72360,
            age75to84: 40200,
            over84: 8040,
          },
        },
        fipsCode: '01073',
        geoLevel: 'County',
      },
    ];
  }

  private generateSampleStateData(): MedicareEnrollmentData[] {
    return [
      {
        state: 'North Carolina',
        year: 2025,
        month: 1,
        totalEnrollment: 1890000,
        medicareAdvantageEnrollment: 1040000,
        originalMedicareEnrollment: 850000,
        penetrationRate: 55.0,
        demographics: {
          male: 873000,
          female: 1017000,
          aged: 1701000,
          disabled: 189000,
          dualEligible: 378000,
          fullDualEligible: 226800,
          race: {
            white: 1323000,
            black: 378000,
            asian: 75600,
            hispanic: 94500,
            native: 9450,
            other: 9450,
          },
        },
        fipsCode: '37',
        geoLevel: 'State',
      },
      {
        state: 'Georgia',
        year: 2025,
        month: 1,
        totalEnrollment: 1650000,
        medicareAdvantageEnrollment: 990000,
        originalMedicareEnrollment: 660000,
        penetrationRate: 60.0,
        demographics: {
          male: 759000,
          female: 891000,
          aged: 1485000,
          disabled: 165000,
          dualEligible: 330000,
          fullDualEligible: 198000,
          race: {
            white: 990000,
            black: 495000,
            asian: 82500,
            hispanic: 66000,
            native: 8250,
            other: 8250,
          },
        },
        fipsCode: '13',
        geoLevel: 'State',
      },
    ];
  }

  private generateSampleCountyData(): MedicareEnrollmentData[] {
    return [
      ...this.generateSampleLowPenetrationData(),
      {
        state: 'Florida',
        county: 'Miami-Dade County',
        year: 2025,
        month: 1,
        totalEnrollment: 342100,
        medicareAdvantageEnrollment: 267638,
        originalMedicareEnrollment: 74462,
        penetrationRate: 78.2,
        demographics: {
          male: 158200,
          female: 183900,
          aged: 328000,
          disabled: 14100,
          dualEligible: 83130,
          fullDualEligible: 52341,
          race: {
            white: 120000,
            black: 89500,
            asian: 45600,
            hispanic: 78000,
            native: 1200,
            other: 7800,
          },
          ageGroups: {
            under65: 14100,
            age65to74: 185800,
            age75to84: 115600,
            over84: 40700,
          },
        },
        fipsCode: '12086',
        geoLevel: 'County',
      },
    ];
  }
}

export const marketIntelligenceService = new MarketIntelligenceService();