import React from 'react';
import { Phone, Map, AlertTriangle, HelpCircle, TrendingUp, Cpu } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const timeline = [
  { icon: <Phone className="w-4 h-4 text-primary" />, text: 'Calls reais analisadas' },
  { icon: <Map className="w-4 h-4 text-accent" />, text: 'Objeções mapeadas' },
  { icon: <AlertTriangle className="w-4 h-4 text-orange-500" />, text: 'Erros comerciais identificados' },
  { icon: <HelpCircle className="w-4 h-4 text-purple-500" />, text: 'Perguntas corrigidas' },
  { icon: <TrendingUp className="w-4 h-4 text-rose-500" />, text: 'Padrões de avanço reconhecidos' },
  { icon: <Cpu className="w-4 h-4 text-foreground" />, text: 'Lógica transformada em Auditor Comercial IA' },
];

export function OrigemReal() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] -z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-5 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Esse sistema não nasceu em uma sala de aula.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Ele nasceu revisando conversas reais de vendedores que precisavam bater meta.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">

          {/* Left — narrative */}
          <FadeIn delay={0.1}>
            <div className="space-y-5">
              <p className="text-base text-muted-foreground leading-relaxed">
                Durante anos, vendas importantes foram revisadas. Calls foram auditadas. Objeções
                foram estudadas. Perguntas foram corrigidas. Abordagens foram comparadas com aquilo
                que realmente fazia o cliente avançar.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Foi assim que nasceu uma lógica interna de auditoria comercial. Agora essa mesma
                lógica foi organizada em um sistema apoiado por IA para que você possa aplicar nas
                suas próprias conversas.
              </p>

              {/* 6-step timeline */}
              <div className="relative pl-6 space-y-4 border-l-2 border-primary/20 ml-1 mt-6">
                {timeline.map((step, i) => (
                  <FadeIn key={i} delay={0.15 + i * 0.07}>
                    <div className="relative flex items-start gap-3">
                      <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="bg-muted p-1.5 rounded-lg flex-shrink-0">{step.icon}</div>
                        <p className="text-sm text-foreground/80 leading-snug">{step.text}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — credential block */}
          <FadeIn delay={0.45}>
            <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-8 shadow-lg overflow-hidden">
              <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-primary/8 blur-2xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/8 border border-primary/20 rounded-full px-3 py-1 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Processo real de auditoria comercial
              </div>

              <blockquote className="text-base md:text-lg font-semibold text-foreground leading-relaxed mb-4">
                "O Destravador nasceu no campo de batalha comercial — não em teoria, não em achismo,
                não em frases prontas."
              </blockquote>

              <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4 mt-4">
                Baseado em um processo real usado em uma operação comercial com{' '}
                <strong className="text-foreground">mais de R$&nbsp;50 milhões em vendas acumuladas.</strong>
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
