'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

const Comparison = () => {
  return (
    <section id="comparison" className="py-24 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="mb-6 text-secondary-500">How Companion Compares</h2>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto">
            See how differently each AI responds to this request. A fair comparison shows the fundamental difference in capabilities.
          </p>
        </motion.div>
        
        {/* Prompt Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gray-50 rounded-xl px-8 py-4 text-secondary-400 max-w-2xl border border-gray-200 shadow-sm">
            <p className="text-center text-secondary-500 font-medium mb-2">Prompt:</p>
            <p className="text-center">"Please make me a spreadsheet budget planner with nice visuals in Google Sheets<br/>
            on my Google Drive. Include all formulas. Then give me the shareable link."</p>
          </div>
        </motion.div>

        {/* Video Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-full mx-auto mb-24"
        >
          <div className="bg-gray-50 rounded-apple-lg p-6 md:p-12 shadow-apple">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <div className="bg-white rounded-apple-lg overflow-hidden shadow-apple-md border border-gray-100">
                  <div className="bg-gray-100 p-4 border-b border-gray-200">
                    <h4 className="text-secondary-500 font-medium">LLM</h4>
                  </div>
                  {/* Video for desktop, text for mobile */}
                  <div className="hidden md:block aspect-video relative" style={{ minHeight: '350px' }}>
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      style={{ transform: 'scale(1.02)' }}
                    >
                      <source src="/video/chat_gpt.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* Mobile content */}
                  <div className="md:hidden p-6 bg-gray-50 min-h-[200px] flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">💬</div>
                      <h5 className="font-bold text-secondary-500 mb-2">Text-Based Instructions</h5>
                      <p className="text-sm text-secondary-400">
                        "Please create a spreadsheet with sales data, format the headers in bold, and add a chart..."
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-secondary-500 font-medium text-lg">
                    Provides instructions for you to follow
                  </p>
                  <p className="text-secondary-400 mt-2 text-sm md:text-base">
                    LLM gives you step-by-step directions that you must manually execute. You'll need to switch between apps, remember each step, and do all the work yourself.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-apple-lg overflow-hidden shadow-apple-md border border-gray-100">
                  <div className="bg-primary-50 p-4 border-b border-gray-200">
                    <h4 className="text-primary-500 font-medium">Companion</h4>
                  </div>
                  {/* Video for desktop, text for mobile */}
                  <div className="hidden md:block aspect-video relative" style={{ minHeight: '350px' }}>
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      style={{ transform: 'scale(1.02)' }}
                    >
                      <source src="/video/sheet_comparison.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* Mobile content */}
                  <div className="md:hidden p-6 bg-primary-50 min-h-[200px] flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">⚡</div>
                      <h5 className="font-bold text-primary-500 mb-2">Automated Execution</h5>
                      <p className="text-sm text-secondary-400">
                        Companion opens Excel, creates the spreadsheet, formats everything, and generates the chart—all done!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-primary-500 font-medium text-lg">
                    Actually performs the task for you
                  </p>
                  <p className="text-secondary-400 mt-2 text-sm md:text-base">
                    Companion directly interacts with your apps and completes the entire task automatically. Just describe what you need and watch as it creates the spreadsheet, adds formulas, and shares the link with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-medium text-secondary-500">Quick Comparison</h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gray-50 rounded-apple-lg overflow-hidden shadow-apple">
            <div className="grid grid-cols-3 text-center">
              <div className="p-6 border-b border-gray-200">
                <span className="text-secondary-400 font-medium">Feature</span>
              </div>
              <div className="p-6 border-b border-gray-200 bg-white">
                <span className="text-primary-500 font-medium">Companion</span>
              </div>
              <div className="p-6 border-b border-gray-200">
                <span className="text-secondary-400 font-medium">LLM & Others</span>
              </div>

              {comparisonData.map((item, index) => (
                <div key={`row-${index}`} className="contents">
                  <motion.div
                    key={`feature-${index}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}
                  >
                    <span className="text-secondary-500">{item.feature}</span>
                  </motion.div>
                  <motion.div
                    key={`aios-${index}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                    className={`p-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200`}
                  >
                    {item.aios ? (
                      <div className="flex justify-center">
                        <FiCheck className="text-green-500 text-xl" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <FiX className="text-red-500 text-xl" />
                      </div>
                    )}
                  </motion.div>
                  <motion.div
                    key={`others-${index}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className={`p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}
                  >
                    {item.others ? (
                      <div className="flex justify-center">
                        <FiCheck className="text-green-500 text-xl" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <FiX className="text-red-500 text-xl" />
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const comparisonData = [
  {
    feature: 'Directly operates your computer',
    aios: true,
    others: false
  },
  {
    feature: '2,700+ Controllable applications',
    aios: true,
    others: false
  },
  {
    feature: 'Works with your local files',
    aios: true,
    others: false
  },
  {
    feature: 'Runs system commands',
    aios: true,
    others: false
  },
  {
    feature: 'Controls Browser',
    aios: true,
    others: false
  },
  {
    feature: 'Answers questions',
    aios: true,
    others: true
  }
];

export default Comparison; 