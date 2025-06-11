'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contacts = [
    {
      label: "Email",
      value: "mohamedabolaila@gmail.com",
      href: "mailto:mohamedabolaila@gmail.com",
      type: "email"
    },
    {
      label: "Schedule Meeting",
      value: "cal.com/aboulaila",
      href: "https://cal.com/aboulaila",
      type: "social"
    },
    {
      label: "Twitter",
      value: "@mabthemangoo",
      href: "https://x.com/mabthemangoo",
      type: "social"
    },
    {
      label: "Location",
      value: "San Francisco, California",
      href: null,
      type: "info"
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#040404] text-white w-full flex justify-center relative z-10"
    >
      <div className="max-w-4xl w-full px-6 py-12 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 text-white"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            Get in Touch
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#c2c2c2] mb-16 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            Ready to scale your brand or discuss partnership opportunities?
            Let's connect and explore how we can drive growth together.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.label}
                variants={itemVariants}
                className="group"
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.type === 'social' ? '_blank' : undefined}
                    rel={contact.type === 'social' ? 'noopener noreferrer' : undefined}
                    className="block p-6 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg hover:border-[#3c3c3c] transition-all duration-300 hover:bg-[#111111] group-hover:scale-105"
                  >
                    <div className="text-left">
                      <h3 className="text-sm text-[#8c8c8c] uppercase tracking-wider mb-2 font-medium">
                        {contact.label}
                      </h3>
                      <p className="text-white text-lg group-hover:text-[#f0f0f0] transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="block p-6 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg">
                    <div className="text-left">
                      <h3 className="text-sm text-[#8c8c8c] uppercase tracking-wider mb-2 font-medium">
                        {contact.label}
                      </h3>
                      <p className="text-white text-lg">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <p className="text-[#8c8c8c] text-sm">
              Available for full-time opportunities and consulting projects
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}
