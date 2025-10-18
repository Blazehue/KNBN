"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-dismiss after 3 seconds if user doesn't click
    const timer = setTimeout(() => {
      handleDismiss();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(onComplete, 500);
  };

  if (!isVisible) return null;

  const letters = ["K", "N", "B", "N"];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background cursor-pointer"
      onClick={handleDismiss}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
              rotate: {
                duration: 0.8,
                delay: index * 0.1 + 0.3,
                ease: "easeInOut"
              }
            }}
            className="text-6xl md:text-8xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {letter}
          </motion.div>
        ))}
      </div>

      {/* Pulsing hint */}
      <motion.p
        className="absolute bottom-12 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 2,
          delay: 2,
          times: [0, 0.2, 0.8, 1]
        }}
      >
        Click anywhere to continue
      </motion.p>

      {/* Decorative circles */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-border/30"
            style={{
              width: `${100 + i * 80}px`,
              height: `${100 + i * 80}px`,
              left: "50%",
              top: "50%",
              marginLeft: `-${(100 + i * 80) / 2}px`,
              marginTop: `-${(100 + i * 80) / 2}px`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: [0, 0.3, 0],
              rotate: i % 2 === 0 ? 360 : -360
            }}
            transition={{
              duration: 3,
              delay: 0.3 + i * 0.15,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}