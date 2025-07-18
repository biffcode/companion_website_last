'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    question: "How is this different from other LLMs?",
    answer: "Other LLMs requires you to copy/paste and manually execute tasks. Companion actually performs computer actions for you - clicking buttons, filing documents, managing applications."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. Companion runs entirely on your local machine — nothing is sent to the cloud unless you choose to. All data is processed locally and protected with encryption, ensuring your information stays private and secure."
  },
  {
    question: "What if I use Mac or Linux?",
    answer: "Companion is currently Windows-only, but Mac support is just a few weeks away. Linux is on our roadmap and coming as soon as possible."
  },
  {
    question: "How easy is it to set up MCP integration?",
    answer: "Incredibly simple. Our solution lets you set up MCP servers in just a few clicks - the easiest integration on the market. No complex configuration or technical expertise required."
  },
  {
    question: "Do I need technical skills?",
    answer: "No programming required. If you can describe a task in plain English, Companion can likely automate it."
  },
  {
    question: "What happens if AI makes a mistake?",
    answer: "Companion asks for confirmation on potentially risky actions and maintains a full audit log of all activities."
  }
];

const FaqItem = ({ faq, index, isOpen, toggleOpen }: { 
  faq: typeof faqs[0], 
  index: number, 
  isOpen: boolean, 
  toggleOpen: () => void 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-secondary-500 group-hover:text-primary-500 transition-colors">{faq.question}</h3>
        <svg
          className={`w-5 h-5 text-secondary-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-secondary-400">{faq.answer}</p>
      </div>
    </motion.div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg sm:text-xl text-secondary-400 max-w-3xl mx-auto">
            Everything you need to know about Companion AI
          </p>
        </motion.div>

        <div className="bg-white rounded-apple-lg shadow-apple p-6">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 