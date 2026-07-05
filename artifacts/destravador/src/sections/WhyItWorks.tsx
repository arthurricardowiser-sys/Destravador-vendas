import React from 'react';
import { MessageSquareOff, Stethoscope, HelpCircle } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const pillars = [
  {
    icon: <MessageSquareOff className="w-6 h-6 text-primary" />,
    title: 'Menos discurso',
    description: 'Pare de tentar convencer com argumentos longos.',
  },
  {
    icon: <Stethoscope className="w-6 h-6 text-accent" />,
    title: 'Mais diagnóstico',
    description: 'Aprenda a encontrar o que realmente impede o cliente de avançar.',
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-orange-500" />,
    title: 'Perguntas melhores',
    description: 'Receba sugestões práticas para conduzir a conversa com mais profundidade.',
  },
];

export function WhyItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por que isso funciona?
            </h2>
            <p className="text-xl font-semibold text-foreground/80 leading-snug mb-4">
              As pessoas não compram porque você fala bem.
              <br />
              Elas compram quando se sentem compreendidas.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              O Destravador usa IA para mostrar onde sua conversa perdeu profundidade, qual ponto
              emocional não foi explorado e qual pergunta poderia ter aberto o verdadeiro motivo
              de compra.
            </p>
          </div>
        </FadeIn>

        {/* 3 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 text-center flex flex-col items-center gap-4 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
