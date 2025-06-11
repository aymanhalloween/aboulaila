'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  
  // Only show preloader on landing page
  const shouldShowPreloader = pathname === '/';

  useEffect(() => {
    if (!shouldShowPreloader) {
      setIsLoading(false);
      return;
    }

    // Faster loading time - reduced from 2000ms to 1200ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [shouldShowPreloader]);

  const loaderVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.24 } // 20% faster
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4, // 20% faster
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const dotVariants = {
    initial: { y: 0 },
    animate: {
      y: [-6, 0, -6], // Slightly reduced movement for smoother animation
      transition: {
        duration: 0.96, // 20% faster
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 16 }, // Reduced movement
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.24, // 20% faster
        duration: 0.48, // 20% faster
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Don't render preloader if not on landing page
  if (!shouldShowPreloader) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={loaderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-50 bg-[#040404] flex items-center justify-center"
          style={{
            willChange: 'transform, opacity', // Hardware acceleration
          }}
        >
          <div className="text-center">
            {/* Loading Animation */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  variants={dotVariants}
                  initial="initial"
                  animate="animate"
                  transition={{
                    delay: index * 0.16, // 20% faster stagger
                  }}
                  className="w-2 h-2 bg-white rounded-full"
                  style={{
                    willChange: 'transform', // Hardware acceleration
                  }}
                />
              ))}
            </div>

            {/* Loading Text */}
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              style={{
                willChange: 'transform, opacity', // Hardware acceleration
              }}
            >
              <motion.h2
                className="text-xl md:text-2xl font-light text-white mb-2"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.6, // 20% faster
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              >
                Mohamed Aboulaila
              </motion.h2>
              <motion.p
                className="text-sm text-[#c2c2c2]"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2.0, // 20% faster
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.4 // 20% faster
                }}
              >
                Growth Hacker & Partnerships Manager
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="w-48 h-0.5 bg-[#272727] rounded-full overflow-hidden mt-8 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.64 }} // 20% faster
              style={{
                willChange: 'opacity', // Hardware acceleration
              }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-white to-[#c2c2c2] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.0, // Faster progress bar animation (was 1.8s)
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.16 // 20% faster
                }}
                style={{
                  willChange: 'width', // Hardware acceleration
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
