'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import TypeWriter from './TypeWriter';

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

interface MobileUSPCardProps {
  highlights: Highlight[];
}

const MobileUSPCard = ({ highlights }: MobileUSPCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [highlights.length]);

  const currentHighlight = highlights[currentIndex];

  return (
    <div className="sm:hidden mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="apple-card min-h-[180px] relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="mb-4">
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                className="bg-primary-50 p-3 rounded-full inline-block mb-4"
              >
                <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={currentHighlight.icon} />
                </svg>
              </motion.div>
              <h3 className="text-lg font-medium text-secondary-500 mb-3">{currentHighlight.title}</h3>
            </div>
            <p className="text-secondary-400 text-sm leading-relaxed">{currentHighlight.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicators */}
        <div className="flex space-x-2 mt-6 justify-center">
          {highlights.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary-500 w-8' : 'bg-gray-200 w-1.5'
              }`}
              animate={{
                backgroundColor: index === currentIndex ? '#D9643A' : '#E5E7EB',
                width: index === currentIndex ? 32 : 6
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        {/* Auto-progress bar */}
        <motion.div
          key={currentIndex}
          className="absolute bottom-0 left-0 h-0.5 bg-primary-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 4, ease: 'linear' }}
        />
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [headline, setHeadline] = useState({ prefix: '', highlight: '' });
  const [isTyping, setIsTyping] = useState(false);
  const [typingStage, setTypingStage] = useState(0); // 0: typing prefix, 1: pause, 2: typing highlight, 3: complete
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(-1);
  const [showCursor, setShowCursor] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const headlines = [
    { prefix: 'Reclaim your ', highlight: 'hours.' },
    { prefix: 'Time back ', highlight: 'daily.' },
    { prefix: 'Hours become ', highlight: 'yours.' },
    { prefix: 'Stop managing ', highlight: 'everything.' },
    { prefix: 'Escape digital ', highlight: 'slavery.' },
    { prefix: 'Your secret ', highlight: 'weapon.' },
    { prefix: 'The productivity ', highlight: 'multiplier.' },
    { prefix: 'Beat the ', highlight: 'system.' },
    { prefix: 'Change the ', highlight: 'game.' },
    { prefix: 'Freedom from ', highlight: 'tasks.' },
    { prefix: 'Welcome to ', highlight: 'after.' },
  ];

  const specialHeadline = { prefix: 'The unfair advantage ', highlight: 'you deserve.' };

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check for stored headline in sessionStorage
  useEffect(() => {
    const storedIndex = sessionStorage.getItem('currentHeadlineIndex');
    if (storedIndex !== null) {
      setCurrentHeadlineIndex(parseInt(storedIndex));
    } else {
      // Start with a random headline
      const randomIndex = Math.floor(Math.random() * headlines.length);
      setCurrentHeadlineIndex(randomIndex);
      sessionStorage.setItem('currentHeadlineIndex', randomIndex.toString());
    }
  }, []);

  // Set initial headline when currentHeadlineIndex is set
  useEffect(() => {
    if (currentHeadlineIndex >= 0) {
      // Check if it's 11:11 PM
      const now = new Date();
      const is1111 = now.getHours() === 23 && now.getMinutes() === 11;
      
      if (is1111) {
        setHeadline(specialHeadline);
      } else {
        setHeadline(headlines[currentHeadlineIndex]);
      }
      setIsTyping(true);
      setTypingStage(0);
    }
  }, [currentHeadlineIndex]);

  // Handle typing completion for prefix
  const handlePrefixComplete = () => {
    setTypingStage(1);
    // Pause before typing highlight
    setTimeout(() => {
      setTypingStage(2);
    }, 300);
  };

  // Handle typing completion for highlight
  const handleHighlightComplete = () => {
    setTypingStage(3);
    setShowCursor(false);
    
    // Schedule next headline change
    const timer = setTimeout(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * headlines.length);
      } while (nextIndex === currentHeadlineIndex && headlines.length > 1);
      
      setCurrentHeadlineIndex(nextIndex);
      sessionStorage.setItem('currentHeadlineIndex', nextIndex.toString());
      setShowCursor(true);
    }, 10000); // 10 seconds
    
    return () => clearTimeout(timer);
  };

  // Check for 11:11 PM every minute
  useEffect(() => {
    const checkSpecialTime = () => {
      const now = new Date();
      const is1111 = now.getHours() === 23 && now.getMinutes() === 11;
      
      if (is1111) {
        setHeadline(specialHeadline);
        setIsTyping(true);
        setTypingStage(0);
      } else if (headline === specialHeadline && now.getMinutes() !== 11) {
        // If it's no longer 11:11 and we're showing the special headline, change it
        const randomIndex = Math.floor(Math.random() * headlines.length);
        setCurrentHeadlineIndex(randomIndex);
        sessionStorage.setItem('currentHeadlineIndex', randomIndex.toString());
      }
    };
    
    // Check immediately
    checkSpecialTime();
    
    // Then check every minute
    const interval = setInterval(checkSpecialTime, 60000);
    return () => clearInterval(interval);
  }, [headline]);

  return (
    <section className="bg-white pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-36 md:pb-24 lg:pt-48 lg:pb-32">
      <div className="container mx-auto">
        {/* Two-column hero layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-12 md:mb-20">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 text-center lg:text-left mt-8 sm:mt-0"
          >
            <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8">
              {isTyping && typingStage === 0 && (
                <TypeWriter 
                  text={headline.prefix} 
                  delay={50}
                  className="text-secondary-500 inline"
                  onComplete={handlePrefixComplete}
                  hideCursor={!showCursor}
                />
              )}
              {isTyping && typingStage > 0 && (
                <span className="text-secondary-500 inline">{headline.prefix}</span>
              )}
              {isTyping && typingStage === 2 && (
                <TypeWriter 
                  text={headline.highlight} 
                  delay={50}
                  className="text-primary-500 inline"
                  onComplete={handleHighlightComplete}
                  hideCursor={!showCursor}
                />
              )}
              {isTyping && typingStage > 2 && (
                <span className="text-primary-500 inline">{headline.highlight}</span>
              )}
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl mb-8 text-secondary-400 leading-relaxed"
            >
              Automate your job before somebody else does.
            </motion.p>


          </motion.div>
          
          {/* Right column - Video (Hidden on Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block w-full lg:w-3/5"
          >
            <div className="relative rounded-apple-lg overflow-hidden shadow-apple-lg border border-gray-100 w-full aspect-video">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover rounded-apple-lg"
                playsInline
                muted
                autoPlay
                loop
                style={{ transform: 'none' }}
              >
                <source src="/video/Hero_Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
        
        {/* Features section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full mx-auto"
        >
          {/* Mobile Animated USP Card */}
          <MobileUSPCard highlights={highlights} />

          {/* Desktop Grid Layout */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-10"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                className="apple-card hover:shadow-apple-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 sm:mb-6">
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.9 + (index * 0.2),
                      type: "spring",
                      stiffness: 200
                    }}
                    className="bg-primary-50 p-3 sm:p-4 rounded-full inline-block mb-4 sm:mb-5"
                  >
                    <svg className="h-6 w-6 sm:h-7 sm:w-7 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={highlight.icon} />
                    </svg>
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-medium text-secondary-500">{highlight.title}</h3>
                </div>
                <p className="text-secondary-400">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const highlights = [
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    title: 'Do It, Not Talk It',
    description: 'Companion doesn\'t just chit-chat. It clicks, types, opens, saves—real stuff, really done.'
  },
  {
    icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
    title: 'Connects with Everything',
    description: 'Over 2,700 tools? Yup. Companion plays nice with all your apps. Just say what you want—it knows where to go.'
  },
  {
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    title: 'Gets Smarter Every Day',
    description: 'The more you use it, the better it gets. Companion watches, learns, and fits right into your way of doing things.'
  },
  {
    icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
    title: 'You Chill. It Handles It.',
    description: 'Let Companion do the boring stuff. You sit back like a boss. Less stress, more done.'
  }
];

export default Hero; 