import React from 'react';
import { Target, Microscope, ShieldCheck, HelpCircle, MessageCircleHeart, TrendingUp } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { ButtonCTA } from '@/components/ButtonCTA';

const benefits = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Fim da venda por tentativa e erro",
    description: "Pare de adivinhar o que deu errado. Tenha clareza matemática do motivo da perda de cada negociação."
  },
  {
    icon: <Microscope className="w-8 h-8 text-accent" />,
    title: "Diagnóstico preciso",
    description: "Encontre os gargalos invisíveis no seu discurso que estão afastando os clientes."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Mais confiança em negociações",
    description: "Quando você sabe exatamente como diagnosticar, nenhuma objeção te pega de surpresa."
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-accent" />,
    title: "Perguntas que revelam a dor",
    description: "Aprenda o arsenal de perguntas que faz o cliente vender para si mesmo."
  },
  {
    icon: <MessageCircleHeart className="w-8 h-8 text-primary" />,
    title: "Conversas que criam conexão",
    description: "Saia do roteiro engessado e crie um relacionamento de confiança em minutos."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-accent" />,
    title: "Mais conversões sem pressão",
    description: "Venda diagnosticando, não empurrando. O fechamento torna-se a consequência natural."
  }
];

export function Benefits() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O que muda depois do Destravador
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A transformação de um "tirador de pedidos" para um "diagnosticar consultivo" que os clientes respeitam.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="glass-card p-8 rounded-2xl h-full border border-border/50 hover:border-primary/30 transition-colors group">
                <div className="mb-6 p-4 bg-muted/50 rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6} className="mt-16 text-center">
          <ButtonCTA href="#oferta" className="px-8 py-4">
            Quero ter esses resultados na prática
          </ButtonCTA>
        </FadeIn>
      </div>
    </section>
  );
}
