'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LocationData } from '@/lib/content-generator';

interface Props {
  headline?: string;
  subtitle?: string;
  locationData?: LocationData;
}

export function MedicareAdvantageHero({ headline, subtitle, locationData }: Props) {
  const [zipCode, setZipCode] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (locationData?.zipCode) {
      setZipCode(locationData.zipCode);
    }
  }, [locationData?.zipCode]);

  const handleZipCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length === 5 && isClient) {
      window.location.href = `/medicare-advantage/plans?zip=${zipCode}`;
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {headline || 'Medicare Advantage Plans 2025'}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle || 'Compare plans with $0 premiums, dental, vision & fitness benefits. Find the perfect Medicare Advantage plan for your needs.'}
          </motion.p>

          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleZipCodeSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <label htmlFor="zipCode" className="sr-only">
                  Enter your ZIP code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  placeholder="Enter your ZIP code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  maxLength={5}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-lg"
                disabled={zipCode.length !== 5}
              >
                Find Plans
              </button>
            </form>
            <p className="text-primary-100 text-sm mt-2">
              Enter your ZIP code to see available plans in your area
            </p>
          </motion.div>

          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">$0 Premium Plans</h3>
              <p className="text-primary-100">Many plans available with no monthly premium</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Extra Benefits</h3>
              <p className="text-primary-100">Dental, vision, hearing aids, and fitness programs</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Licensed Agents</h3>
              <p className="text-primary-100">Free guidance from experienced Medicare specialists</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}