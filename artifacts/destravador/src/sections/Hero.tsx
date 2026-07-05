import React from 'react';
import { ArrowRight, CheckCircle, Bot, AlertTriangle, HelpCircle, Lightbulb, Brain, BadgeAlert } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

/* ─── 5 mock UI blocks shown inside the laptop screen ─── */
const mockBlocks = [
  {
    icon: <Bot className="w-3.5 h-3.5 text-accent" />,
    label: 'Conversa analisada',
    labelColor: 'text-accent',
    bg: 'bg-accent/8 border-accent/20',
    content: (
      <>
        <span className="text-muted-foreground text-[11px]">Cliente: </span>
        <span className="text-foreground/80 text-[11px] italic">
          "Gostei da proposta, mas vou pensar e te retorno."
        </span>
      </>
    ),
  },
  {
    icon: <AlertTriangle className="w-3.5 h-3.5 text-orange-500" />,
    label: 'Erro encontrado',
    labelColor: 'text-orange-500',
    bg: 'bg-orange-500/5 border-orange-500/20',
    content: (
      <span className="text-foreground/80 text-[11px]">
        Você tentou responder a objeção antes de entender o real critério de decisão do cliente.
      </span>
    ),
  },
  {
    icon: <Brain className="w-3.5 h-3.5 text-purple-500" />,
    label: 'Diagnóstico da IA',
    labelColor: 'text-purple-500',
    bg: 'bg-purple-500/5 border-purple-500/20',
    content: (
      <span className="text-foreground/80 text-[11px]">
        A venda começou a perder força quando a dor foi tratada de forma superficial e a
        consequência de não resolver o problema não foi explorada.
      </span>
    ),
  },
  {
    icon: <HelpCircle className="w-3.5 h-3.5 text-primary" />,
    label: 'Pergunta sugerida',
    labelColor: 'text-primary',
    bg: 'bg-primary/5 border-primary/20',
    content: (
      <span className="text-foreground/80 text-[11px] italic">
        "O que precisaria ficar claro para você sentir segurança em avançar hoje?"
      </span>
    ),
  },
  {
    icon: <Lightbulb className="w-3.5 h-3.5 text-yellow-500" />,
    label: 'Próxima ação',
    labelColor: 'text-yellow-600',
    bg: 'bg-yellow-500/5 border-yellow-500/20',
    content: (
      <span className="text-foreground/80 text-[11px]">
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
      {/* Glows */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/12 opacity-60 blur-[140px]" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-accent/10 opacity-40 blur-[110px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: copy ── */}
          <div className="flex flex-col gap-7">

            {/* Pill tag */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary tracking-wide w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                IA treinada com lógica de auditoria comercial real
              </div>
            </FadeIn>

            {/* H1 */}
            <FadeIn delay={0.1}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-foreground">
                Tenha acesso ao processo de auditoria comercial usado para corrigir vendedores em uma operação com{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  mais de R$&nbsp;50 milhões em vendas.
                </span>
              </h1>
            </FadeIn>

            {/* Subheadline */}
            <FadeIn delay={0.2}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Transformamos um método real de análise de calls e conversas comerciais em um sistema
                com IA que mostra onde você perdeu o cliente, qual erro cometeu e qual pergunta
                deveria ter feito.
              </p>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-5">
                <ButtonCTA href="#oferta" className="text-base md:text-lg px-8 py-4 w-full sm:w-auto">
                  Quero Auditar Minha Primeira Conversa <ArrowRight className="w-5 h-5 ml-1" />
                </ButtonCTA>

                {/* Microcopy */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-5 text-sm text-muted-foreground">
                  {[
                    'Funciona para calls e WhatsApp',
                    'Sem instalação',
                    'Diagnóstico prático em poucos minutos',
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

          {/* ── RIGHT: laptop mockup ── */}
          <FadeIn delay={0.45} className="w-full">
            <div className="relative flex justify-center lg:justify-end">

              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/15 rounded-[32px] blur-3xl opacity-50 -z-10" />

              {/* Laptop wrapper */}
              <div className="w-full max-w-[540px]" style={{ perspective: '1200px' }}>
                <div
                  className="relative"
                  style={{ transform: 'rotateX(4deg) rotateY(-4deg)', transformStyle: 'preserve-3d' }}
                >

                  {/* ── Screen bezel ── */}
                  <div className="relative rounded-[18px] bg-gray-900 p-[10px] shadow-[0_40px_80px_-10px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)] border border-gray-800">

                    {/* Camera notch */}
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-700 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-gray-600" />
                    </div>

                    {/* Screen surface */}
                    <div className="rounded-[10px] overflow-hidden bg-background shadow-inner border border-gray-800/50">

                      {/* Window chrome / title bar */}
                      <div className="h-9 border-b border-border/60 bg-muted/40 flex items-center px-4 gap-2 flex-shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/90" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/90" />
                        <span className="ml-3 text-[11px] text-muted-foreground font-mono tracking-tight flex-1">
                          Auditoria Comercial IA
                        </span>
                        {/* "Erro crítico" badge */}
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 rounded-full px-2 py-0.5">
                          <BadgeAlert className="w-3 h-3" />
                          Erro crítico encontrado
                        </span>
                      </div>

                      {/* Blocks */}
                      <div className="p-4 space-y-2.5 bg-gradient-to-br from-background to-muted/10">
                        {mockBlocks.map((block, i) => (
                          <div
                            key={i}
                            className={`rounded-xl border p-3 flex items-start gap-2.5 ${block.bg}`}
                          >
                            <div className="mt-0.5 flex-shrink-0">{block.icon}</div>
                            <div className="space-y-0.5 min-w-0">
                              <p className={`text-[10px] font-bold uppercase tracking-wider ${block.labelColor}`}>
                                {block.label}
                              </p>
                              <p className="leading-snug">{block.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── Laptop hinge + base ── */}
                  <div className="relative mx-auto" style={{ width: '94%' }}>
                    {/* Hinge strip */}
                    <div className="h-[6px] bg-gray-800 rounded-b-sm shadow-[0_2px_4px_rgba(0,0,0,0.4)] border-b border-gray-700" />
                    {/* Base */}
                    <div
                      className="h-[14px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-[12px] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)]"
                      style={{
                        clipPath: 'polygon(0% 0%, 100% 0%, 96% 100%, 4% 100%)',
                      }}
                    />
                    {/* Logo notch */}
                    <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-10 h-1.5 bg-gray-600 rounded-full opacity-60" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
