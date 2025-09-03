'use client';

import { motion } from 'framer-motion';
import { LocationData } from '@/lib/content-generator';

interface Props {
  headline?: string;
  subtitle?: string;
  locationData?: LocationData;
}

export function MedicareAdvantageHero({ headline, subtitle, locationData }: Props) {

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
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg text-center"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:331-343-2584"
                className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg text-center"
              >
                331-E-HEALTH
              </a>
            </div>
            <p className="text-primary-100 text-sm mt-4 text-center">
              Licensed agents available 7 days a week • No obligation • 100% free service
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