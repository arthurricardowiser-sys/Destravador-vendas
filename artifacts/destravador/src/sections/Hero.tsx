import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, AlertTriangle, Lightbulb, TrendingUp, BadgeAlert } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

/* ── Animated progress bar inside the mockup ── */
function ProgressBar() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(100), 400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-[2000ms] ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:28px_28px]" />
      {/* Glows */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 opacity-60 blur-[140px]" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-accent/8 opacity-40 blur-[110px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: copy ── */}
          <div className="flex flex-col gap-7">

            {/* Authority badge */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/6 px-4 py-2 text-[11px] font-semibold text-primary tracking-wide w-fit max-w-sm leading-snug">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 animate-pulse" />
                Baseado em um processo de auditoria comercial utilizado em uma operação com mais de R$&nbsp;50&nbsp;milhões em vendas acumuladas.
              </div>
            </FadeIn>

            {/* H1 */}
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.1] text-foreground">
                Nunca mais termine uma call{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  sem saber por que perdeu a venda.
                </span>
              </h1>
            </FadeIn>

            {/* Subheadline */}
            <FadeIn delay={0.2}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Cole qualquer conversa. O Auditor Comercial IA identifica onde você perdeu o
                cliente, qual erro cometeu e qual pergunta poderia ter mudado o rumo da negociação.
              </p>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-4">
                <ButtonCTA
                  href="#oferta"
                  aria-label="Quero auditar minha próxima conversa"
                  className="text-base md:text-lg px-8 py-4 w-full sm:w-auto"
                >
                  Quero Auditar Minha Próxima Conversa <ArrowRight className="w-5 h-5 ml-1" />
                </ButtonCTA>
                <div className="flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-5 text-sm text-muted-foreground">
                  {['Funciona para calls e WhatsApp', 'Sem instalação', 'Diagnóstico prático em poucos minutos'].map((item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT: laptop dashboard mockup ── */}
          <FadeIn delay={0.45} className="w-full">
            <div className="relative flex justify-center lg:justify-end">

              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-[36px] blur-3xl opacity-50 -z-10" />

              {/* Laptop wrapper */}
              <div className="w-full max-w-[560px]" style={{ perspective: '1200px' }}>
                <div
                  className="relative"
                  style={{ transform: 'rotateX(3deg) rotateY(-3deg)', transformStyle: 'preserve-3d' }}
                >
                  {/* Screen bezel */}
                  <div className="relative rounded-[20px] bg-gray-900 p-[10px] shadow-[0_40px_80px_-10px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)] border border-gray-800">

                    {/* Camera */}
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-700" />

                    {/* Screen */}
                    <div className="rounded-[11px] overflow-hidden bg-background border border-gray-800/40">

                      {/* Window chrome */}
                      <div className="h-9 border-b border-border/60 bg-muted/40 flex items-center px-4 gap-2 flex-shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/90" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/90" />
                        <span className="ml-3 text-[11px] text-muted-foreground font-mono tracking-tight flex-1 font-semibold">
                          AUDITORIA COMERCIAL IA
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 rounded-full px-2 py-0.5">
                          <BadgeAlert className="w-3 h-3" />
                          Erro crítico encontrado
                        </span>
                      </div>

                      {/* Dashboard content */}
                      <div className="p-4 space-y-3 bg-gradient-to-br from-background to-muted/10">

                        {/* Status + progress */}
                        <div className="rounded-xl border border-border bg-card p-3 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-muted-foreground font-mono">Conversa enviada...</span>
                            <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" /> Diagnóstico concluído
                            </span>
                          </div>
                          <ProgressBar />
                        </div>

                        {/* Score */}
                        <div className="rounded-xl border border-border bg-card p-3 flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">Score da Call</p>
                            <p className="text-2xl font-extrabold text-foreground leading-none">
                              38<span className="text-base font-medium text-muted-foreground">/100</span>
                            </p>
                          </div>
                          {/* Mini score arc */}
                          <div className="relative w-12 h-12">
                            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                              <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="3" className="text-muted/30" />
                              <circle cx="18" cy="18" r="15.9" fill="none" stroke="currentColor" strokeWidth="3"
                                className="text-destructive/70"
                                strokeDasharray={`${38} ${100}`}
                                strokeLinecap="round"
                              />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-destructive">38</span>
                          </div>
                        </div>

                        {/* Critical error */}
                        <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-3 flex items-start gap-2.5">
                          <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-orange-500">Erro mais crítico</p>
                            <p className="text-[11px] text-foreground/80 leading-snug">
                              Você apresentou a solução antes de descobrir a prioridade real do cliente.
                            </p>
                            <p className="text-[10px] text-muted-foreground italic">
                              Isso fez o cliente responder: "vou pensar."
                            </p>
                          </div>
                        </div>

                        {/* Suggested question */}
                        <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 flex items-start gap-2.5">
                          <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <div className="space-y-0.5">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-primary">Pergunta que faltou</p>
                            <p className="text-[11px] text-foreground/80 italic leading-snug">
                              "O que faria essa decisão fazer sentido para você hoje?"
                            </p>
                          </div>
                        </div>

                        {/* Recovery chance */}
                        <div className="rounded-xl border border-border bg-card p-3 flex items-center justify-between">
                          <span className="text-[10px] text-muted-foreground font-mono">Chance de recuperação</span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5">
                            <TrendingUp className="w-3 h-3" /> Alta
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Laptop hinge + base */}
                  <div className="relative mx-auto" style={{ width: '94%' }}>
                    <div className="h-[6px] bg-gray-800 rounded-b-sm shadow-[0_2px_4px_rgba(0,0,0,0.4)] border-b border-gray-700" />
                    <div
                      className="h-[14px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-[12px] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)]"
                      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 96% 100%, 4% 100%)' }}
                    />
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
