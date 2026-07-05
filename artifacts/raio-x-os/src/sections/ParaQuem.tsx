import React from 'react';
import { Check, X } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const quemE = [
  'Closers que precisam entender seus erros de condução',
  'Afiliados que vendem no WhatsApp ou direct',
  'Consultores que negociam por ligação ou reunião',
  'Corretores que acompanham propostas e follow-ups',
  'SDRs e executivos comerciais',
  'Prestadores de serviço que vendem por conversa',
  'Infoprodutores que fecham no WhatsApp ou Zoom',
  'Qualquer vendedor que quer parar de repetir erros',
];

const quemNaoE = [
  'Você não conversa com leads',
  'Você não quer revisar suas negociações',
  'Você procura uma promessa milagrosa',
  'Você não quer corrigir sua execução comercial',
];

export function ParaQuem() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-4 py-1.5 text-[11px] font-bold text-muted-foreground tracking-widest uppercase mb-5">
              Para Quem É
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Para quem vende por conversa e{' '}
              <span className="text-primary">precisa melhorar conversão</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <FadeIn delay={0.1}>
            <div className="bg-card border-2 border-primary/25 rounded-2xl p-8 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">É para você se...</h3>
              <ul className="space-y-3.5">
                {quemE.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-card border border-border/40 rounded-2xl p-8 h-full">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">O RAIO-X não é para você se...</h3>
              <ul className="space-y-3.5">
                {quemNaoE.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-snug">{item}</span>
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
