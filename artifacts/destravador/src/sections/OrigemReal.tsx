import React from 'react';
import { ClipboardList, MessageSquare, Lightbulb, TrendingUp } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

/* ─── Timeline steps ─── */
const steps = [
  {
    icon: <ClipboardList className="w-5 h-5 text-primary" />,
    text: 'Cada call era analisada linha por linha',
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-accent" />,
    text: 'Cada objeção era estudada e catalogada',
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-orange-500" />,
    text: 'Cada pergunta era corrigida na prática',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-purple-500" />,
    text: 'Cada abordagem era comparada com o que gerava avanço real',
  },
];

export function OrigemReal() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 relative overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] -z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Esse sistema não nasceu em uma sala de aula.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — narrative text */}
          <FadeIn delay={0.1}>
            <div className="space-y-5">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Antes de virar um produto, esse processo era usado para revisar conversas reais de
                vendedores que precisavam bater meta.
              </p>

              {/* Timeline steps */}
              <div className="relative pl-6 space-y-4 border-l-2 border-primary/20 ml-1">
                {steps.map((step, i) => (
                  <FadeIn key={i} delay={0.15 + i * 0.08}>
                    <div className="relative flex items-start gap-4">
                      {/* Dot on the timeline */}
                      <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-muted p-2 rounded-lg flex-shrink-0">{step.icon}</div>
                        <p className="text-sm md:text-base text-foreground/80 leading-relaxed pt-1.5">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — highlight block */}
          <FadeIn delay={0.4}>
            <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-8 shadow-lg overflow-hidden">
              {/* Background accent */}
              <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-primary/8 blur-2xl pointer-events-none" />

              {/* Credential badge */}
              <div className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/8 border border-primary/20 rounded-full px-3 py-1 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Desenvolvido a partir de um processo real
              </div>

              <blockquote className="text-base md:text-lg font-semibold text-foreground leading-relaxed mb-4">
                "Desenvolvido a partir de um processo real de auditoria comercial aplicado em uma
                operação que acumulou{' '}
                <span className="text-primary">mais de R$&nbsp;50 milhões em vendas.</span>"
              </blockquote>

              <p className="text-sm text-muted-foreground leading-relaxed">
                O Destravador nasceu no campo de batalha comercial — e agora foi organizado em um
                sistema apoiado por IA para que você possa aplicar a mesma lógica nas suas
                próprias conversas.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
