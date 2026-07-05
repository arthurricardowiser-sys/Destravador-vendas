import React from 'react';
import {
  MessageSquareDashed,
  Volume2,
  TrendingDown,
  ShieldOff,
  ThumbsUp,
  HelpCircle,
} from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

/* ── Pain cards ── */
const painPoints = [
  {
    icon: <MessageSquareDashed className="w-5 h-5 text-accent" />,
    title: 'O cliente diz "vou pensar" e desaparece',
    description:
      'E você fica sem entender o que aconteceu, sem saber onde a conversa perdeu força.',
  },
  {
    icon: <Volume2 className="w-5 h-5 text-orange-500" />,
    title: 'Você sente que fala demais para tentar convencer',
    description:
      'Argumentos, benefícios, diferenciais — e mesmo assim o cliente não avança.',
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-destructive" />,
    title: 'A conversa parece boa, mas não avança',
    description:
      'O rapport existe, o cliente parece interessado, mas a decisão nunca vem.',
  },
  {
    icon: <ShieldOff className="w-5 h-5 text-purple-500" />,
    title: 'Você responde objeções sem entender a causa',
    description:
      'Trata o sintoma sem chegar na raiz — e o cliente continua resistindo.',
  },
  {
    icon: <ThumbsUp className="w-5 h-5 text-yellow-600" />,
    title: 'O cliente elogia, mas não compra',
    description:
      '"Adorei sua apresentação" — e depois o silêncio. Elogio não é compra.',
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-primary" />,
    title: 'Você sai da call sem saber onde errou',
    description:
      'Sem clareza sobre o ponto exato onde a venda travou, o ciclo se repete.',
  },
];

export function Pain() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Você talvez não tenha um problema de fechamento.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Talvez você esteja tentando fechar uma venda que nunca foi diagnosticada de verdade.
            </p>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((point, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <div className="bg-card border border-border p-7 rounded-2xl shadow-sm hover:shadow-md hover:border-border/80 transition-all h-full flex items-start gap-4 group">
                <div className="bg-muted p-2.5 rounded-xl group-hover:scale-105 transition-transform flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Transition phrase */}
        <FadeIn delay={0.5}>
          <div className="mt-14 text-center max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/40 pl-5 text-left bg-primary/3 py-4 pr-5 rounded-r-xl">
              A maioria tenta melhorar o fechamento. Mas a venda geralmente começa a morrer muito antes:{' '}
              <strong className="text-foreground font-semibold">no diagnóstico.</strong>
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
