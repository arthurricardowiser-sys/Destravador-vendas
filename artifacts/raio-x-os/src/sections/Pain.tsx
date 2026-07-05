import React from 'react';
import { FadeIn } from '@/components/FadeIn';
import { SectionCTA } from '@/components/SectionCTA';

const thoughts = [
  { text: '"Ele visualizou e nunca respondeu."', color: 'border-red-500/25 bg-red-500/5', dot: 'bg-red-400' },
  { text: '"Achei que ele ia fechar."', color: 'border-orange-500/25 bg-orange-500/5', dot: 'bg-orange-400' },
  { text: '"Fiquei sem saber o que responder."', color: 'border-yellow-500/25 bg-yellow-500/5', dot: 'bg-yellow-400' },
  { text: '"Talvez meu preço esteja alto demais."', color: 'border-red-500/25 bg-red-500/5', dot: 'bg-red-400' },
  { text: '"A conversa estava boa, mas esfriou."', color: 'border-border/50 bg-muted/20', dot: 'bg-muted-foreground' },
  { text: '"Será que eu pressionei demais?"', color: 'border-orange-500/25 bg-orange-500/5', dot: 'bg-orange-400' },
  { text: '"Será que falei pouco valor?"', color: 'border-yellow-500/25 bg-yellow-500/5', dot: 'bg-yellow-400' },
  { text: '"Será que o lead era ruim mesmo?"', color: 'border-border/50 bg-muted/20', dot: 'bg-muted-foreground' },
];

export function Pain() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Você perdeu a venda... mas sabe exatamente{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                onde a conversa começou a dar errado?
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Thought bubbles */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {thoughts.map((t, i) => (
              <div key={i} className={`border ${t.color} rounded-2xl p-4 flex items-start gap-2.5 group hover:border-primary/20 transition-colors`}>
                <span className={`w-2 h-2 rounded-full ${t.dot} flex-shrink-0 mt-1`} />
                <p className="text-xs text-foreground/75 italic leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-2xl mx-auto bg-card border border-border/50 rounded-2xl px-7 py-6 text-center">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Muitos vendedores terminam uma negociação tentando adivinhar o motivo da perda. O problema é que,{' '}
              <span className="text-foreground font-semibold">quando você não sabe onde errou, acaba corrigindo o problema errado.</span>
            </p>
          </div>
        </FadeIn>

        <SectionCTA label="Quero descobrir onde estou errando" />
      </div>
    </section>
  );
}
