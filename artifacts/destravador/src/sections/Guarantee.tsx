import React from 'react';
import { Shield } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

export function Guarantee() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-card p-8 md:p-10 rounded-3xl border border-border">
            <div className="shrink-0 relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
              <Shield className="w-28 h-28 text-primary relative z-10 drop-shadow-md" strokeWidth={1.5} />
            </div>

            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Teste por 7 dias sem risco.
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Use o Destravador em uma call, uma conversa de WhatsApp ou um follow-up real. Se você sentir que ele não te ajudou a enxergar sua abordagem com mais clareza, basta solicitar o reembolso dentro do prazo de garantia.
              </p>
              <p className="text-base font-medium text-foreground">
                Devolvemos 100% do seu investimento. Sem perguntas, sem burocracia. O risco é todo nosso.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
