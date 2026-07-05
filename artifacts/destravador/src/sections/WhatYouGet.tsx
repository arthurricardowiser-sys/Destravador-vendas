import React from 'react';
import { Brain, Map, BookOpen, Shield, Layers, Smartphone, ArrowRight } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

const items = [
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: 'Auditor Comercial IA',
    description: 'Para analisar calls, WhatsApps, directs e follow-ups.',
  },
  {
    icon: <Map className="w-6 h-6 text-accent" />,
    title: 'Prompt Mestre de Diagnóstico',
    description: 'Para fazer a IA agir como um gerente comercial experiente revisando sua conversa.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-orange-500" />,
    title: 'Protocolo de Correção de Conversas',
    description: 'Para encontrar erros de abordagem, diagnóstico, condução e fechamento.',
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-500" />,
    title: 'Biblioteca de Perguntas de Alto Impacto',
    description: 'Para nunca mais ficar sem saber o que perguntar quando o cliente trava.',
  },
  {
    icon: <Layers className="w-6 h-6 text-yellow-600" />,
    title: 'Biblioteca de Objeções',
    description: 'Para entender o que existe por trás de "está caro", "vou pensar" e "preciso falar com alguém".',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-rose-500" />,
    title: 'Guia de Aplicação em Call e WhatsApp',
    description: 'Para usar o sistema tanto em ligações quanto em conversas por mensagem.',
  },
];

export function WhatYouGet() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tudo que faz parte do Sistema Destravador de Vendas.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Não é apenas um prompt. É um conjunto de ferramentas para revisar, entender e corrigir suas conversas comerciais.
            </p>
          </div>
        </FadeIn>

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

        <FadeIn delay={0.55}>
          <div className="flex justify-center mt-10">
            <ButtonCTA href="#oferta" className="w-full sm:w-auto px-8 py-4">
              Quero Acessar o Sistema Completo <ArrowRight className="w-5 h-5 ml-1" />
            </ButtonCTA>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
