'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure minimum display duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const loaderVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.45, 0, 0.55, 1]
      }
    }
  };

  const dotVariants = {
    initial: { y: 0 },
    animate: {
      y: [-8, 0, -8],
      transition: {
        duration: 1.2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={loaderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-50 bg-[#040404] flex items-center justify-center"
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
                    delay: index * 0.2,
                  }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              ))}
            </div>

            {/* Loading Text */}
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <motion.h2
                className="text-xl md:text-2xl font-light text-white mb-2"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
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
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5
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
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-white to-[#c2c2c2] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.2
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
