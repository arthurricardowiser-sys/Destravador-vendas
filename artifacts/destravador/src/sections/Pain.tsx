import React from 'react';
import {
  RefreshCcw,
  MessageSquareDashed,
  DollarSign,
  TrendingDown,
  Volume2,
  Rewind,
  ClipboardX,
  ShieldOff,
} from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

/* ── 8 pain cards ── */
const painPoints = [
  {
    icon: <RefreshCcw className="w-5 h-5 text-primary" />,
    title: 'Você termina a call revendo mentalmente tudo que falou',
    description: 'Ficou repassando a conversa, tentando entender em que momento ela esfriou.',
  },
  {
    icon: <MessageSquareDashed className="w-5 h-5 text-accent" />,
    title: 'O cliente diz "vou pensar" e nunca mais responde',
    description: 'E você fica sem entender o que exatamente aconteceu.',
  },
  {
    icon: <DollarSign className="w-5 h-5 text-yellow-600" />,
    title: 'Você acredita que perdeu por preço, mas não tem certeza',
    description: 'A objeção de preço quase nunca é sobre preço. Mas sem diagnóstico, você nunca descobre.',
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-destructive" />,
    title: 'A conversa parecia boa, mas não avançou',
    description: 'O rapport estava lá, o interesse parecia real — mas a decisão nunca veio.',
  },
  {
    icon: <Volume2 className="w-5 h-5 text-orange-500" />,
    title: 'Você sente que falou demais tentando convencer',
    description: 'Argumentos, benefícios, diferenciais — e mesmo assim o cliente não fechou.',
  },
  {
    icon: <Rewind className="w-5 h-5 text-rose-500" />,
    title: 'Você queria voltar cinco minutos e fazer outra pergunta',
    description: 'Você sentia que havia um ponto de virada — mas não sabia qual era.',
  },
  {
    icon: <ClipboardX className="w-5 h-5 text-purple-500" />,
    title: 'Você abre o CRM e escreve "cliente vai pensar", mas sabe que perdeu',
    description: 'No fundo você sabe. Mas não sabe onde exatamente errou.',
  },
  {
    icon: <ShieldOff className="w-5 h-5 text-muted-foreground" />,
    title: 'Você nunca descobre em qual minuto perdeu autoridade',
    description: 'Sem esse dado, o ciclo se repete na próxima call.',
  },
];

export function Pain() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-5 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              O pior não é perder a venda.{' '}
              <span className="text-destructive">É não saber onde você errou.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Todo vendedor já terminou uma call achando que foi bem… até o cliente sumir.
            </p>
          </div>
        </FadeIn>

        {/* Narrative text */}
        <FadeIn delay={0.1}>
          <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            Você desliga a call, entra no carro, abre o WhatsApp ou atualiza o CRM e fica tentando
            lembrar em qual momento a conversa esfriou.
          </p>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painPoints.map((point, index) => (
            <FadeIn key={index} delay={index * 0.06}>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-border/80 transition-all h-full flex items-start gap-4 group">
                <div className="bg-muted p-2.5 rounded-xl group-hover:scale-105 transition-transform flex-shrink-0 mt-0.5">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Closing line */}
        <FadeIn delay={0.5}>
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-base md:text-lg font-medium text-foreground border-l-4 border-primary/50 pl-5 text-left bg-primary/3 py-4 pr-5 rounded-r-xl">
              O Destravador foi criado para encontrar exatamente esse ponto.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
