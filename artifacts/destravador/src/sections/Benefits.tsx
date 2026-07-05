import React from 'react';
import { Target, MessageSquareOff, HelpCircle, TrendingUp, BookOpen, RotateCcw, Brain, ShieldOff } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const benefits = [
  {
    icon: <Target className="w-7 h-7 text-primary" />,
    text: 'Descubra exatamente onde perdeu autoridade.',
  },
  {
    icon: <MessageSquareOff className="w-7 h-7 text-orange-500" />,
    text: 'Pare de responder objeções no automático.',
  },
  {
    icon: <HelpCircle className="w-7 h-7 text-accent" />,
    text: 'Saiba qual pergunta fazer quando o cliente trava.',
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-purple-500" />,
    text: 'Termine cada call sabendo o que melhorar.',
  },
  {
    icon: <BookOpen className="w-7 h-7 text-yellow-600" />,
    text: 'Transforme conversas perdidas em aprendizado prático.',
  },
  {
    icon: <RotateCcw className="w-7 h-7 text-rose-500" />,
    text: 'Corrija sua abordagem antes da próxima oportunidade.',
  },
  {
    icon: <Brain className="w-7 h-7 text-primary" />,
    text: 'Venda com mais clareza, menos ansiedade e mais controle.',
  },
  {
    icon: <ShieldOff className="w-7 h-7 text-muted-foreground" />,
    text: 'Pare de depender apenas da intuição.',
  },
];

export function Benefits() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que muda na prática?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Você para de vender no escuro.
            </p>
          </div>
        </FadeIn>

        {/* 8 benefit cards — 2 col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
                <div className="bg-muted p-3 rounded-xl group-hover:scale-105 transition-transform flex-shrink-0">
                  {b.icon}
                </div>
                <p className="text-sm font-semibold text-foreground leading-snug">{b.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
