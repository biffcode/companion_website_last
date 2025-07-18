'use client';

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  hideCursor?: boolean;
}

const TypeWriter = ({ text, delay = 50, className = '', onComplete, hideCursor = false }: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      {!hideCursor && (
        <span className={`inline-block w-[2px] h-[1em] bg-primary-500 ml-0.5 align-middle ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
      )}
    </span>
  );
};

export default TypeWriter; 