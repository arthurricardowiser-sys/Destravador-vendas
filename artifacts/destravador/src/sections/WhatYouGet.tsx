import React from 'react';
import { Brain, Map, BookOpen, ShieldOff, Layers } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

/* ── Deliverable cards ── */
const items = [
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: 'Prompt Mestre do Auditor Comercial',
    description:
      'Um comando estruturado para fazer a IA analisar suas conversas como um mentor de vendas consultivas.',
  },
  {
    icon: <Map className="w-6 h-6 text-accent" />,
    title: 'Protocolo de Diagnóstico',
    description:
      'O passo a passo para identificar onde a venda travou: dor, urgência, prioridade, autoridade ou confiança.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-orange-500" />,
    title: 'Biblioteca de Perguntas Estratégicas',
    description:
      'Perguntas para aprofundar a dor do cliente sem parecer forçado, robótico ou insistente.',
  },
  {
    icon: <ShieldOff className="w-6 h-6 text-purple-500" />,
    title: 'Biblioteca de Objeções',
    description:
      'Estrutura para entender objeções como sintomas de um diagnóstico incompleto.',
  },
  {
    icon: <Layers className="w-6 h-6 text-yellow-600" />,
    title: 'Guia de Aplicação Prática',
    description:
      'Como usar o sistema antes, durante e depois das suas conversas comerciais.',
  },
];

export function WhatYouGet() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que você está comprando de verdade?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Você não está comprando um PDF genérico. Está acessando um sistema prático de
              auditoria comercial para usar com IA e transformar conversas perdidas em
              diagnósticos mais inteligentes.
            </p>
          </div>
        </FadeIn>

        {/* Cards — 2 col on md+, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className={`bg-card border border-border rounded-2xl p-6 flex items-start gap-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full group ${
                  /* last card spans 2 cols on md when total is odd */
                  i === items.length - 1 && items.length % 2 !== 0
                    ? 'md:col-span-2'
                    : ''
                }`}
              >
                <div className="p-3 bg-muted rounded-xl group-hover:scale-105 transition-transform flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
