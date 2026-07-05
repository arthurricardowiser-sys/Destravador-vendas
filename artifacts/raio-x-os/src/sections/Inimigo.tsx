import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const achismo = [
  { label: 'ACHISMO', color: 'text-red-400', border: 'border-red-500/30', bg: 'bg-red-500/5' },
  { label: 'REPETIÇÃO', color: 'text-orange-400', border: 'border-orange-500/30', bg: 'bg-orange-500/5' },
  { label: 'PERDA', color: 'text-yellow-400', border: 'border-yellow-500/30', bg: 'bg-yellow-500/5' },
  { label: 'FRUSTRAÇÃO', color: 'text-muted-foreground', border: 'border-border/50', bg: 'bg-muted/20' },
];

const evidencia = [
  { label: 'EVIDÊNCIA', color: 'text-primary', border: 'border-primary/30', bg: 'bg-primary/5' },
  { label: 'DIAGNÓSTICO', color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/5' },
  { label: 'CORREÇÃO', color: 'text-accent', border: 'border-accent/30', bg: 'bg-accent/5' },
  { label: 'EVOLUÇÃO', color: 'text-green-400', border: 'border-green-500/30', bg: 'bg-green-500/5' },
];

function Flow({ items }: { items: typeof achismo }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <div className={`border ${item.border} ${item.bg} rounded-xl px-5 py-3 text-center`}>
            <p className={`text-xs font-black tracking-widest ${item.color}`}>{item.label}</p>
          </div>
          {i < items.length - 1 && (
            <ArrowRight className="w-4 h-4 text-border flex-shrink-0" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export function Inimigo() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        <FadeIn>
          <div className="text-center mb-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/8 px-4 py-1.5 text-[11px] font-bold text-red-400 tracking-widest uppercase mb-5">
              O Inimigo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              O verdadeiro inimigo da sua conversão é o{' '}
              <span className="text-red-400">achismo comercial.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-3">
            <p className="text-base text-muted-foreground leading-relaxed">
              Quando você não sabe onde errou, você corrige o problema errado.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              E quando corrige o problema errado, continua perdendo negociações pelos mesmos motivos.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.2}>
            <div className="bg-card border border-red-500/15 rounded-2xl p-7">
              <p className="text-xs font-bold text-red-400 uppercase tracking-widest text-center mb-5">Ciclo do achismo</p>
              <Flow items={achismo} />
            </div>
          </FadeIn>

          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-8 bg-gradient-to-b from-red-500/40 to-primary/40" />
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">RAIO-X OS</div>
              <div className="w-px h-8 bg-gradient-to-b from-primary/40 to-green-500/40" />
            </div>
          </div>

          <FadeIn delay={0.3}>
            <div className="bg-card border border-primary/20 rounded-2xl p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <p className="text-xs font-bold text-primary uppercase tracking-widest text-center mb-5">Ciclo da evidência</p>
              <Flow items={evidencia} />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
