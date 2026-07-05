import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past the hero section (~600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-md border-t border-border z-50 md:hidden transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <ButtonCTA href="#oferta" className="w-full shadow-xl">
        Quero Destravar Minhas Vendas <ArrowRight className="w-4 h-4 ml-2" />
      </ButtonCTA>
    </div>
  );
}
