import React from 'react';
import {
  MessageSquareDashed,
  Volume2,
  TrendingDown,
  ShieldOff,
  HelpCircle,
  DollarSign,
  Rewind,
} from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

/* ── 7 pain cards ── */
const painPoints = [
  {
    icon: <MessageSquareDashed className="w-5 h-5 text-accent" />,
    title: 'Você escuta "vou pensar" e nunca descobre o motivo real',
    description: 'O cliente desaparece e você fica sem entender onde a conversa perdeu força.',
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-destructive" />,
    title: 'A call parece boa, mas o cliente não avança',
    description: 'O rapport existe, o interesse parece genuíno — mas a decisão nunca vem.',
  },
  {
    icon: <Volume2 className="w-5 h-5 text-orange-500" />,
    title: 'Você responde objeções no automático',
    description: 'Trata o sintoma sem chegar na raiz. O cliente continua resistindo.',
  },
  {
    icon: <ShieldOff className="w-5 h-5 text-purple-500" />,
    title: 'Você sente que falou demais tentando convencer',
    description: 'Argumentos, benefícios, diferenciais — e mesmo assim o cliente não fecha.',
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-primary" />,
    title: 'Você sai da conversa pensando: "onde foi que eu perdi esse cliente?"',
    description: 'Sem clareza do ponto exato onde a venda travou, o ciclo se repete.',
  },
  {
    icon: <DollarSign className="w-5 h-5 text-yellow-600" />,
    title: 'Você acredita que perdeu por preço, mas não tem certeza',
    description: 'A objeção de preço quase nunca é sobre preço. E você sente isso.',
  },
  {
    icon: <Rewind className="w-5 h-5 text-rose-500" />,
    title: 'Você gostaria de voltar cinco minutos da conversa e fazer outra pergunta',
    description: 'Você sabe que havia um ponto de virada — mas não sabe qual era.',
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
              O pior não é perder a venda.{' '}
              <span className="text-destructive">É não saber onde você errou.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Todo vendedor já terminou uma call achando que foi bem… até o cliente sumir.
            </p>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painPoints.map((point, index) => (
            <FadeIn key={index} delay={index * 0.07}>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-border/80 transition-all h-full flex items-start gap-4 group">
                <div className="bg-muted p-2.5 rounded-xl group-hover:scale-105 transition-transform flex-shrink-0 mt-0.5">
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
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/40 pl-5 text-left bg-primary/3 py-4 pr-5 rounded-r-xl">
              O Destravador foi criado para encontrar exatamente{' '}
              <strong className="text-foreground font-semibold">esse ponto.</strong>
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
