'use client';

import { useState } from 'react';

interface CalculatorState {
  maritalStatus: 'single' | 'married' | '';
  monthlyIncome: string;
  hasAutoQualifier: 'yes' | 'no' | '';
  autoQualifierType: string;
  bankAccounts: string;
  investments: string;
  realEstate: string;
  vehicles: string;
  otherAssets: string;
}

interface QualificationResult {
  qualified: boolean;
  benefitLevel: 'full' | 'partial' | 'none';
  reason: string;
  nextSteps: string[];
  estimatedSavings: string;
}

export default function ExtraHelpCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<CalculatorState>({
    maritalStatus: '',
    monthlyIncome: '',
    hasAutoQualifier: '',
    autoQualifierType: '',
    bankAccounts: '',
    investments: '',
    realEstate: '',
    vehicles: '',
    otherAssets: '',
  });
  const [result, setResult] = useState<QualificationResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateQualification = (): QualificationResult => {
    const income = parseInt(formData.monthlyIncome) || 0;
    const annualIncome = income * 12;
    const isMarried = formData.maritalStatus === 'married';
    
    // Auto qualifiers
    if (formData.hasAutoQualifier === 'yes') {
      return {
        qualified: true,
        benefitLevel: 'full',
        reason: `You automatically qualify for full Medicare Extra Help because you have ${formData.autoQualifierType}.`,
        nextSteps: [
          'Your Extra Help benefits are already active if you have Medicare Part D',
          'If you don\'t have a Part D plan, enroll in one to start using your benefits',
          'You can change Part D plans any time during the year with Extra Help'
        ],
        estimatedSavings: '$800 - $4,800+ per year'
      };
    }

    // Income limits for 2025
    const incomeLimit = isMarried ? 32335 : 23895;
    const partialIncomeLimit = isMarried ? 36750 : 25820; // Estimated 150% FPL
    
    // Calculate total resources
    const totalResources = 
      (parseInt(formData.bankAccounts) || 0) +
      (parseInt(formData.investments) || 0) +
      (parseInt(formData.realEstate) || 0) +
      Math.max(0, (parseInt(formData.vehicles) || 0) - 4500) + // Exclude first $4,500
      (parseInt(formData.otherAssets) || 0);
    
    const resourceLimit = isMarried ? 34360 : 17220;
    
    // Qualification logic
    if (annualIncome > partialIncomeLimit || totalResources > resourceLimit) {
      return {
        qualified: false,
        benefitLevel: 'none',
        reason: annualIncome > partialIncomeLimit 
          ? `Your annual income ($${annualIncome.toLocaleString()}) exceeds the limit of $${partialIncomeLimit.toLocaleString()}.`
          : `Your resources ($${totalResources.toLocaleString()}) exceed the limit of $${resourceLimit.toLocaleString()}.`,
        nextSteps: [
          'Consider regular Medicare Part D plans for prescription drug coverage',
          'Review your resources calculation - some assets may not count',
          'Check if you qualify for other assistance programs',
          'Reapply if your financial situation changes'
        ],
        estimatedSavings: 'Not eligible for Extra Help savings'
      };
    }
    
    if (annualIncome <= incomeLimit && totalResources <= resourceLimit) {
      return {
        qualified: true,
        benefitLevel: 'full',
        reason: `You qualify for full Medicare Extra Help! Your income ($${annualIncome.toLocaleString()}) and resources ($${totalResources.toLocaleString()}) are within the limits.`,
        nextSteps: [
          'Apply for Extra Help through Social Security Administration',
          'Gather required income and asset documentation',
          'Choose a Medicare Part D plan to use your benefits',
          'We can help you with the application and plan selection'
        ],
        estimatedSavings: '$800 - $4,800+ per year'
      };
    }
    
    return {
      qualified: true,
      benefitLevel: 'partial',
      reason: `You qualify for partial Medicare Extra Help. Your income is slightly above the full benefit limit but still within the partial benefit range.`,
      nextSteps: [
        'Apply for Extra Help to receive partial benefits',
        'You\'ll pay sliding scale premiums and 15% of drug costs',
        'No coverage gap with partial Extra Help',
        'We can help determine your exact benefit level'
      ],
      estimatedSavings: '$400 - $2,400+ per year'
    };
  };

  const handleSubmit = () => {
    const calculationResult = calculateQualification();
    setResult(calculationResult);
    setShowResult(true);
  };

  const resetCalculator = () => {
    setStep(1);
    setFormData({
      maritalStatus: '',
      monthlyIncome: '',
      hasAutoQualifier: '',
      autoQualifierType: '',
      bankAccounts: '',
      investments: '',
      realEstate: '',
      vehicles: '',
      otherAssets: '',
    });
    setResult(null);
    setShowResult(false);
  };

  if (showResult && result) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
            result.qualified ? 'bg-green-100' : 'bg-red-100'
          }`}>
            <span className="text-4xl">
              {result.qualified ? '✅' : '❌'}
            </span>
          </div>
          <h2 className={`text-3xl font-bold mb-4 ${
            result.qualified ? 'text-green-600' : 'text-red-600'
          }`}>
            {result.qualified 
              ? `You Qualify for ${result.benefitLevel === 'full' ? 'Full' : 'Partial'} Extra Help!`
              : 'You May Not Qualify for Extra Help'
            }
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">Assessment Result:</h3>
            <p className="text-gray-700">{result.reason}</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-3">Estimated Annual Savings:</h3>
            <p className="text-2xl font-bold text-blue-600">{result.estimatedSavings}</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-bold text-yellow-900 mb-3">Recommended Next Steps:</h3>
            <ul className="space-y-2">
              {result.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start text-yellow-800">
                  <span className="text-yellow-600 mr-2 mt-1">•</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {result.qualified && (
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="font-bold text-green-900 mb-3">Ready to Apply?</h3>
              <p className="text-green-700 mb-4">
                Our Medicare experts can help you apply for Extra Help and find the best Part D plan for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Get Free Application Help
                </a>
                <a
                  href="tel:331-343-2584"
                  className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-center"
                >
                  Call 331-E-HEALTH
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={resetCalculator}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Take Assessment Again
          </button>
        </div>

        <div className="text-xs text-gray-500 mt-6 p-4 bg-gray-50 rounded-lg">
          <p>
            <strong>Disclaimer:</strong> This assessment provides an estimate based on 2025 guidelines. 
            Actual qualification depends on official review by the Social Security Administration. 
            Results are not a guarantee of eligibility. Consult with a Medicare expert for personalized guidance.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Medicare Extra Help Qualification Calculator
        </h2>
        <p className="text-gray-600">
          Answer a few quick questions to see if you qualify for Medicare Extra Help benefits
        </p>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  num <= step
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Step 1: Basic Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Marital Status *
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="maritalStatus"
                  value="single"
                  checked={formData.maritalStatus === 'single'}
                  onChange={(e) => setFormData({...formData, maritalStatus: e.target.value as 'single'})}
                  className="mr-2"
                />
                Single (including divorced, widowed)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="maritalStatus"
                  value="married"
                  checked={formData.maritalStatus === 'married'}
                  onChange={(e) => setFormData({...formData, maritalStatus: e.target.value as 'married'})}
                  className="mr-2"
                />
                Married and living together
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Income (before taxes) *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="number"
                value={formData.monthlyIncome}
                onChange={(e) => setFormData({...formData, monthlyIncome: e.target.value})}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Include Social Security, pensions, wages, and other income sources
            </p>
          </div>

          <div className="flex justify-between">
            <div></div>
            <button
              onClick={() => setStep(2)}
              disabled={!formData.maritalStatus || !formData.monthlyIncome}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Next Step →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Step 2: Automatic Qualification</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Do you have any of these benefits? *
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hasAutoQualifier"
                  value="yes"
                  checked={formData.hasAutoQualifier === 'yes'}
                  onChange={(e) => setFormData({...formData, hasAutoQualifier: e.target.value as 'yes'})}
                  className="mr-2"
                />
                Yes, I have one of these benefits
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="hasAutoQualifier"
                  value="no"
                  checked={formData.hasAutoQualifier === 'no'}
                  onChange={(e) => setFormData({...formData, hasAutoQualifier: e.target.value as 'no'})}
                  className="mr-2"
                />
                No, I don't have any of these benefits
              </label>
            </div>
          </div>

          {formData.hasAutoQualifier === 'yes' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Which benefit do you have? *
              </label>
              <select
                value={formData.autoQualifierType}
                onChange={(e) => setFormData({...formData, autoQualifierType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a benefit</option>
                <option value="Medicaid">Medicaid</option>
                <option value="Supplemental Security Income (SSI)">Supplemental Security Income (SSI)</option>
                <option value="QMB (Qualified Medicare Beneficiary)">QMB (Qualified Medicare Beneficiary)</option>
                <option value="SLMB (Specified Low-Income Medicare Beneficiary)">SLMB (Specified Low-Income Medicare Beneficiary)</option>
                <option value="QI (Qualifying Individual)">QI (Qualifying Individual)</option>
              </select>
            </div>
          )}

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Automatic Qualification Benefits:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Medicaid (any type)</li>
              <li>• Supplemental Security Income (SSI)</li>
              <li>• Medicare Savings Programs (QMB, SLMB, QI)</li>
            </ul>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Previous Step
            </button>
            <button
              onClick={() => formData.hasAutoQualifier === 'yes' ? handleSubmit() : setStep(3)}
              disabled={!formData.hasAutoQualifier || (formData.hasAutoQualifier === 'yes' && !formData.autoQualifierType)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {formData.hasAutoQualifier === 'yes' ? 'Get Results' : 'Next Step →'}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">Step 3: Resources Assessment</h3>
          <p className="text-gray-600">
            Enter the current value of your assets. Don't include your home, personal belongings, one vehicle, 
            life insurance under $1,500, or burial funds up to $1,500.
          </p>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bank Accounts (savings, checking)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="number"
                value={formData.bankAccounts}
                onChange={(e) => setFormData({...formData, bankAccounts: e.target.value})}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Investments (stocks, bonds, mutual funds)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="number"
                value={formData.investments}
                onChange={(e) => setFormData({...formData, investments: e.target.value})}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Real Estate (other than your home)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="number"
                value={formData.realEstate}
                onChange={(e) => setFormData({...formData, realEstate: e.target.value})}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vehicles (total value of all vehicles)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="number"
                value={formData.vehicles}
                onChange={(e) => setFormData({...formData, vehicles: e.target.value})}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              First $4,500 of vehicle value doesn't count toward resource limit
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Other Assets
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="number"
                value={formData.otherAssets}
                onChange={(e) => setFormData({...formData, otherAssets: e.target.value})}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep(2)}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Previous Step
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get My Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}