import React from 'react';
import { UserX, BadgeDollarSign, ThermometerSun, MessageSquareX } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { SectionCTA } from '@/components/SectionCTA';

const cards = [
  {
    icon: <UserX className="w-6 h-6 text-red-400" />,
    title: 'Cliente sumiu depois da proposta',
    desc: 'Você enviou, aguardou, mandou follow-up — e nada. Sem diagnóstico, você não sabe o que aconteceu.',
    border: 'border-red-500/20',
    bg: 'bg-red-500/5',
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6 text-yellow-400" />,
    title: 'Você deu desconto e mesmo assim não fechou',
    desc: 'O preço raramente é o problema real. Mas sem auditoria, você continua cedendo valor sem entender a causa.',
    border: 'border-yellow-500/20',
    bg: 'bg-yellow-500/5',
  },
  {
    icon: <ThermometerSun className="w-6 h-6 text-orange-400" />,
    title: 'A conversa parecia boa, mas esfriou',
    desc: 'O lead estava engajado, respondendo — e do nada parou. Algo quebrou a negociação e você não sabe o quê.',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/5',
  },
  {
    icon: <MessageSquareX className="w-6 h-6 text-muted-foreground" />,
    title: 'Você não sabe o que deveria ter falado diferente',
    desc: 'Revisa a conversa na cabeça, mas não chega a uma conclusão. Tenta de outro jeito na próxima — sem saber se vai funcionar.',
    border: 'border-border/60',
    bg: 'bg-muted/20',
  },
];

export function Pain() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-5 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Você está perdendo vendas ou apenas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                repetindo erros invisíveis?
              </span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-2xl mx-auto mb-14 bg-card border border-border/50 rounded-2xl px-7 py-6">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              Muitos vendedores saem de uma negociação pensando:
            </p>
            <div className="space-y-2">
              {['"Foi o preço."', '"O cliente não tinha dinheiro."', '"Ele só queria pesquisar."', '"O lead era ruim."'].map((phrase, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  <p className="text-sm text-foreground/70 italic">{phrase}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-border/40">
              <p className="text-sm font-semibold text-foreground">
                Mas sem uma auditoria da conversa, tudo isso é apenas{' '}
                <span className="text-red-400">achismo.</span>
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className={`border ${card.border} ${card.bg} rounded-2xl p-6 flex items-start gap-4 hover:border-primary/20 transition-all duration-300 group`}>
                <div className="w-11 h-11 rounded-xl bg-background/80 border border-border/40 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1.5 leading-snug">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <SectionCTA label="Quero descobrir onde estou errando" />
      </div>
    </section>
  );
}
