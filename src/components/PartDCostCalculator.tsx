'use client';

import { useState } from 'react';

interface Medication {
  id: number;
  name: string;
  isGeneric: boolean;
  monthlyCost: number;
  tier: number;
}

interface CostEstimate {
  monthlyPremium: number;
  annualDeductible: number;
  monthlyMedications: number;
  annualTotal: number;
  potentialSavings: number;
}

export default function PartDCostCalculator() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [planType, setPlanType] = useState('basic');
  const [hasDeductible, setHasDeductible] = useState(true);
  const [estimate, setEstimate] = useState<CostEstimate | null>(null);

  const addMedication = () => {
    const newMedication: Medication = {
      id: Date.now(),
      name: '',
      isGeneric: true,
      monthlyCost: 0,
      tier: 1
    };
    setMedications([...medications, newMedication]);
  };

  const removeMedication = (id: number) => {
    setMedications(medications.filter(med => med.id !== id));
  };

  const updateMedication = (id: number, field: keyof Medication, value: any) => {
    setMedications(medications.map(med => 
      med.id === id ? { ...med, [field]: value } : med
    ));
  };

  const calculateCosts = () => {
    if (medications.length === 0) return;

    let monthlyPremium = 0;
    let annualDeductible = 0;
    let monthlyMedications = 0;

    // Set premium based on plan type
    switch (planType) {
      case 'basic':
        monthlyPremium = 25;
        annualDeductible = hasDeductible ? 250 : 0;
        break;
      case 'enhanced':
        monthlyPremium = 45;
        annualDeductible = hasDeductible ? 0 : 0;
        break;
      case 'premium':
        monthlyPremium = 85;
        annualDeductible = 0;
        break;
    }

    // Calculate medication costs based on tiers and generics
    medications.forEach(med => {
      let copay = 0;
      
      if (med.isGeneric) {
        copay = med.tier === 1 ? 5 : 15;
      } else {
        switch (med.tier) {
          case 2:
            copay = 35;
            break;
          case 3:
            copay = 75;
            break;
          case 4:
            copay = Math.min(med.monthlyCost * 0.4, 150); // 40% coinsurance, max $150
            break;
          default:
            copay = 25;
        }
      }
      
      monthlyMedications += copay;
    });

    // Apply $2,000 annual cap
    const annualMedicationCost = Math.min(monthlyMedications * 12, 2000);
    monthlyMedications = annualMedicationCost / 12;

    const annualTotal = (monthlyPremium * 12) + annualDeductible + annualMedicationCost;

    // Calculate potential savings from optimization
    const currentWithoutInsurance = medications.reduce((sum, med) => sum + med.monthlyCost, 0) * 12;
    const potentialSavings = Math.max(0, currentWithoutInsurance - annualTotal);

    setEstimate({
      monthlyPremium,
      annualDeductible,
      monthlyMedications,
      annualTotal,
      potentialSavings
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Part D Costs</h3>
        <p className="text-gray-600">
          Add your medications and get an estimated annual cost based on typical Medicare Part D plan structures.
        </p>
      </div>

      {/* Plan Type Selection */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-900 mb-3">Plan Type</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className={`p-4 border rounded-lg cursor-pointer transition-colors ${
            planType === 'basic' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
          }`} onClick={() => setPlanType('basic')}>
            <h4 className="font-semibold text-gray-900">Basic Plan</h4>
            <p className="text-sm text-gray-600">Lower premium, higher copays</p>
            <p className="text-sm font-semibold text-blue-600">~$25/month</p>
          </div>
          <div className={`p-4 border rounded-lg cursor-pointer transition-colors ${
            planType === 'enhanced' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
          }`} onClick={() => setPlanType('enhanced')}>
            <h4 className="font-semibold text-gray-900">Enhanced Plan</h4>
            <p className="text-sm text-gray-600">Moderate premium, balanced costs</p>
            <p className="text-sm font-semibold text-blue-600">~$45/month</p>
          </div>
          <div className={`p-4 border rounded-lg cursor-pointer transition-colors ${
            planType === 'premium' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
          }`} onClick={() => setPlanType('premium')}>
            <h4 className="font-semibold text-gray-900">Premium Plan</h4>
            <p className="text-sm text-gray-600">Higher premium, lower copays</p>
            <p className="text-sm font-semibold text-blue-600">~$85/month</p>
          </div>
        </div>
      </div>

      {/* Deductible Option */}
      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={hasDeductible}
            onChange={(e) => setHasDeductible(e.target.checked)}
            className="mr-2 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm font-semibold text-gray-900">
            Include annual deductible (results in lower premium plans)
          </span>
        </label>
      </div>

      {/* Medications */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <label className="block text-sm font-semibold text-gray-900">Your Medications</label>
          <button
            onClick={addMedication}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Add Medication
          </button>
        </div>

        {medications.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Add your medications to get a cost estimate</p>
          </div>
        ) : (
          <div className="space-y-4">
            {medications.map((med) => (
              <div key={med.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Medication Name</label>
                  <input
                    type="text"
                    value={med.name}
                    onChange={(e) => updateMedication(med.id, 'name', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="e.g., Metformin"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Type</label>
                  <select
                    value={med.isGeneric ? 'generic' : 'brand'}
                    onChange={(e) => updateMedication(med.id, 'isGeneric', e.target.value === 'generic')}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  >
                    <option value="generic">Generic</option>
                    <option value="brand">Brand Name</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Tier</label>
                  <select
                    value={med.tier}
                    onChange={(e) => updateMedication(med.id, 'tier', parseInt(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  >
                    <option value={1}>Tier 1 (Preferred Generic)</option>
                    <option value={2}>Tier 2 (Generic/Preferred Brand)</option>
                    <option value={3}>Tier 3 (Non-Preferred)</option>
                    <option value={4}>Tier 4 (Specialty)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Current Cost/Month</label>
                  <input
                    type="number"
                    value={med.monthlyCost || ''}
                    onChange={(e) => updateMedication(med.id, 'monthlyCost', parseFloat(e.target.value) || 0)}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="$0"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    onClick={() => removeMedication(med.id)}
                    className="text-red-600 hover:text-red-800 p-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Calculate Button */}
      {medications.length > 0 && (
        <div className="mb-8 text-center">
          <button
            onClick={calculateCosts}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Calculate My Costs
          </button>
        </div>
      )}

      {/* Results */}
      {estimate && (
        <div className="border-t pt-8">
          <h4 className="text-xl font-bold text-gray-900 mb-6">Your Estimated Annual Costs</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <span className="font-semibold text-gray-900">Monthly Premium:</span>
                <span className="text-lg font-bold text-blue-600">${estimate.monthlyPremium}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <span className="font-semibold text-gray-900">Annual Deductible:</span>
                <span className="text-lg font-bold text-green-600">${estimate.annualDeductible}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                <span className="font-semibold text-gray-900">Monthly Medication Costs:</span>
                <span className="text-lg font-bold text-purple-600">${estimate.monthlyMedications.toFixed(0)}</span>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="p-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl text-center">
                <h5 className="text-lg font-semibold mb-2">Total Annual Cost</h5>
                <div className="text-3xl font-bold mb-2">${estimate.annualTotal.toFixed(0)}</div>
                {estimate.potentialSavings > 0 && (
                  <div className="text-blue-100">
                    <p className="text-sm">Potential Savings:</p>
                    <p className="font-semibold">${estimate.potentialSavings.toFixed(0)}/year</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h5 className="text-sm font-semibold text-yellow-800">Important Notes:</h5>
                <ul className="mt-1 text-sm text-yellow-700 space-y-1">
                  <li>• This is an estimate based on typical plan structures</li>
                  <li>• Actual costs vary by specific plan and pharmacy</li>
                  <li>• 2025 introduces a $2,000 annual out-of-pocket maximum</li>
                  <li>• Generic drugs and preferred pharmacies offer additional savings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              Ready to find the best plan for your specific needs?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:331-343-2584"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call 331-E-HEALTH
              </a>
              <a
                href="/contact"
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}