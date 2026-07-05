import React from 'react';
import { MessageCircle, Cpu, Sparkles } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const demoCards = [
  {
    icon: <MessageCircle className="w-5 h-5 text-foreground/50" />,
    tag: 'O cliente diz',
    tagColor: 'text-muted-foreground',
    border: 'border-border',
    bg: 'bg-card',
    content: '"Está caro."',
    contentStyle: 'italic text-foreground/70',
  },
  {
    icon: <Cpu className="w-5 h-5 text-orange-500" />,
    tag: 'O Destravador identifica',
    tagColor: 'text-orange-500',
    border: 'border-orange-200',
    bg: 'bg-orange-50/60',
    content:
      'Preço não foi a causa principal. A objeção apareceu porque o valor não foi conectado à dor principal.',
    contentStyle: 'text-foreground/80',
  },
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    tag: 'A pergunta sugerida',
    tagColor: 'text-primary',
    border: 'border-primary/30',
    bg: 'bg-primary/5',
    content:
      '"Se esse problema continuar por mais seis meses, qual seria o impacto real para você?"',
    contentStyle: 'italic text-foreground/80',
  },
];

export function Demo() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-5 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veja como uma conversa perdida vira diagnóstico.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Em vez de decorar respostas prontas, você aprende a enxergar o que deveria ter sido
              diagnosticado antes da objeção aparecer.
            </p>
          </div>
        </FadeIn>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {demoCards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className={`rounded-2xl border ${card.border} ${card.bg} p-6 h-full flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className={`flex items-center gap-2 ${card.tagColor}`}>
                  {card.icon}
                  <span className="text-xs font-bold uppercase tracking-widest">{card.tag}</span>
                </div>
                <p className={`text-sm leading-relaxed ${card.contentStyle} flex-1`}>
                  {card.content}
                </p>
                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground self-end">
                  {i + 1}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Insight */}
        <FadeIn delay={0.4}>
          <div className="mt-10 max-w-2xl mx-auto bg-card border border-border rounded-2xl px-7 py-5">
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed text-center">
              Enquanto vendedores comuns tentam{' '}
              <strong className="text-foreground font-semibold">responder objeções</strong>, o
              Destravador mostra onde a conversa perdeu profundidade e qual pergunta poderia ter{' '}
              <strong className="text-foreground font-semibold">mudado o rumo da venda.</strong>
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
