'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Atlanta, GA',
    rating: 5,
    text: 'El-Mag Insurance made finding the right Medicare plan so easy. Maria walked me through every option and helped me find a plan that saved me over $200 per month while getting better benefits.',
    plan: 'BlueCare Medicare Advantage'
  },
  {
    id: 2,
    name: 'Robert T.',
    location: 'Nashville, TN',
    rating: 5,
    text: 'I was overwhelmed by all the Medicare options until I called El-Mag. David took the time to understand my needs and found me a plan with dental and vision coverage included.',
    plan: 'Aetna Better Health'
  },
  {
    id: 3,
    name: 'Linda W.',
    location: 'Raleigh, NC',
    rating: 5,
    text: 'Excellent service! The team helped me switch from a plan that wasn\'t working to one that covers all my medications and has my preferred doctors in network.',
    plan: 'Humana Medicare Advantage'
  },
  {
    id: 4,
    name: 'James R.',
    location: 'Virginia Beach, VA',
    rating: 5,
    text: 'As a veteran, I needed specialized coverage. El-Mag understood my unique situation and found a plan that works perfectly with my VA benefits.',
    plan: 'UnitedHealthcare AARP'
  },
  {
    id: 5,
    name: 'Patricia L.',
    location: 'Birmingham, AL',
    rating: 5,
    text: 'The annual enrollment period was approaching and I was stressed about making the right choice. Lisa at El-Mag made the whole process stress-free and educational.',
    plan: 'Cigna HealthCare'
  },
  {
    id: 6,
    name: 'Michael D.',
    location: 'Charleston, SC',
    rating: 5,
    text: 'I\'ve been a client for 3 years now and the support doesn\'t end after enrollment. They check in regularly and help me understand my benefits.',
    plan: 'Kaiser Permanente'
  }
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real clients say about their experience with El-Mag Insurance.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative bg-white rounded-xl shadow-lg p-8 mb-8">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed max-w-4xl mx-auto">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-center sm:text-left">
                <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-500">Enrolled in:</p>
                <p className="font-medium text-blue-600">{testimonials[currentTestimonial].plan}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Satisfied Clients?</h3>
          <p className="text-gray-600 mb-6">Let our Medicare experts help you find the perfect plan for your needs and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary inline-block text-center">Get Free Consultation</a>
            <a href="tel:331-343-2584" className="btn-secondary inline-block text-center">Call 331-343-2584</a>
          </div>
        </div>
      </div>
    </section>
  );
}