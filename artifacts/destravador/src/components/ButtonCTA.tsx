import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonCTAProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const innerContent = (children: React.ReactNode) => (
  <>
    <span className="relative z-10 flex items-center gap-2">{children}</span>
    {/* Hover overlay */}
    <div className="absolute inset-0 z-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100 mix-blend-overlay" />
    {/* Shimmer effect */}
    <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
  </>
);

const sharedClasses =
  "group relative inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/25 overflow-hidden";

export function ButtonCTA({ children, className, onClick, href }: ButtonCTAProps) {
  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(sharedClasses, className)}
        aria-label={typeof children === 'string' ? children : undefined}
      >
        {innerContent(children)}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(sharedClasses, className)}
    >
      {innerContent(children)}
    </motion.button>
  );
}
