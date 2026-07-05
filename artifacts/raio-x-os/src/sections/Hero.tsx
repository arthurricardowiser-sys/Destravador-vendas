import React, { useEffect, useState } from 'react';
import { ArrowRight, Target, Zap, TrendingUp, AlertTriangle, CheckCircle2, ChevronRight, FileText, Dumbbell, BarChart3, Clock, Plus, History, Crosshair, ChevronDown, User } from 'lucide-react';
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
      <div className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`} style={{ width: `${w}%` }} />
    </div>
  );
}

const sidebarItems = [
  { icon: <Plus className="w-3.5 h-3.5" />, label: 'Nova Auditoria', active: false, highlight: true },
  { icon: <Crosshair className="w-3.5 h-3.5" />, label: 'Diagnósticos', active: true },
  { icon: <History className="w-3.5 h-3.5" />, label: 'Histórico', active: false },
  { icon: <FileText className="w-3.5 h-3.5" />, label: 'Scripts', active: false },
  { icon: <TrendingUp className="w-3.5 h-3.5" />, label: 'Plano de Ação', active: false },
];

const recentAudits = [
  { label: 'Negociação WhatsApp #41', score: 32, color: 'text-red-400' },
  { label: 'Call Zoom 2h — Lead frio', score: 58, color: 'text-yellow-400' },
  { label: 'E-mail follow-up D+3', score: 71, color: 'text-green-400' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute left-1/4 top-1/3 w-[600px] h-[600px] rounded-full bg-primary/10 opacity-40 blur-[160px] -z-10" />
      <div className="absolute right-1/4 top-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 opacity-30 blur-[130px] -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* LEFT COPY */}
          <div className="flex flex-col gap-6">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-semibold text-primary tracking-widest uppercase w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
                Auditoria Comercial Baseada em Evidências
              </div>
            </FadeIn>

            <FadeIn delay={0.07}>
              <p className="text-sm md:text-base text-red-400/90 font-semibold leading-snug max-w-lg">
                Cada negociação perdida sem diagnóstico aumenta as chances de você repetir exatamente o mesmo erro na próxima venda.
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <h1 className="text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold tracking-tight leading-[1.1] text-foreground">
                Nunca mais termine uma negociação sem saber exatamente{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent">
                  por que ela foi perdida.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.19}>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                O RAIO-X OS aplica uma <span className="text-foreground font-semibold">Auditoria Comercial Baseada em Evidências</span> para mostrar onde sua conversa começou a perder força, qual comportamento travou a venda e o que você deve corrigir antes da próxima negociação.
              </p>
            </FadeIn>

            <FadeIn delay={0.26}>
              <div className="flex flex-col sm:flex-row gap-3">
                <ButtonCTA href="#oferta" className="px-7 py-4 text-base w-full sm:w-auto">
                  Quero descobrir meus erros <ArrowRight className="w-5 h-5 ml-1.5" />
                </ButtonCTA>
                <ButtonCTA href="#como-funciona" variant="ghost" className="w-full sm:w-auto">
                  Ver como funciona <ChevronRight className="w-4 h-4 ml-1" />
                </ButtonCTA>
              </div>
            </FadeIn>

            <FadeIn delay={0.33}>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground pt-1">
                {['WhatsApp & ligações', 'Causa raiz identificada', 'Script corrigido', 'Plano de ação'].map(item => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Full SaaS App Mockup */}
          <FadeIn delay={0.42} className="w-full">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 to-accent/10 rounded-[40px] blur-3xl opacity-60 -z-10" />

              {/* Laptop frame */}
              <div className="relative">
                {/* Screen */}
                <div className="bg-[#07091a] border-2 border-[#1a2240] rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.7),0_0_40px_rgba(99,131,255,0.07)]">

                  {/* Browser chrome */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-[#1a2240] bg-[#050812]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex items-center gap-2 bg-[#0d1228] border border-[#1a2240] rounded px-3 py-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      <span className="text-[9px] font-mono text-muted-foreground">app.raioxos.com / diagnosticos</span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5">
                      <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                      Live
                    </div>
                  </div>

                  {/* App layout: sidebar + main */}
                  <div className="flex h-[340px]">

                    {/* Sidebar */}
                    <div className="w-[130px] flex-shrink-0 border-r border-[#1a2240] bg-[#050812] flex flex-col">
                      {/* Logo */}
                      <div className="flex items-center gap-2 px-3 py-3 border-b border-[#1a2240]">
                        <div className="w-5 h-5 rounded bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                          <Crosshair className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-[10px] font-black tracking-widest text-foreground">RAIO-X</span>
                      </div>

                      {/* Nav items */}
                      <nav className="flex-1 px-2 py-2 space-y-0.5">
                        {sidebarItems.map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[9px] font-semibold cursor-default transition-colors ${
                              item.highlight
                                ? 'text-primary bg-primary/10 border border-primary/20'
                                : item.active
                                ? 'text-foreground bg-white/5 border border-white/5'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            {item.icon}
                            {item.label}
                          </div>
                        ))}
                      </nav>

                      {/* User */}
                      <div className="px-2 py-2 border-t border-[#1a2240]">
                        <div className="flex items-center gap-2 px-2 py-1.5">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <User className="w-3 h-3 text-primary" />
                          </div>
                          <div>
                            <p className="text-[8px] font-bold text-foreground leading-none">Você</p>
                            <p className="text-[7px] text-muted-foreground">Pro</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 overflow-hidden flex flex-col">
                      {/* Top bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a2240] bg-[#07091a]">
                        <div>
                          <p className="text-[10px] font-bold text-foreground">Auditoria #0042</p>
                          <p className="text-[8px] text-muted-foreground">WhatsApp · Lead quente · Hoje</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 bg-red-500/10 border border-red-500/20 rounded-lg px-2 py-1">
                            <AlertTriangle className="w-2.5 h-2.5 text-red-400" />
                            <span className="text-[9px] font-bold text-red-400">Score baixo</span>
                          </div>
                        </div>
                      </div>

                      {/* Scrollable content */}
                      <div className="flex-1 overflow-auto p-3 space-y-2.5">

                        {/* Score + mini bars */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-[#0a0e22] border border-[#1a2240] rounded-xl p-2.5 flex flex-col items-center">
                            <BarChart3 className="w-3.5 h-3.5 text-primary mb-1" />
                            <p className="text-[8px] text-muted-foreground mb-0.5">Score</p>
                            <p className="text-xl font-black text-foreground">32</p>
                            <p className="text-[8px] text-muted-foreground">/100</p>
                            <div className="mt-1.5 w-full">
                              <AnimatedBar value={32} delay={900} color="from-red-500 to-orange-400" />
                            </div>
                          </div>
                          <div className="col-span-2 bg-[#0a0e22] border border-[#1a2240] rounded-xl p-2.5">
                            <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Análise</p>
                            {[
                              { label: 'Diagnóstico', val: 20, color: 'from-red-500 to-red-400' },
                              { label: 'Objeção', val: 38, color: 'from-yellow-500 to-orange-400' },
                              { label: 'Autoridade', val: 15, color: 'from-red-500 to-red-400' },
                              { label: 'Fechamento', val: 50, color: 'from-primary to-accent' },
                            ].map((item, i) => (
                              <div key={i} className="mb-1">
                                <div className="flex justify-between text-[8px] mb-0.5">
                                  <span className="text-muted-foreground">{item.label}</span>
                                  <span className="text-foreground font-bold">{item.val}%</span>
                                </div>
                                <AnimatedBar value={item.val} delay={900 + i * 120} color={item.color} />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Causa raiz */}
                        <div className="bg-[#0a0e22] border border-red-500/25 rounded-xl p-2.5 flex items-start gap-2">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[8px] font-bold text-red-400 uppercase tracking-wider mb-0.5">Causa Raiz</p>
                            <p className="text-[10px] text-foreground/80 leading-snug">Solução apresentada antes de mapear a dor. Lead sem urgência para decidir.</p>
                          </div>
                        </div>

                        {/* Erro + Script lado a lado */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-[#0a0e22] border border-orange-500/20 rounded-xl p-2.5">
                            <div className="flex items-center gap-1.5 mb-1">
                              <Zap className="w-3 h-3 text-orange-400" />
                              <p className="text-[8px] font-bold text-orange-400 uppercase tracking-wider">Erro Crítico</p>
                            </div>
                            <p className="text-[9px] text-muted-foreground leading-snug">Pergunta de implicação ausente no diagnóstico.</p>
                          </div>
                          <div className="bg-[#0a0e22] border border-accent/20 rounded-xl p-2.5">
                            <div className="flex items-center gap-1.5 mb-1">
                              <FileText className="w-3 h-3 text-accent" />
                              <p className="text-[8px] font-bold text-accent uppercase tracking-wider">Script Corrigido</p>
                            </div>
                            <p className="text-[9px] text-muted-foreground italic leading-snug">"Quais são as consequências se isso não mudar?"</p>
                          </div>
                        </div>

                        {/* Próxima missão */}
                        <div className="bg-[#0a0e22] border border-primary/20 rounded-xl p-2.5 flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Dumbbell className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <div>
                            <p className="text-[8px] font-bold text-primary uppercase tracking-wider mb-0.5">Próxima Missão</p>
                            <p className="text-[10px] text-foreground/80">Praticar perguntas de implicação antes de apresentar preço.</p>
                          </div>
                        </div>

                        {/* Recent audits */}
                        <div className="bg-[#0a0e22] border border-[#1a2240] rounded-xl p-2.5">
                          <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Histórico recente</p>
                          <div className="space-y-1">
                            {recentAudits.map((a, i) => (
                              <div key={i} className="flex items-center justify-between text-[9px]">
                                <span className="text-muted-foreground truncate">{a.label}</span>
                                <span className={`font-black flex-shrink-0 ml-2 ${a.color}`}>{a.score}</span>
                              </div>
                            ))}
                          </div>
                        </div>
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
