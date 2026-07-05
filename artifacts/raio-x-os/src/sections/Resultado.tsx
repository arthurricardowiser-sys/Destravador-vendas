import React from 'react';
import { BarChart3, AlertTriangle, User2, GitCompare, FileText, Dumbbell, Target, Zap, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { SectionCTA } from '@/components/SectionCTA';

const mainBenefits = [
  'Clareza sobre onde a venda começou a travar',
  'Diagnóstico objetivo, sem depender de opinião',
  'Correção prática do que deveria ter sido dito',
  'Plano de ação para a próxima negociação',
  'Uma habilidade principal para treinar primeiro',
];

const cards = [
  { icon: <BarChart3 className="w-5 h-5 text-primary" />, title: 'Score da negociação', desc: 'Nota geral da condução da conversa.', border: 'border-primary/20', bg: 'bg-primary/5' },
  { icon: <AlertTriangle className="w-5 h-5 text-red-400" />, title: 'Causa raiz', desc: 'O comportamento que iniciou a queda.', border: 'border-red-500/20', bg: 'bg-red-500/5' },
  { icon: <Zap className="w-5 h-5 text-orange-400" />, title: 'Erros críticos', desc: 'Os momentos em que a venda perdeu força.', border: 'border-orange-500/20', bg: 'bg-orange-500/5' },
  { icon: <User2 className="w-5 h-5 text-accent" />, title: 'Perfil do lead', desc: 'Como o cliente se comportou durante a conversa.', border: 'border-accent/20', bg: 'bg-accent/5' },
  { icon: <GitCompare className="w-5 h-5 text-blue-400" />, title: 'Como foi vs. deveria ser', desc: 'Comparação direta da condução real e ideal.', border: 'border-blue-500/20', bg: 'bg-blue-500/5' },
  { icon: <FileText className="w-5 h-5 text-cyan-400" />, title: 'Script corrigido', desc: 'O que dizer diferente na próxima conversa.', border: 'border-cyan-500/20', bg: 'bg-cyan-500/5' },
  { icon: <Target className="w-5 h-5 text-green-400" />, title: 'Plano de ação', desc: 'Passos concretos para a próxima negociação.', border: 'border-green-500/20', bg: 'bg-green-500/5' },
  { icon: <Dumbbell className="w-5 h-5 text-yellow-400" />, title: 'Próxima missão', desc: 'A habilidade a desenvolver agora.', border: 'border-yellow-500/20', bg: 'bg-yellow-500/5' },
];

export function Resultado() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              O que muda para você{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                depois de cada auditoria
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Benefits first */}
        <FadeIn delay={0.1}>
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-7 md:p-9 mb-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainBenefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground/90 leading-snug">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Features as support */}
        <FadeIn delay={0.2}>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center mb-6">
            Por trás disso, você recebe:
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.05}>
              <div className={`border ${card.border} ${card.bg} rounded-2xl p-5 flex flex-col gap-3 hover:border-primary/30 transition-all duration-300 group h-full`}>
                <div className="w-10 h-10 rounded-xl bg-background/60 border border-border/30 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1 leading-snug">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <SectionCTA label="Quero receber esse diagnóstico" />
      </div>
    </section>
  );
}
