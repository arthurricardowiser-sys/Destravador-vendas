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
              <Shield className="w-32 h-32 text-primary relative z-10 drop-shadow-md" strokeWidth={1.5} />
            </div>
            
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                Garantia Incondicional de 7 Dias
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Temos absoluta certeza do poder do Destravador. Mas se por qualquer motivo você não ficar satisfeito nos primeiros 7 dias de uso, basta enviar um e-mail.
              </p>
              <p className="text-lg font-medium text-foreground">
                Devolvemos 100% do seu investimento. Sem perguntas, sem burocracia, e continuamos amigos. O risco é todo nosso.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
