"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const plans = [
  {
    name: 'Preview Pass',
    price: 'Free',
    period: '',
    features: [
      'Free credits (expire in 7 days)',
      'Access to Google Gemini only',
      'All features included',
      'Community Support',
    ],
    cta: 'Try for Free',
    popular: false,
  },
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    features: [
      '$29 monthly credits',
      'Access to Gemini + Premium Models (GPT-4.1, Claude 4)',
      'All features included',
      'Standard Email Support',
    ],
    cta: 'Subscribe Now',
    popular: false,
  },
  {
    name: 'Advanced',
    price: '$49',
    period: '/month',
    features: [
      '$55 monthly credits (12% bonus)',
      'Access to Gemini + Premium Models',
      'All features included',
      'Priority Email Support',
    ],
    cta: 'Subscribe Now',
    popular: true,
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    features: [
      '$125 monthly credits (26% bonus)',
      'Access to Gemini + Premium Models',
      'All features + Team Features (Coming Soon)',
      'Dedicated Support Channel',
    ],
    cta: 'Subscribe Now',
    popular: false,
  },
];

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-secondary-500">Choose Your Plan</h2>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto">
            Transparent pricing with built-in token optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-apple-lg overflow-hidden transform transition-transform duration-300 h-full flex flex-col ${
                plan.popular
                  ? 'border-2 border-primary-500 shadow-apple-md lg:scale-105'
                  : 'border border-gray-200 shadow-apple'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-bl-lg">
                  GET NOW!
                </div>
              )}
              
              <div className="p-4 sm:p-6 bg-white flex flex-col h-full">
                <h3 className="text-lg sm:text-xl font-bold text-secondary-500 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-secondary-500">{plan.price}</span>
                  <span className="text-secondary-400 ml-1 text-sm sm:text-base">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary-400 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/download"
                  className={`w-full block text-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors font-medium mt-auto text-sm sm:text-base ${
                    plan.popular
                      ? 'bg-primary-500 hover:bg-primary-600 text-white'
                      : 'bg-gray-100 text-secondary-500 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 