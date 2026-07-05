import React from 'react';
import { ArrowRight, CheckCircle, Bot, AlertTriangle, HelpCircle, Lightbulb } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

/* ─── Mock UI blocks shown inside the product preview ─── */
const mockBlocks = [
  {
    icon: <Bot className="w-4 h-4 text-accent" />,
    label: 'Conversa analisada',
    labelColor: 'text-accent',
    bg: 'bg-accent/5 border-accent/20',
    content: (
      <>
        <span className="text-muted-foreground text-xs">Cliente: </span>
        <span className="text-foreground/80 text-xs italic">
          "Achei interessante, mas vou pensar e te retorno."
        </span>
      </>
    ),
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-orange-500" />,
    label: 'Erro identificado pela IA',
    labelColor: 'text-orange-500',
    bg: 'bg-orange-500/5 border-orange-500/20',
    content: (
      <span className="text-foreground/80 text-xs">
        Você tentou contornar a objeção antes de entender o critério real de decisão do cliente.
      </span>
    ),
  },
  {
    icon: <HelpCircle className="w-4 h-4 text-primary" />,
    label: 'Pergunta sugerida',
    labelColor: 'text-primary',
    bg: 'bg-primary/5 border-primary/20',
    content: (
      <span className="text-foreground/80 text-xs italic">
        "O que precisaria ficar claro para você sentir segurança em avançar hoje?"
      </span>
    ),
  },
  {
    icon: <Lightbulb className="w-4 h-4 text-yellow-500" />,
    label: 'Próxima ação',
    labelColor: 'text-yellow-600',
    bg: 'bg-yellow-500/5 border-yellow-500/20',
    content: (
      <span className="text-foreground/80 text-xs">
        Volte ao diagnóstico antes de apresentar novos argumentos.
      </span>
    ),
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:28px_28px]" />
      {/* Glow */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-primary/15 opacity-50 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-accent/10 opacity-40 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: copy ── */}
          <div className="flex flex-col gap-8">
            {/* Pill tag */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary tracking-wide w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Sistema Inteligente de Diagnóstico Comercial com IA
              </div>
            </FadeIn>

            {/* H1 with visual contrast */}
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground">
                Descubra exatamente{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                    onde sua venda começou a morrer
                  </span>
                  <span className="absolute inset-x-0 bottom-1 h-[6px] bg-primary/10 rounded-full -z-0" />
                </span>{' '}
                <span className="text-foreground/70">
                  antes do cliente dizer
                </span>{' '}
                <span className="text-primary">"vou pensar".</span>
              </h1>
            </FadeIn>

            {/* Subheadline */}
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                O Destravador usa Inteligência Artificial para analisar suas conversas,
                identificar seus erros de diagnóstico e mostrar exatamente qual pergunta
                deveria ter sido feita.
              </p>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-5">
                <ButtonCTA href="#oferta" className="text-base md:text-lg px-8 py-4 w-full sm:w-auto">
                  Quero Receber Meu Diagnóstico Comercial <ArrowRight className="w-5 h-5 ml-1" />
                </ButtonCTA>

                {/* Microcopy */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-5 text-sm text-muted-foreground">
                  {[
                    'Funciona com ChatGPT',
                    'Sem instalação',
                    'Primeiro diagnóstico em menos de 5 minutos',
                  ].map((item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT: product mockup ── */}
          <FadeIn delay={0.4} className="w-full">
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-60 -z-10" />

              {/* Window chrome */}
              <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
                <div className="h-9 border-b border-border bg-muted/30 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-3 text-[11px] text-muted-foreground font-mono tracking-tight">
                    destravador · diagnóstico comercial
                  </span>
                </div>

                {/* Mock blocks */}
                <div className="p-5 space-y-3 bg-gradient-to-br from-background to-muted/10">
                  {mockBlocks.map((block, i) => (
                    <div
                      key={i}
                      className={`rounded-xl border p-4 flex items-start gap-3 ${block.bg}`}
                    >
                      <div className="mt-0.5 flex-shrink-0">{block.icon}</div>
                      <div className="space-y-1 min-w-0">
                        <p className={`text-[11px] font-bold uppercase tracking-wider ${block.labelColor}`}>
                          {block.label}
                        </p>
                        <p>{block.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
