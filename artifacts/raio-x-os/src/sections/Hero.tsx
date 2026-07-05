import React, { useEffect, useState } from 'react';
import { ArrowRight, Target, Zap, TrendingUp, AlertTriangle, CheckCircle2, ChevronRight, FileText, Dumbbell, BarChart3 } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

function AnimatedBar({ value, delay, color = 'from-primary to-accent' }: { value: number; delay: number; color?: string }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setW(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return (
    <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-7">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold text-primary tracking-widest uppercase w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
                Sistema de Auditoria Comercial
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold tracking-tight leading-[1.08] text-foreground">
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
                <ButtonCTA href="#oferta" className="px-8 py-4 text-base md:text-lg w-full sm:w-auto">
                  Quero testar o RAIO-X <ArrowRight className="w-5 h-5 ml-1.5" />
                </ButtonCTA>
                <ButtonCTA href="#como-funciona" variant="ghost" className="w-full sm:w-auto">
                  Ver como funciona <ChevronRight className="w-4 h-4 ml-1" />
                </ButtonCTA>
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground pt-1">
                {['WhatsApp & ligações', 'Causa raiz identificada', 'Script corrigido', 'Plano de ação imediato'].map(item => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Laptop/notebook mockup */}
          <FadeIn delay={0.4} className="w-full">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 to-accent/10 rounded-[40px] blur-3xl opacity-60 -z-10" />

              {/* Laptop frame */}
              <div className="relative">
                {/* Screen */}
                <div className="relative bg-[#0a0f1e] border-2 border-[#1e2a45] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6),0_0_40px_rgba(99,131,255,0.08)]">
                  {/* Browser chrome */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1e2a45] bg-[#07091a]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex items-center gap-2 bg-[#0f1629] border border-[#1e2a45] rounded-md px-3 py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      <span className="text-[10px] font-mono text-muted-foreground">raio-x.os / auditoria</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Live
                    </div>
                  </div>

                  {/* App header */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#1e2a45]/60 bg-[#080d1e]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <Target className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-xs font-black tracking-widest text-foreground">RAIO-X OS</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground font-mono">Auditoria #0042</div>
                  </div>

                  <div className="p-4 space-y-3">
                    {/* Score row */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-[#070c1c] border border-[#1e2a45]/60 rounded-xl p-3.5 flex flex-col items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-primary mb-1.5" />
                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">Score</p>
                        <p className="text-2xl font-black text-foreground">38</p>
                        <p className="text-[9px] text-muted-foreground">/100</p>
                        <div className="mt-2 w-full">
                          <AnimatedBar value={38} delay={900} color="from-red-500 to-orange-400" />
                        </div>
                      </div>

                      <div className="col-span-2 bg-[#070c1c] border border-[#1e2a45]/60 rounded-xl p-3.5">
                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-2.5">Análise da Negociação</p>
                        <div className="space-y-2">
                          {[
                            { label: 'Diagnóstico inicial', val: 22, color: 'from-red-500 to-red-400' },
                            { label: 'Objeção tratada', val: 40, color: 'from-yellow-500 to-yellow-400' },
                            { label: 'Controle de frame', val: 18, color: 'from-red-500 to-orange-400' },
                            { label: 'Fechamento', val: 55, color: 'from-primary to-accent' },
                          ].map((item, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-[9px] mb-1">
                                <span className="text-muted-foreground">{item.label}</span>
                                <span className="text-foreground font-semibold">{item.val}%</span>
                              </div>
                              <AnimatedBar value={item.val} delay={900 + i * 150} color={item.color} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Causa raiz */}
                    <div className="bg-[#070c1c] border border-red-500/25 rounded-xl p-3.5 flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[9px] font-bold text-red-400 uppercase tracking-wider mb-1">Causa Raiz</p>
                        <p className="text-[11px] text-foreground/75 leading-snug">Solução apresentada antes de mapear a dor. Cliente sem urgência suficiente para decidir.</p>
                      </div>
                    </div>

                    {/* 4-col row */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-[#070c1c] border border-orange-500/20 rounded-xl p-3">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <Zap className="w-3 h-3 text-orange-400" />
                          <p className="text-[9px] font-bold text-orange-400 uppercase tracking-wider">Erro Crítico</p>
                        </div>
                        <p className="text-[10px] text-muted-foreground leading-snug">Pergunta de implicação ausente no diagnóstico.</p>
                      </div>

                      <div className="bg-[#070c1c] border border-yellow-500/20 rounded-xl p-3">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <AlertTriangle className="w-3 h-3 text-yellow-400" />
                          <p className="text-[9px] font-bold text-yellow-400 uppercase tracking-wider">Protocolo Violado</p>
                        </div>
                        <p className="text-[10px] text-muted-foreground leading-snug">Frame de autoridade não estabelecido na abertura.</p>
                      </div>
                    </div>

                    {/* Script + Plano de ação */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-[#070c1c] border border-accent/20 rounded-xl p-3">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <FileText className="w-3 h-3 text-accent" />
                          <p className="text-[9px] font-bold text-accent uppercase tracking-wider">Script Corrigido</p>
                        </div>
                        <p className="text-[10px] text-muted-foreground leading-snug italic">"Antes do preço: quais são as consequências se isso não for resolvido agora?"</p>
                      </div>

                      <div className="bg-[#070c1c] border border-primary/25 rounded-xl p-3">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <TrendingUp className="w-3 h-3 text-primary" />
                          <p className="text-[9px] font-bold text-primary uppercase tracking-wider">Plano de Ação</p>
                        </div>
                        <div className="space-y-1">
                          {['Mapear dor antes da solução', 'Criar urgência com implicação', 'Revelar preço após confirmar dor'].map((s, i) => (
                            <div key={i} className="flex items-start gap-1 text-[9px] text-muted-foreground">
                              <span className="text-primary font-bold">{i + 1}.</span>{s}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Próxima missão */}
                    <div className="bg-[#070c1c] border border-green-500/20 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                        <Dumbbell className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-green-400 uppercase tracking-wider mb-0.5">Próxima Missão</p>
                        <p className="text-[11px] text-foreground/75">Praticar perguntas de consequência antes de apresentar preço.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop base */}
                <div className="relative mx-4">
                  <div className="h-3 bg-gradient-to-b from-[#141c35] to-[#0e1428] rounded-b-sm" />
                  <div className="h-2 bg-gradient-to-b from-[#0e1428] to-[#090e20] rounded-b-xl mx-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
