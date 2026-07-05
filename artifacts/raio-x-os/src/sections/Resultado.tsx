import React from 'react';
import { BarChart3, AlertTriangle, User2, GitCompare, FileText, Dumbbell, Target, Zap } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const cards = [
  { icon: <BarChart3 className="w-6 h-6 text-primary" />, title: 'Score da negociação', desc: 'Nota geral da condução — do primeiro contato ao fechamento.', border: 'border-primary/20', bg: 'bg-primary/5' },
  { icon: <AlertTriangle className="w-6 h-6 text-red-400" />, title: 'Causa raiz', desc: 'O comportamento específico que fez a negociação sair do controle.', border: 'border-red-500/20', bg: 'bg-red-500/5' },
  { icon: <Zap className="w-6 h-6 text-orange-400" />, title: 'Erros críticos', desc: 'Momentos exatos onde a negociação perdeu força.', border: 'border-orange-500/20', bg: 'bg-orange-500/5' },
  { icon: <User2 className="w-6 h-6 text-accent" />, title: 'Perfil comportamental do lead', desc: 'Como o cliente se comportou e o que isso indicava durante a conversa.', border: 'border-accent/20', bg: 'bg-accent/5' },
  { icon: <GitCompare className="w-6 h-6 text-blue-400" />, title: 'Como foi vs. como deveria ser', desc: 'Comparação direta entre sua condução e a condução ideal.', border: 'border-blue-500/20', bg: 'bg-blue-500/5' },
  { icon: <FileText className="w-6 h-6 text-cyan-400" />, title: 'Script corrigido', desc: 'O que você deveria ter dito em cada ponto crítico da negociação.', border: 'border-cyan-500/20', bg: 'bg-cyan-500/5' },
  { icon: <Target className="w-6 h-6 text-green-400" />, title: 'Plano de ação', desc: 'Passos concretos para aplicar na sua próxima negociação.', border: 'border-green-500/20', bg: 'bg-green-500/5' },
  { icon: <Dumbbell className="w-6 h-6 text-yellow-400" />, title: 'Próxima missão', desc: 'A habilidade específica para desenvolver antes da próxima conversa.', border: 'border-yellow-500/20', bg: 'bg-yellow-500/5' },
];

export function Resultado() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        <FadeIn>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-4 py-1.5 text-[11px] font-bold text-muted-foreground tracking-widest uppercase mb-5">
              O que você recebe
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              O que você recebe{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                em cada auditoria
              </span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Um diagnóstico completo da negociação — não um feedback genérico.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className={`border ${card.border} ${card.bg} rounded-2xl p-5 flex flex-col gap-3 hover:border-primary/30 transition-all duration-300 group h-full`}>
                <div className="w-11 h-11 rounded-xl bg-background/60 border border-border/30 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5 leading-snug">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
