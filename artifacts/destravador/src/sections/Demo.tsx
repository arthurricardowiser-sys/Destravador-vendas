import React from 'react';
import { MessageCircle, Cpu, Sparkles } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

/* ── Demo cards ── */
const demoCards = [
  {
    icon: <MessageCircle className="w-5 h-5 text-foreground/60" />,
    tag: 'O que o cliente disse',
    tagColor: 'text-muted-foreground',
    border: 'border-border',
    bg: 'bg-card',
    content: '"Está caro."',
    contentStyle: 'italic text-foreground/70',
  },
  {
    icon: <Cpu className="w-5 h-5 text-orange-500" />,
    tag: 'O que a IA encontrou',
    tagColor: 'text-orange-500',
    border: 'border-orange-200',
    bg: 'bg-orange-50/60',
    content:
      'Você apresentou valor antes de entender prioridade, urgência e consequência.',
    contentStyle: 'text-foreground/80',
  },
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    tag: 'A pergunta certa',
    tagColor: 'text-primary',
    border: 'border-primary/30',
    bg: 'bg-primary/5',
    content:
      '"O que faria esse investimento valer a pena para você neste momento?"',
    contentStyle: 'italic text-foreground/80',
  },
];

export function Demo() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veja o Destravador em ação
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Em vez de decorar respostas prontas, você aprende a enxergar o ponto exato onde
              a conversa perdeu força.
            </p>
          </div>
        </FadeIn>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoCards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className={`rounded-2xl border ${card.border} ${card.bg} p-6 h-full flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow`}
              >
                {/* Tag */}
                <div className={`flex items-center gap-2 ${card.tagColor}`}>
                  {card.icon}
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {card.tag}
                  </span>
                </div>

                {/* Content */}
                <p className={`text-sm leading-relaxed ${card.contentStyle} flex-1`}>
                  {card.content}
                </p>

                {/* Step indicator */}
                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground self-end">
                  {i + 1}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Insight line */}
        <FadeIn delay={0.4}>
          <p className="mt-10 text-center text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            O objetivo não é forçar o fechamento. É voltar ao ponto da conversa onde o cliente
            ainda não se sentiu{' '}
            <strong className="text-foreground font-medium">compreendido.</strong>
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
