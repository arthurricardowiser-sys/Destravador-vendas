import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border z-50 md:hidden transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <ButtonCTA href="#checkout" className="w-full">
        Quero testar o RAIO-X <ArrowRight className="w-4 h-4 ml-1.5" />
      </ButtonCTA>
    </div>
  );
}
