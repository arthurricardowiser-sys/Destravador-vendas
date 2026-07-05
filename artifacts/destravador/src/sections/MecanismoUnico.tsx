import React from 'react';
import { X, Check } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const commonSeller = [
  'Tenta convencer',
  'Responde objeções rápido demais',
  'Fala mais do que escuta',
  'Apresenta solução cedo demais',
  'Sai da call sem saber onde errou',
];

const withAuditor = [
  'Identifica o ponto de ruptura',
  'Entende a causa da objeção',
  'Recebe perguntas melhores',
  'Corrige a próxima abordagem',
  'Termina a call sabendo o que melhorar',
];

export function MecanismoUnico() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-5 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Um gerente comercial dentro do ChatGPT.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O Destravador transforma uma lógica real de auditoria comercial em um sistema com IA
              capaz de revisar suas conversas como um gerente experiente faria.
            </p>
          </div>
        </FadeIn>

        {/* Narrative */}
        <FadeIn delay={0.1}>
          <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            Ele não apenas resume sua call. Ele procura o ponto de ruptura: o momento em que você
            perdeu força, falou demais, pulou etapas ou deixou de fazer a pergunta que revelaria a
            dor real.
          </p>
        </FadeIn>

        {/* Key insight */}
        <FadeIn delay={0.15}>
          <div className="text-center mb-12">
            <p className="inline-block text-base md:text-lg font-bold text-foreground bg-primary/8 border border-primary/20 rounded-2xl px-6 py-3">
              Não é sobre falar melhor. É sobre diagnosticar melhor.
            </p>
          </div>
        </FadeIn>

        {/* Comparison columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Vendedor comum */}
          <FadeIn delay={0.2}>
            <div className="bg-card border border-destructive/20 rounded-2xl p-8 h-full shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-base font-bold text-foreground">Vendedor comum</h3>
              </div>
              <ul className="space-y-3.5">
                {commonSeller.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Vendedor com Auditor IA */}
          <FadeIn delay={0.3}>
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 h-full shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/40 rounded-t-2xl" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">Vendedor com Auditor Comercial IA</h3>
              </div>
              <ul className="space-y-3.5">
                {withAuditor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80 leading-relaxed font-medium">{item}</span>
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
