'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const demos = [
  {
    id: 'finding-leads',
    title: 'Finding Leads',
    description: 'Find new customers for your business. Companion looks through websites and social media to find people who might want to buy from you. It saves their contact info and helps you reach out to them.',
    videoSrc: '/video/Finding_Leads.mp4',
  },
  {
    id: 'research',
    title: 'Research',
    description: 'Get information fast. Companion searches many websites at once to find what you need. It reads through lots of pages and gives you the important parts in simple summaries.',
    videoSrc: '/video/Research.mp4',
  },
  {
    id: 'writing-reports',
    title: 'Writing Reports',
    description: 'Turn your ideas into nice reports. Give Companion your notes and it will write them up properly with good formatting. Perfect for work presentations or school papers.',
    videoSrc: '/video/writing_Report.mp4',
  },
  {
    id: 'managing-emails',
    title: 'Managing Emails',
    description: 'Keep your inbox clean and organized. Companion sorts your emails, answers simple ones for you, and makes sure you see the important messages first.',
    videoSrc: '/video/managing_email.mp4',
  },
  {
    id: 'setting-up-meetings',
    title: 'Setting up Meetings',
    description: 'Schedule meetings without the hassle. Companion checks when everyone is free, picks the best times, and sends out invitations. No more back-and-forth emails.',
    videoSrc: '/video/setup_meeting.mp4',
  },
  {
    id: 'organizing-files',
    title: 'Organizing Files',
    description: 'Keep your computer files neat and tidy. Companion puts files in the right folders, gives them good names, and helps you find things quickly when you need them.',
    videoSrc: '/video/organizing_files.mp4',
  },
  {
    id: 'computer-security',
    title: 'Computer Security',
    description: 'Watch for bad things trying to get into your computer. Companion looks for viruses, hackers, and other dangerous stuff. It tells you right away if something suspicious is happening.',
    videoSrc: '/video/computer_security.mp4',
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    description: 'Make social media easy. Companion helps you post at the right times, answers comments, and keeps track of what people are saying about you online.',
    videoSrc: '/video/social_media.mp4',
  },
  {
    id: 'ai-collaboration',
    title: 'AI Collaboration',
    description: 'Work better with AI helpers. Companion connects you to different AI tools and makes them work together. It helps you get better results from ChatGPT and other AI apps.',
    videoSrc: '/video/AI_Colaboration.mp4',
  },
  {
    id: 'installing-removing-apps',
    title: 'Installing and Removing Apps',
    description: 'Add and remove programs safely. Companion finds the right software for you, installs it properly, and removes programs completely when you don\'t need them anymore.',
    videoSrc: '/video/Instaling_software.mp4',
  },
];

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(demos[0].id);
  const [expandedDemo, setExpandedDemo] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activeDemoData = demos.find(demo => demo.id === activeDemo);

  const handleDemoClick = (demoId: string) => {
    setActiveDemo(demoId);
    setExpandedDemo(expandedDemo === demoId ? null : demoId);
    setIsDropdownOpen(false); // Close dropdown on mobile after selection
  };

  return (
    <section id="demo" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-500 mb-3 sm:mb-4">See Companion in Action</h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary-400 max-w-3xl mx-auto px-4 sm:px-0">
            Watch real workflows automated <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>in real-time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Video Display Area (Hidden on Mobile) */}
          <div className="hidden md:block lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white rounded-apple-lg shadow-apple overflow-hidden">
              <div className="bg-gray-900 flex items-center justify-center overflow-hidden relative aspect-video">
                <AnimatePresence mode="wait">
                  {activeDemoData && (
                    <motion.video
                      key={activeDemoData.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      autoPlay
                      playsInline
                    >
                      <source src={activeDemoData.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </motion.video>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Description Panel */}
            {activeDemoData && (
              <motion.div
                key={activeDemoData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 bg-primary-500 text-white p-6 rounded-apple-lg shadow-apple"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{activeDemoData.title}</h3>
                <p className="text-white/90">{activeDemoData.description}</p>
              </motion.div>
            )}
          </div>

          {/* Use Case Selection Area */}
          <div className="lg:col-span-5 md:lg:col-span-12 order-1 lg:order-2">
            <div className="bg-white rounded-apple-lg shadow-apple p-4 md:p-6">
              <h3 className="text-lg font-bold text-secondary-500 mb-4">Use Cases</h3>
              
              {/* Mobile Dropdown */}
              <div className="lg:hidden relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left p-3 bg-primary-500 text-white rounded-apple-lg flex items-center justify-between"
                >
                  <span className="font-medium">{activeDemoData?.title}</span>
                  {isDropdownOpen ? (
                    <IoChevronUp className="w-5 h-5" />
                  ) : (
                    <IoChevronDown className="w-5 h-5" />
                  )}
                </button>
                
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-apple-lg shadow-apple z-10 max-h-60 overflow-y-auto"
                    >
                      {demos.map((demo) => (
                        <button
                          key={demo.id}
                          onClick={() => handleDemoClick(demo.id)}
                          className={`w-full text-left p-3 hover:bg-gray-50 transition-colors first:rounded-t-apple-lg last:rounded-b-apple-lg ${
                            activeDemo === demo.id ? 'bg-gray-100 font-medium' : ''
                          }`}
                        >
                          <span className="text-secondary-500">{demo.title}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Desktop Grid */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-1 gap-2">
                  {demos.map((demo) => (
                    <button
                      key={demo.id}
                      onClick={() => handleDemoClick(demo.id)}
                      className={`text-left p-3 rounded-apple-lg transition-all ${
                        activeDemo === demo.id
                          ? 'bg-primary-500 text-white shadow-sm'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className={`font-medium ${
                          activeDemo === demo.id ? 'text-white' : 'text-secondary-500'
                        }`}>
                          {demo.title}
                        </h4>
                        {activeDemo === demo.id && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <a 
                href="https://www.youtube.com/@companionbyaios" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full text-center mt-4 block"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection; 