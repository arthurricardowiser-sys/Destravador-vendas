import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

export function FinalCTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-bold text-primary tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Acesso Imediato
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-foreground">
            Pare de vender{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
              no escuro.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Se você vende por conversas, cada negociação perdida pode esconder um padrão. O RAIO-X mostra onde está o erro e o que corrigir antes da próxima oportunidade.
          </p>

          <div className="flex justify-center mb-8">
            <ButtonCTA
              href="#checkout"
              className="px-12 py-5 text-lg shadow-[0_0_60px_rgba(99,131,255,0.3)]"
            >
              Quero testar o RAIO-X <ArrowRight className="w-5 h-5 ml-2" />
            </ButtonCTA>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-primary/60" /> Compra 100% Segura
            </div>
            <span className="hidden sm:inline opacity-30">·</span>
            <div>Garantia de 7 dias</div>
            <span className="hidden sm:inline opacity-30">·</span>
            <div>Acesso Imediato</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
