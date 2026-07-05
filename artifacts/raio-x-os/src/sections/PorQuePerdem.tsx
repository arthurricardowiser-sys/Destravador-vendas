import React from 'react';
import { BookX, SearchX, Shuffle, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { SectionCTA } from '@/components/SectionCTA';

const cards = [
  {
    icon: <BookX className="w-7 h-7 text-red-400" />,
    title: 'Você não registra suas negociações',
    desc: 'Sem revisar o que aconteceu, toda perda vira apenas uma sensação.',
    border: 'border-red-500/20',
    bg: 'bg-red-500/5',
    glow: 'bg-red-500/3',
  },
  {
    icon: <SearchX className="w-7 h-7 text-orange-400" />,
    title: 'Mesmo quando revisa, não sabe o que procurar',
    desc: 'Sem uma metodologia, você pode focar no preço quando o problema real foi autoridade, dor ou compromisso.',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/5',
    glow: 'bg-orange-500/3',
  },
  {
    icon: <Shuffle className="w-7 h-7 text-yellow-400" />,
    title: 'Sem diagnóstico, você melhora por tentativa e erro',
    desc: 'E tentativa e erro custa tempo, energia e vendas perdidas.',
    border: 'border-yellow-500/20',
    bg: 'bg-yellow-500/5',
    glow: 'bg-yellow-500/3',
  },
];

export function PorQuePerdem() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-transparent to-muted/5 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Por que vendedores inteligentes{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                continuam perdendo vendas?
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`border ${card.border} ${card.bg} rounded-2xl p-7 flex flex-col gap-5 h-full group hover:border-primary/20 transition-all duration-300 relative overflow-hidden`}>
                <div className={`absolute -top-10 -right-10 w-24 h-24 ${card.glow} rounded-full blur-2xl pointer-events-none`} />
                <div className="w-12 h-12 rounded-xl bg-background/60 border border-border/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-3 leading-snug">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35}>
          <div className="bg-card border border-primary/20 rounded-2xl px-7 md:px-10 py-7 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <p className="text-sm md:text-base text-foreground font-medium leading-relaxed max-w-2xl mx-auto">
              O RAIO-X elimina esse ciclo:{' '}
              <span className="text-primary">cada conversa vira um diagnóstico</span> e{' '}
              <span className="text-primary">cada diagnóstico vira uma próxima ação.</span>
            </p>
          </div>
        </FadeIn>

        <SectionCTA label="Quero transformar minhas conversas em treinamento" />
      </div>
    </section>
  );
}
