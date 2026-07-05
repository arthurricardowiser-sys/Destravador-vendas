import React, { useEffect, useState } from 'react';
import { ArrowRight, Target, Zap, TrendingUp, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

function AnimatedBar({ value, delay }: { value: number; delay: number }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setW(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return (
    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
        style={{ width: `${w}%` }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
      {/* Glows */}
      <div className="absolute left-1/4 top-1/3 w-[600px] h-[600px] rounded-full bg-primary/10 opacity-40 blur-[160px] -z-10" />
      <div className="absolute right-1/4 top-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 opacity-30 blur-[130px] -z-10" />
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[200px] -translate-x-1/2 bg-primary/5 blur-[100px] -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-7">

            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold text-primary tracking-widest uppercase w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
                Sistema de Auditoria Comercial
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold tracking-tight leading-[1.08] text-foreground">
                Nunca mais termine uma negociação sem saber exatamente{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
                  por que ela foi perdida.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                O RAIO-X OS analisa suas conversas de venda e mostra, em poucos minutos, onde a negociação começou a sair do controle — com causa raiz, plano de ação e script corrigido para sua próxima conversa.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="flex flex-col sm:flex-row gap-3">
                <ButtonCTA href="#checkout" className="px-8 py-4 text-base md:text-lg w-full sm:w-auto">
                  Quero testar o RAIO-X <ArrowRight className="w-5 h-5 ml-1.5" />
                </ButtonCTA>
                <ButtonCTA href="#como-funciona" variant="ghost" className="w-full sm:w-auto">
                  Ver como funciona <ChevronRight className="w-4 h-4 ml-1" />
                </ButtonCTA>
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground pt-1">
                {['WhatsApp & ligações', 'Causa raiz identificada', 'Plano de ação imediato', 'Sem backend'].map(item => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Dashboard mockup */}
          <FadeIn delay={0.4} className="w-full">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 to-accent/10 rounded-[40px] blur-3xl opacity-60 -z-10" />

              <div className="relative bg-card border border-border/60 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                {/* Header bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-border/60 bg-muted/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="text-[11px] font-mono font-semibold text-muted-foreground tracking-wider">
                    RAIO-X OS — AUDITORIA ATIVA
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Live
                  </div>
                </div>

                <div className="p-5 space-y-4">

                  {/* Score card */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1 bg-background/60 border border-border/40 rounded-xl p-4 flex flex-col items-center justify-center">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Score</p>
                      <p className="text-3xl font-black text-foreground">32</p>
                      <p className="text-[10px] text-muted-foreground">/100</p>
                      <div className="mt-2 w-full">
                        <AnimatedBar value={32} delay={800} />
                      </div>
                    </div>
                    <div className="col-span-2 bg-background/60 border border-border/40 rounded-xl p-4 space-y-2">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Análise da Negociação</p>
                      {[
                        { label: 'Diagnóstico inicial', val: 20, color: 'from-red-500 to-red-400' },
                        { label: 'Condução da objeção', val: 45, color: 'from-yellow-500 to-yellow-400' },
                        { label: 'Controle de frame', val: 15, color: 'from-red-500 to-red-400' },
                        { label: 'Fechamento', val: 60, color: 'from-primary to-accent' },
                      ].map((item, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-[10px]">
                            <span className="text-muted-foreground">{item.label}</span>
                            <span className="text-foreground font-semibold">{item.val}%</span>
                          </div>
                          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                              style={{ width: `${item.val}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Causa raiz */}
                  <div className="bg-background/60 border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1">Causa Raiz</p>
                      <p className="text-[11px] text-foreground/80 leading-snug">
                        Você apresentou a solução antes de mapear a dor real. O cliente não enxergou urgência suficiente para decidir.
                      </p>
                    </div>
                  </div>

                  {/* Two-col: Erro crítico + Próxima missão */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-background/60 border border-border/40 rounded-xl p-3.5">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-3.5 h-3.5 text-yellow-400" />
                        <p className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Erro Crítico</p>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Pergunta de implicação ausente na fase de diagnóstico.
                      </p>
                    </div>
                    <div className="bg-background/60 border border-primary/20 rounded-xl p-3.5">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-3.5 h-3.5 text-primary" />
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Próxima Missão</p>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Praticar perguntas de consequência antes de apresentar preço.
                      </p>
                    </div>
                  </div>

                  {/* Plano de ação */}
                  <div className="bg-background/60 border border-accent/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-3.5 h-3.5 text-accent" />
                      <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Plano de Ação</p>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        'Mapeie a dor antes de apresentar a solução',
                        'Use perguntas de implicação para criar urgência',
                        'Apresente o preço apenas depois de confirmar o problema',
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                          <span className="text-primary font-bold flex-shrink-0">{i + 1}.</span>
                          {step}
                        </div>
                      ))}
                    </div>
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
