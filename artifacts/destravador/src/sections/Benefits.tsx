import React from 'react';
import { Target, MessageSquareOff, HelpCircle, TrendingUp, BookOpen, RotateCcw, ArrowRight } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

const benefits = [
  {
    icon: <Target className="w-7 h-7 text-primary" />,
    text: 'Descubra exatamente onde perdeu autoridade.',
    description: 'Entenda o ponto da conversa em que o cliente deixou de confiar, avançar ou enxergar valor.',
  },
  {
    icon: <MessageSquareOff className="w-7 h-7 text-orange-500" />,
    text: 'Pare de responder objeções no automático.',
    description: 'Antes de responder "está caro", entenda o que realmente está por trás da objeção.',
  },
  {
    icon: <HelpCircle className="w-7 h-7 text-accent" />,
    text: 'Saiba qual pergunta fazer quando o cliente trava.',
    description: 'Receba sugestões de perguntas para voltar ao diagnóstico sem parecer insistente.',
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-purple-500" />,
    text: 'Transforme conversas perdidas em aprendizado.',
    description: 'Cada call ou WhatsApp pode virar um mapa de melhoria para sua próxima abordagem.',
  },
  {
    icon: <BookOpen className="w-7 h-7 text-yellow-600" />,
    text: 'Termine cada conversa sabendo o que melhorar.',
    description: 'Em vez de sair no escuro, você entende o erro, o impacto e a próxima ação.',
  },
  {
    icon: <RotateCcw className="w-7 h-7 text-rose-500" />,
    text: 'Venda com mais clareza, menos ansiedade e mais controle.',
    description: 'Você passa a conduzir conversas com mais consciência comercial.',
  },
];

export function Benefits() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group h-full">
                <div className="bg-muted p-3 rounded-xl group-hover:scale-105 transition-transform flex-shrink-0 mt-0.5">
                  {b.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-snug mb-1.5">{b.text}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="flex justify-center mt-10">
            <ButtonCTA href="#oferta" className="w-full sm:w-auto px-8 py-4">
              Quero Parar de Vender no Escuro <ArrowRight className="w-5 h-5 ml-1" />
            </ButtonCTA>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
