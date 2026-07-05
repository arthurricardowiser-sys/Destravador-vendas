import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

export function FinalCTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-foreground text-background relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
            Antes de perder mais uma venda sem saber o motivo, audite sua próxima conversa.
          </h2>
          <p className="text-lg md:text-xl text-white/65 mb-12 max-w-2xl mx-auto leading-relaxed">
            O Destravador mostra o ponto exato onde sua abordagem perdeu força — e qual pergunta
            poderia ter mudado o rumo da venda.
          </p>

          <div className="flex justify-center mb-8">
            <ButtonCTA
              href="#oferta"
              className="px-12 py-6 text-xl shadow-[0_0_40px_rgba(34,197,94,0.3)]"
            >
              Quero Auditar Minha Próxima Conversa <ArrowRight className="w-6 h-6 ml-2" />
            </ButtonCTA>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-white/50 font-medium">
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4" /> Compra 100% Segura
            </div>
            <span className="hidden sm:inline opacity-40">·</span>
            <div>Garantia de 7 dias</div>
            <span className="hidden sm:inline opacity-40">·</span>
            <div>Acesso Imediato</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
