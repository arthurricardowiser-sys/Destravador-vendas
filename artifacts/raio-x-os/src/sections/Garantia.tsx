import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

export function Garantia() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="shrink-0 relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative w-24 h-24 rounded-full border-2 border-primary/30 bg-primary/10 flex items-center justify-center">
                <Shield className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <div className="text-center md:text-left space-y-4 flex-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-bold text-primary tracking-widest uppercase">
                Garantia
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Teste com suas próprias conversas.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Use o RAIO-X OS para revisar suas negociações. Se sentir que ele não trouxe mais clareza sobre onde você está errando e o que precisa melhorar, você pode solicitar reembolso dentro do prazo de garantia.
              </p>
              <div className="flex justify-center md:justify-start pt-2">
                <a
                  href="#oferta"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 bg-primary/8 hover:bg-primary/15 hover:border-primary/60 rounded-xl px-6 py-3 transition-all duration-200 active:scale-[0.98]"
                >
                  Quero testar sem risco <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
