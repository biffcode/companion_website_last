'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prefix for section links - empty on homepage, '/' on other pages
  const linkPrefix = isHomePage ? '' : '/';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/0'
    }`}>
      <div className="container mx-auto py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-20">
            <Image 
              src="/Companion_Logo.svg" 
              alt="AIOS Companion Logo" 
              width={120} 
              height={40} 
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <Link href={`${linkPrefix}#integrations`} className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
              Integrations
            </Link>
            <Link href={`${linkPrefix}#task-comparison`} className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
              Tasks
            </Link>
            <Link href={`${linkPrefix}#comparison`} className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
              Comparison
            </Link>
            <Link href={`${linkPrefix}#demo`} className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
              Demo
            </Link>
            <Link href={`${linkPrefix}#pricing`} className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
              Pricing
            </Link>
            <Link href="/download" className="btn-primary text-sm flex items-center gap-1">
              <FiDownload size={16} />
              Download
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-secondary-500 p-3 z-20 mobile-menu-button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-white z-10 pt-20 pb-6 overflow-y-auto mobile-menu-container"
          >
            <div className="container mx-auto px-6">
              <nav className="flex flex-col space-y-6">
                <Link 
                  href={`${linkPrefix}#integrations`}
                  className="text-secondary-500 hover:text-primary-500 transition-colors text-xl font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Integrations
                </Link>
                <Link 
                  href={`${linkPrefix}#task-comparison`}
                  className="text-secondary-500 hover:text-primary-500 transition-colors text-xl font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tasks
                </Link>
                <Link 
                  href={`${linkPrefix}#comparison`}
                  className="text-secondary-500 hover:text-primary-500 transition-colors text-xl font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Comparison
                </Link>
                <Link 
                  href={`${linkPrefix}#demo`}
                  className="text-secondary-500 hover:text-primary-500 transition-colors text-xl font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demo
                </Link>
                <Link 
                  href={`${linkPrefix}#pricing`} 
                  className="text-secondary-500 hover:text-primary-500 transition-colors text-xl font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <Link 
                    href="/download" 
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FiDownload size={20} />
                    Download Now
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 