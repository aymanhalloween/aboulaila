'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Campaign Portfolio', href: '/portfolio', shortName: 'Portfolio' },
  { name: 'About', href: '/', shortName: 'About' },
  { name: 'Resume', href: '/resume', shortName: 'Resume' },
  { name: 'Growth Projects', href: '/projects', shortName: 'Projects' },
  { name: 'Contact', href: '/contact', shortName: 'Contact' },
];

export default function FloatingNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center">
      <div className="max-w-4xl w-full px-6">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.48, // 20% faster
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: pathname === '/' ? 1.4 : 0.2 // Faster delay for landing page, immediate for others
          }}
          className="flex justify-center mb-6 md:mb-8"
          style={{
            willChange: 'transform, opacity', // Hardware acceleration
          }}
        >
          <div className="bg-gradient-to-r from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md border border-gray-600/30 rounded-full px-4 md:px-8 py-3 md:py-4 shadow-2xl max-w-[95vw] overflow-hidden">
            <div className="flex items-center space-x-4 md:space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative group"
                  >
                    <motion.span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="hidden md:inline">{item.name}</span>
                      <span className="md:hidden">{item.shortName}</span>
                    </motion.span>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}
