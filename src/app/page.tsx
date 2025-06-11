'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HoverImage = ({ src, alt, isVisible, mousePosition }: {
  src: string;
  alt: string;
  isVisible: boolean;
  mousePosition: { x: number; y: number };
}) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.85, rotate: 8 }}
        transition={{ 
          duration: 0.24,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 160,
          willChange: 'transform, opacity',
        }}
      >
        <div className="relative">
          <img
            src={src}
            alt={alt}
            className="w-32 h-32 object-contain rounded-lg shadow-2xl"
            onError={(e) => {
              console.error('Image failed to load:', src);
              e.currentTarget.style.display = 'none';
            }}
            onLoad={() => console.log('Image loaded successfully:', src)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const AnimatedLink = ({ href, children, imageSrc, imageAlt, external = false }: {
  href: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  external?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  const LinkComponent = external ? 'a' : Link;

  return (
    <>
      <LinkComponent
        {...linkProps}
        className="link-underline hover:text-white transition-colors duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {children}
      </LinkComponent>
      <HoverImage
        src={imageSrc}
        alt={imageAlt}
        isVisible={isHovered}
        mousePosition={mousePosition}
      />
    </>
  );
};

export default function Home() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

  const titleVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.64,
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
        {/* Hero Section */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h1
            variants={titleVariants}
            className="hero-title mb-8"
          >
            Mohamed
            <br />
            Aboulaila
          </motion.h1>

          <motion.div
            variants={containerVariants}
            className="space-y-8 text-[#c2c2c2] leading-relaxed max-w-3xl"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            <motion.div
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed"
            >
              I'm a Growth Hacker & Partnerships Manager specializing in Web3 and influencer marketing, with 4+
              years of experience scaling brands and driving user acquisition for industry leaders.
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed"
            >
              I've worked with{' '}
              <AnimatedLink
                href="https://www.samsung.com"
                imageSrc="/brand-images/samsung.png"
                imageAlt="Samsung"
                external
              >
                Samsung
              </AnimatedLink>
              ,{' '}
              <AnimatedLink
                href="https://www.redbull.com"
                imageSrc="/brand-images/redbull.png"
                imageAlt="Red Bull"
                external
              >
                Red Bull
              </AnimatedLink>
              ,{' '}
              <AnimatedLink
                href="https://www.mikeandike.com"
                imageSrc="/brand-images/mike-and-ike.png"
                imageAlt="Mike and Ike"
                external
              >
                Mike and Ike
              </AnimatedLink>
              ,{' '}
              <AnimatedLink
                href="https://invisible.xyz"
                imageSrc="/brand-images/invisible-friends.png"
                imageAlt="Invisible Friends"
                external
              >
                Invisible Friends
              </AnimatedLink>
              ,{' '}
              <AnimatedLink
                href="https://brett.gg"
                imageSrc="/brand-images/brett.png"
                imageAlt="Brett"
                external
              >
                Brett
              </AnimatedLink>
              ,{' '}
              <AnimatedLink
                href="https://www.shrapnel.com"
                imageSrc="/brand-images/shrapnel.png"
                imageAlt="Shrapnel"
                external
              >
                Shrapnel
              </AnimatedLink>
              , and{' '}
              <AnimatedLink
                href="https://bloom.com"
                imageSrc="/brand-images/bloom.png"
                imageAlt="Bloom"
                external
              >
                Bloom
              </AnimatedLink>
              , helping them expand their reach, optimize marketing funnels, and accelerate token
              adoption.
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed"
            >
              You can find campaigns I've worked on generating over $150M in volume, coordinating tournaments with
              millions of views, and building communities that drive lasting brand impact.
            </motion.div>
          </motion.div>
        </motion.header>

        {/* Personal Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate={isTypingComplete ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light mb-8"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            Personal
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="text-lg md:text-xl text-[#c2c2c2] leading-relaxed mb-6"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            I grew up in Dallas, TX, and have been at the forefront of growth since
            before screenshots of monkeys costed people millions.
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-lg md:text-xl text-[#c2c2c2] leading-relaxed mb-6"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            From dropping bodies as a former professional Fortnite player to dropping the coolest partnerships in the industry, I weaponize my slightly-autistic obsession to scale your brand.
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-lg md:text-xl text-[#c2c2c2] leading-relaxed mb-6"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            Think less "just vibes," more "strategic chaos."
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-lg md:text-xl text-[#c2c2c2] leading-relaxed"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            Hit me up, unless you still use Internet Explorer (then please don't).
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate={isTypingComplete ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light mb-8"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            Let's Connect
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="text-lg md:text-xl text-[#c2c2c2] leading-relaxed mb-6"
            style={{ fontFamily: 'Crimson Text, serif' }}
          >
            Ready to scale your brand or discuss partnership opportunities? Let's explore how we can drive growth together.
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-6"
          >
            <a
              href="mailto:mohamedabolaila@gmail.com"
              className="text-lg font-medium link-underline hover:text-white transition-colors duration-300"
            >
              Email Me
            </a>

            <a
              href="https://cal.com/aboulaila"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium link-underline hover:text-white transition-colors duration-300"
            >
              Schedule a Meeting
            </a>

            <a
              href="https://x.com/mabthemangoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium link-underline hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
          </motion.div>
        </motion.section>
      </div>
    </motion.main>
  );
}
