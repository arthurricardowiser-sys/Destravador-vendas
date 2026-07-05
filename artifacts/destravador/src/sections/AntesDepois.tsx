import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

const before = [
  'Cliente diz "vou pensar"',
  'Você não sabe se perdeu por preço',
  'Você responde objeções no escuro',
  'Você tenta convencer mais',
  'Você termina sem clareza',
];

const after = [
  'Você identifica onde a conversa travou',
  'Entende a causa real da objeção',
  'Recebe a pergunta que faltou',
  'Corrige sua próxima abordagem',
  'Termina sabendo o que melhorar',
];

export function AntesDepois() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Antes e depois do diagnóstico.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A diferença não é saber mais técnicas. É entender o que aconteceu.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Before */}
          <FadeIn delay={0.1}>
            <div className="bg-card border border-destructive/20 rounded-2xl p-8 h-full shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Sem o Destravador</h3>
              </div>
              <ul className="space-y-3.5">
                {before.map((item, i) => (
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

          {/* After */}
          <FadeIn delay={0.2}>
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 h-full shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/40 rounded-t-2xl" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Com o Destravador</h3>
              </div>
              <ul className="space-y-3.5">
                {after.map((item, i) => (
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

        <FadeIn delay={0.35}>
          <div className="flex justify-center mt-10">
            <ButtonCTA href="#oferta" className="w-full sm:w-auto px-8 py-4">
              Quero Diagnosticar Minha Próxima Conversa <ArrowRight className="w-5 h-5 ml-1" />
            </ButtonCTA>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
