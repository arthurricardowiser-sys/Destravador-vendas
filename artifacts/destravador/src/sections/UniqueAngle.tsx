import React from 'react';
import { X, Check } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const generic = [
  'Dá respostas superficiais',
  'Analisa sem contexto comercial',
  'Foca em frases bonitas',
  'Não entende onde a venda morreu',
];

const destravador = [
  'Analisa com lógica de auditoria',
  'Identifica o erro comercial específico',
  'Mostra a pergunta que faltou',
  'Ajuda a corrigir a próxima abordagem',
];

export function UniqueAngle() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que isso é diferente de um prompt genérico?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Um prompt genérico apenas responde ao que você pede. O Destravador carrega uma lógica
              de auditoria comercial construída a partir de conversas reais, erros reais e padrões
              reais de vendedores em campo.
            </p>
          </div>
        </FadeIn>

        {/* Comparison columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Prompt genérico */}
          <FadeIn delay={0.1}>
            <div className="bg-card border border-destructive/20 rounded-2xl p-8 h-full shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Prompt genérico</h3>
              </div>
              <ul className="space-y-4">
                {generic.map((item, i) => (
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

          {/* Destravador */}
          <FadeIn delay={0.2}>
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 h-full shadow-md relative overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/40 rounded-t-2xl" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Destravador</h3>
              </div>
              <ul className="space-y-4">
                {destravador.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80 leading-relaxed font-medium">
                      {item}
                    </span>
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
