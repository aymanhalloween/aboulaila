'use client';

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#040404] text-white w-full flex justify-center relative z-10"
    >
      <div className="max-w-4xl w-full px-6 py-12 md:py-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.div
            whileHover={{ x: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <Link href="/" className="text-[#c2c2c2] hover:text-white transition-all duration-300 mb-8 inline-block hover-scale link-slide">
              ← Back to Home
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-light mb-8"
          >
            Campaign Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#c2c2c2] text-lg leading-relaxed max-w-3xl"
          >
            Growth campaigns, partnerships, and Web3 initiatives that have generated millions in volume and engagement across gaming, crypto, and consumer brands.
          </motion.p>
        </motion.header>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="section-divider origin-left"
        />

        {/* Featured Campaigns */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-light mb-8"
          >
            Featured Campaigns
          </motion.h2>

          <div className="space-y-12">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
              onHoverStart={() => setHoveredProject('bloomverse')}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2 group-hover:text-white transition-colors duration-300">
                  <a href="https://akasha.bloomverse.io" target="_blank" rel="noopener noreferrer">
                    Play Bloomverse Token Launch
                  </a>
                </h3>
                <p className="text-[#c2c2c2] mb-3">Launch Strategy, Influencer Partnerships • Dec 2024 - Feb 2025</p>
                <p className="text-[#c2c2c2] leading-relaxed">
                  Led influencer partnerships during token launch, resulting in over <strong className="text-white">$150M volume</strong> and a <strong className="text-white">$51M market cap</strong> within two months.
                  Coordinated go-to-market messaging across Discord, X (Twitter), and Web3 communities.
                </p>
              </div>
              <motion.div
                className="w-full h-64 bg-[#272727] rounded-lg flex items-center justify-center group-hover:bg-[#343434] transition-all duration-500 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <AnimatePresence>
                  {hoveredProject === 'bloomverse' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-center"
                      >
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="text-4xl mb-2"
                        >
                          🌸
                        </motion.div>
                        <div className="text-sm text-[#c2c2c2]">$150M Volume • $51M Market Cap</div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.span
                      initial={{ opacity: 1 }}
                      className="text-[#5d5d5d] group-hover:text-[#7c7c7c] transition-colors duration-300"
                    >
                      Play Bloomverse Campaign
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
              onHoverStart={() => setHoveredProject('samsung')}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2 group-hover:text-white transition-colors duration-300">
                  <a href="https://samsungodysseycup.gg" target="_blank" rel="noopener noreferrer">
                    Samsung Odyssey Cup
                  </a>
                </h3>
                <p className="text-[#c2c2c2] mb-3">Creator Campaign Coordination • Feb 2023 - Jun 2023</p>
                <p className="text-[#c2c2c2] leading-relaxed">
                  Executed Galaxy S-series gaming campaign by equipping creators like Bugha and AsianJeff with streaming devices.
                  Campaign generated <strong className="text-white">4M+ views</strong> and was featured in creator tech content and live events.
                </p>
              </div>
              <motion.div
                className="w-full h-64 bg-[#272727] rounded-lg flex items-center justify-center group-hover:bg-[#343434] transition-all duration-500 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <AnimatePresence>
                  {hoveredProject === 'samsung' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900/20 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-center"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="text-4xl mb-2"
                        >
                          📱
                        </motion.div>
                        <div className="text-sm text-[#c2c2c2]">4M+ Views • Gaming Campaign</div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.span className="text-[#5d5d5d] group-hover:text-[#7c7c7c] transition-colors duration-300">
                      Samsung Gaming Campaign
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
              onHoverStart={() => setHoveredProject('brett')}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2 group-hover:text-white transition-colors duration-300">
                  <a href="https://www.basedbrett.com" target="_blank" rel="noopener noreferrer">
                    Brett Meme Coin Growth
                  </a>
                </h3>
                <p className="text-[#c2c2c2] mb-3">Growth Marketing & Partnerships • Jan 2024 - Nov 2024</p>
                <p className="text-[#c2c2c2] leading-relaxed">
                  Onboarded high-profile personalities including <strong className="text-white">Rick Ross, Offset, Gilbert Burns</strong>, and NASCAR driver Witold Ramasauskas.
                  Helped secure <strong className="text-white">Forbes feature</strong> and contributed to philanthropic milestones including 5 clean water wells in Nigeria.
                </p>
              </div>
              <motion.div
                className="w-full h-64 bg-[#272727] rounded-lg flex items-center justify-center group-hover:bg-[#343434] transition-all duration-500 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <AnimatePresence>
                  {hoveredProject === 'brett' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-yellow-900/20 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-center"
                      >
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                          className="text-4xl mb-2"
                        >
                          🐸
                        </motion.div>
                        <div className="text-sm text-[#c2c2c2]">Celebrity Partnerships • Forbes Feature</div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.span className="text-[#5d5d5d] group-hover:text-[#7c7c7c] transition-colors duration-300">
                      Brett Campaign
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="section-divider origin-left"
        />

        {/* Other Campaigns */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="text-2xl font-light mb-8"
          >
            Recent Projects
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                id: 'playa3ull',
                title: 'Playa3ull Partnerships',
                description: 'Web3 Gaming, Community Growth',
                href: 'https://playa3ull.games',
                emoji: '🎮',
                metric: '3x Engagement Growth',
                gradient: 'from-red-900/20 to-orange-900/20'
              },
              {
                id: 'shrapnel',
                title: 'Shrapnel Game Launch',
                description: 'Influencer Partnerships, Gaming',
                href: 'https://www.shrapnel.com',
                emoji: '🎯',
                metric: 'Creator Partnerships',
                gradient: 'from-gray-900/20 to-red-900/20'
              },
              {
                id: 'redbull',
                title: 'Red Bull Contested',
                description: 'Tournament Marketing, Gaming',
                href: 'https://www.redbull.com/gb-en/events/red-bull-contested',
                emoji: '🏆',
                metric: 'Fortnite Tournament',
                gradient: 'from-red-900/20 to-blue-900/20'
              },
              {
                id: 'invisible',
                title: 'Invisible Friends NFT',
                description: 'Community Operations, Web3',
                href: 'https://invisiblefriends.io',
                emoji: '👻',
                metric: '15 ETH Floor • $130M Volume',
                gradient: 'from-purple-900/20 to-pink-900/20'
              }
            ].map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <motion.div
                  className="w-full h-48 bg-[#272727] rounded-lg flex items-center justify-center group-hover:bg-[#343434] transition-all duration-500 mb-4 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <AnimatePresence>
                    {hoveredProject === project.id ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-center"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            className="text-3xl mb-1"
                          >
                            {project.emoji}
                          </motion.div>
                          <div className="text-xs text-[#c2c2c2]">{project.metric}</div>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.span className="text-[#5d5d5d] group-hover:text-[#7c7c7c] transition-colors duration-300">
                        {project.title.split(' ')[0]} Campaign
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-lg font-medium mb-2 group-hover:text-white transition-colors duration-300"
                >
                  <a href={project.href} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </motion.h3>
                <p className="text-[#c2c2c2] text-sm">{project.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="section-divider origin-left"
        />

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 3 }}
            className="text-2xl font-light mb-8"
          >
            Let's work together
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <a href="mailto:mohamedabolaila@gmail.com" className="block text-white link-slide text-lg hover:text-white transition-all duration-300">
                Email
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <a href="https://cal.com/mohamed" target="_blank" rel="noopener noreferrer" className="block text-white link-slide text-lg hover:text-white transition-all duration-300">
                Schedule a call
              </a>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </motion.main>
  );
}
