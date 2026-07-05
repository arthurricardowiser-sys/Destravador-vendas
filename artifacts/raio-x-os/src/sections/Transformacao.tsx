import React from 'react';
import { X, Check } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const before = [
  '"Não sei onde errei."',
  '"Acho que foi preço."',
  '"O cliente sumiu."',
  '"Não sei o que melhorar."',
];

const after = [
  '"Sei exatamente onde perdi controle."',
  '"Entendi a causa raiz."',
  '"Tenho um plano para a próxima negociação."',
  '"Sei qual comportamento corrigir."',
];

export function Transformacao() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-transparent to-muted/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        <FadeIn>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-4 py-1.5 text-[11px] font-bold text-muted-foreground tracking-widest uppercase mb-5">
              Transformação
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Do escuro à{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                clareza comercial.
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <FadeIn delay={0.1}>
            <div className="bg-card border border-red-500/20 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-base font-bold text-foreground">Sem o RAIO-X OS</h3>
              </div>
              <ul className="space-y-4">
                {before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-sm text-muted-foreground italic leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">Com o RAIO-X OS</h3>
              </div>
              <ul className="space-y-4">
                {after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80 font-medium italic leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
