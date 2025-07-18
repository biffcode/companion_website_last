'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center px-4 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-500 mb-6 sm:mb-10">
            Ready to reclaim your time?
          </h2>
          
          <Link 
            href="/download" 
            className="inline-flex items-center justify-center w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white font-bold text-lg sm:text-xl md:text-2xl py-4 sm:py-6 px-8 sm:px-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-4 sm:mb-6"
          >
            <div className="flex items-center justify-center">
              TRY FOR FREE
            </div>
          </Link>
          
          <p className="text-secondary-400 text-base sm:text-lg mt-2 sm:mt-4">
            Join 1000+ users already saving hours daily
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 