'use client';

import Link from "next/link";
import { motion } from 'framer-motion';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.16,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.48,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.96, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#040404] text-white w-full flex justify-center relative z-10"
      style={{
        willChange: 'opacity',
      }}
    >
      <div className="max-w-4xl w-full px-6 py-12 md:py-20">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.64 }}
          className="mb-16"
          style={{
            willChange: 'transform, opacity',
          }}
        >
          <motion.div
            whileHover={{ x: -4 }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          >
            <Link href="/" className="text-[#c2c2c2] hover:text-white transition-all duration-300 mb-8 inline-block hover-scale link-slide">
              ← Back to Home
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.64, delay: 0.16 }}
            className="text-4xl md:text-5xl font-light mb-8"
          >
            Growth Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.64, delay: 0.32 }}
            className="text-[#c2c2c2] text-lg leading-relaxed max-w-3xl"
          >
            Growth experiments, community initiatives, and viral campaigns.
            A space for testing new strategies and pushing the boundaries of Web3 marketing.
          </motion.p>
        </motion.header>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.64, delay: 0.48 }}
          className="section-divider origin-left"
          style={{
            willChange: 'transform',
          }}
        />

        {/* Current Growth Initiatives */}
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
            Current Growth Initiatives
          </motion.h2>

          <div className="space-y-12">
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="border border-[#272727] rounded-lg p-6 hover:border-[#3c3c3c] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 hover:text-white transition-colors duration-300">Web3 Creator Mastermind</h3>
                  <p className="text-[#c2c2c2] mb-3">Community building & creator education initiative</p>
                </div>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-[#5d5d5d] bg-[#272727] px-3 py-1 rounded-full transition-all duration-300 hover:bg-[#3c3c3c] hover:text-[#7c7c7c]"
                >
                  Active
                </motion.span>
              </div>
              <p className="text-[#c2c2c2] leading-relaxed mb-4">
                Building a community of Web3 creators and growth professionals. Hosting workshops and sharing
                strategies for viral content creation, token launches, and community engagement. Focus on
                bridging Web2 creators into Web3 opportunities.
              </p>
              <div className="flex gap-2 flex-wrap">
                {['Community', 'Education', 'Web3'].map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs text-[#c2c2c2] bg-[#272727] px-2 py-1 rounded transition-all duration-300 hover:bg-[#3c3c3c] hover:text-white"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="border border-[#272727] rounded-lg p-6 hover:border-[#3c3c3c] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 hover:text-white transition-colors duration-300">San Francisco Blockchain Hub</h3>
                  <p className="text-[#c2c2c2] mb-3">Local Web3 community development</p>
                </div>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-[#5d5d5d] bg-[#272727] px-3 py-1 rounded-full transition-all duration-300 hover:bg-[#3c3c3c] hover:text-[#7c7c7c]"
                >
                  Growing
                </motion.span>
              </div>
              <p className="text-[#c2c2c2] leading-relaxed mb-4">
                Organizing meetups and networking events for Web3 professionals in San Francisco.
                Creating opportunities for local talent to connect with crypto projects and
                fostering the next generation of blockchain entrepreneurs.
              </p>
              <div className="flex gap-2 flex-wrap">
                {['Networking', 'Local', 'Blockchain'].map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs text-[#c2c2c2] bg-[#272727] px-2 py-1 rounded transition-all duration-300 hover:bg-[#3c3c3c] hover:text-white"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.64, delay: 0.96 }}
          className="section-divider origin-left"
          style={{
            willChange: 'transform',
          }}
        />

        {/* Growth Experiments */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.64, delay: 1.28 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.48, delay: 1.44 }}
            className="text-2xl font-light mb-8"
          >
            Growth Experiments
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { title: 'Viral Loop Frameworks', desc: 'Systematic approaches to creating viral growth', tags: ['Growth', 'Strategy'] },
              { title: 'KOL Analytics Dashboard', desc: 'Data-driven influencer performance tracking', tags: ['Analytics', 'KOLs'] },
              { title: 'Community Onboarding Funnels', desc: 'Streamlined Web2 to Web3 user journeys', tags: ['UX', 'Onboarding'] },
              { title: 'Token Launch Playbooks', desc: 'Comprehensive guides for successful token launches', tags: ['Tokens', 'Launches'] }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="border border-[#272727] rounded-lg p-6 hover:border-[#3c3c3c] transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-lg font-medium mb-2 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                <p className="text-[#c2c2c2] text-sm mb-4">{item.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs text-[#c2c2c2] bg-[#272727] px-2 py-1 rounded transition-all duration-300 group-hover:bg-[#3c3c3c] group-hover:text-white"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Continue with remaining sections... */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.64, delay: 1.6 }}
          className="section-divider origin-left"
          style={{
            willChange: 'transform',
          }}
        />

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, delay: 1.76 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.48, delay: 1.92 }}
            className="text-2xl font-light mb-8"
          >
            Let's Build Together
          </motion.h2>
          <p className="text-[#c2c2c2] text-lg leading-relaxed mb-6">
            Interested in collaborating on growth projects, Web3 initiatives, or creator campaigns? Let's connect and explore how we can scale together.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            {[
              { href: 'mailto:mohamedabolaila@gmail.com', text: 'Email me' },
              { href: 'https://cal.com/mohamed', text: 'Schedule a call' },
              { href: 'https://linkedin.com/in/mohamed-aboulaila', text: 'Connect on LinkedIn' }
            ].map((link) => (
              <motion.div
                key={link.text}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              >
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block text-white link-slide text-lg hover:text-white transition-all duration-300"
                >
                  {link.text}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </motion.main>
  );
}
