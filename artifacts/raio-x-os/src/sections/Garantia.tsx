import React from 'react';
import { Shield } from 'lucide-react';
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
            <div className="text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-bold text-primary tracking-widest uppercase">
                Garantia Simples
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                7 dias sem risco.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Se você acessar o RAIO-X OS e sentir que ele não trouxe mais clareza sobre suas negociações, você pode solicitar reembolso dentro do prazo de garantia. Sem perguntas, sem burocracia.
              </p>
              <p className="text-sm font-semibold text-foreground">
                O risco é inteiramente nosso.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
