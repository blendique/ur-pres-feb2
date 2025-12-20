import React from 'react';
import { NavigationProps } from '../types';
import { motion } from 'framer-motion';

export const Navigation: React.FC<NavigationProps> = ({ currentSlide, totalSlides, onNavigate }) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center gap-6">
      {Array.from({ length: totalSlides }).map((_, index) => {
        const isActive = currentSlide === index;
        return (
          <div key={index} className="relative flex items-center justify-center group">
            <button
              onClick={() => onNavigate(index)}
              className="relative w-4 h-4 focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                className={`w-3 h-3 border-2 transform rotate-45 transition-all duration-300 ${
                  isActive 
                    ? 'bg-uremont-accent border-uremont-accent scale-125' 
                    : 'bg-transparent border-gray-500 hover:border-white'
                }`}
                animate={{
                    scale: isActive ? 1.4 : 1,
                    rotate: 45
                }}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};