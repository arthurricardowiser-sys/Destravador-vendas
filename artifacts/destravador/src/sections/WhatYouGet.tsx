import React from 'react';
import { Brain, Map, BookOpen, ShieldOff, Layers, Smartphone } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

/* ── 6 deliverable cards ── */
const items = [
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: 'Auditor Comercial com IA',
    description:
      'Analise calls, mensagens de WhatsApp e abordagens comerciais com base em uma lógica real de auditoria.',
  },
  {
    icon: <Map className="w-6 h-6 text-accent" />,
    title: 'Prompt Mestre de Diagnóstico',
    description:
      'O comando estruturado para fazer a IA agir como um gerente comercial experiente revisando sua conversa.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-orange-500" />,
    title: 'Protocolo de Correção de Calls',
    description:
      'O passo a passo usado para encontrar erros de abordagem, diagnóstico, condução e fechamento.',
  },
  {
    icon: <ShieldOff className="w-6 h-6 text-purple-500" />,
    title: 'Biblioteca de Perguntas de Alto Impacto',
    description:
      'Para você nunca mais ficar sem saber o que perguntar quando a conversa trava.',
  },
  {
    icon: <Layers className="w-6 h-6 text-yellow-600" />,
    title: 'Biblioteca de Objeções',
    description:
      'Entenda o que existe por trás de "está caro", "vou pensar", "preciso falar com alguém" e outras objeções comuns.',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-rose-500" />,
    title: 'Guia de Aplicação no WhatsApp e Call',
    description:
      'Aprenda a usar o sistema tanto em ligações quanto em conversas por mensagem.',
  },
];

export function WhatYouGet() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que está incluído no Destravador
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Você não está comprando informação. Está comprando um sistema de auditoria comercial
              pronto para aplicar nas suas conversas reais.
            </p>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-2xl p-6 flex items-start gap-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full group">
                <div className="p-3 bg-muted rounded-xl group-hover:scale-105 transition-transform flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
