import React from 'react';
import { ArrowDown } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { SectionCTA } from '@/components/SectionCTA';

const achismo = [
  { label: 'ACHISMO', color: 'text-red-400', border: 'border-red-500/30', bg: 'bg-red-500/8' },
  { label: 'REPETIÇÃO', color: 'text-orange-400', border: 'border-orange-500/30', bg: 'bg-orange-500/8' },
  { label: 'PERDA', color: 'text-yellow-400', border: 'border-yellow-500/30', bg: 'bg-yellow-500/8' },
  { label: 'FRUSTRAÇÃO', color: 'text-muted-foreground', border: 'border-border/50', bg: 'bg-muted/20' },
];

const evidencia = [
  { label: 'EVIDÊNCIA', color: 'text-primary', border: 'border-primary/30', bg: 'bg-primary/8' },
  { label: 'DIAGNÓSTICO', color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/8' },
  { label: 'CORREÇÃO', color: 'text-accent', border: 'border-accent/30', bg: 'bg-accent/8' },
  { label: 'EVOLUÇÃO', color: 'text-green-400', border: 'border-green-500/30', bg: 'bg-green-500/8' },
];

function VerticalFlow({ items }: { items: typeof achismo }) {
  return (
    <div className="flex flex-col items-center gap-1">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <div className={`border ${item.border} ${item.bg} rounded-xl px-10 py-3 text-center w-full max-w-[180px]`}>
            <p className={`text-xs font-black tracking-widest ${item.color}`}>{item.label}</p>
          </div>
          {i < items.length - 1 && (
            <ArrowDown className="w-4 h-4 text-border flex-shrink-0" />
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
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-base text-muted-foreground leading-relaxed">
              O achismo faz o vendedor acreditar que perdeu por preço, concorrência ou lead ruim. Mas sem diagnóstico, ele nunca sabe se o problema real foi{' '}
              <span className="text-foreground font-semibold">autoridade, diagnóstico, valor, silêncio, objeção ou fechamento.</span>
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeIn delay={0.2}>
            <div className="bg-card border border-red-500/15 rounded-2xl p-7 flex flex-col items-center h-full">
              <p className="text-xs font-bold text-red-400 uppercase tracking-widest text-center mb-6">Ciclo do achismo</p>
              <VerticalFlow items={achismo} />
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-card border border-primary/20 rounded-2xl p-7 flex flex-col items-center h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <p className="text-xs font-bold text-primary uppercase tracking-widest text-center mb-6">Com o RAIO-X OS</p>
              <VerticalFlow items={evidencia} />
            </div>
          </FadeIn>
        </div>

        <SectionCTA label="Quero sair do achismo" />
      </div>
    </section>
  );
}
