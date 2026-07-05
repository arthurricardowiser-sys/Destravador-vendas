import React from 'react';

interface ButtonCTAProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
}

export function ButtonCTA({ href = '#checkout', children, className = '', variant = 'primary' }: ButtonCTAProps) {
  const base = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50';
  const variants = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98] shadow-[0_0_24px_rgba(99,131,255,0.25)] px-7 py-3.5 text-base',
    ghost: 'border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground px-7 py-3.5 text-base',
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
