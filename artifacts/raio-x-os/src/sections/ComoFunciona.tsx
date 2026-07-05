import React from 'react';
import { ClipboardPaste, ScanLine, Lightbulb, ArrowRight, MessageSquare, FileBarChart2 } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { SectionCTA } from '@/components/SectionCTA';

const steps = [
  {
    number: '01',
    icon: <ClipboardPaste className="w-7 h-7 text-primary" />,
    title: 'Cole a conversa ou transcrição',
    desc: 'Pode ser WhatsApp, ligação transcrita, Meet, Zoom, e-mail ou chat. Sem formatação, sem preparo — só a conversa real.',
    color: 'border-primary/30 bg-primary/5',
    glow: 'from-primary/20 to-transparent',
  },
  {
    number: '02',
    icon: <ScanLine className="w-7 h-7 text-accent" />,
    title: 'O RAIO-X audita a negociação',
    desc: 'A metodologia identifica evidências, padrões, causa raiz e pontos de perda de força ao longo de toda a conversa.',
    color: 'border-accent/30 bg-accent/5',
    glow: 'from-accent/20 to-transparent',
  },
  {
    number: '03',
    icon: <Lightbulb className="w-7 h-7 text-green-400" />,
    title: 'Você recebe clareza para agir',
    desc: 'Diagnóstico, script corrigido, plano de ação e uma missão para a próxima negociação — tudo em linguagem direta.',
    color: 'border-green-500/30 bg-green-500/5',
    glow: 'from-green-500/20 to-transparent',
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-transparent to-muted/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-4 py-1.5 text-[11px] font-bold text-muted-foreground tracking-widest uppercase mb-5">
              Como Funciona
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Como transformar uma conversa perdida em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                treinamento para a próxima venda
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-5 mb-14">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className={`flex flex-col lg:flex-row gap-6 items-start bg-card border ${step.color} rounded-2xl p-7 relative overflow-hidden group hover:shadow-lg hover:shadow-black/20 transition-all duration-300`}>
                <div className={`absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r ${step.glow} opacity-50 pointer-events-none`} />
                <div className="flex items-start gap-5 lg:w-16 flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-background/80 border border-border/40 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                </div>
                <div className="relative z-10 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-black text-muted-foreground/50 tracking-widest">{step.number}</span>
                    <h3 className="text-base md:text-lg font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Flow mockup */}
        <FadeIn delay={0.4}>
          <div className="bg-card border border-border/40 rounded-2xl p-6 md:p-8">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center mb-7">Fluxo visual</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">

              <div className="bg-background/60 border border-primary/20 rounded-xl p-4 flex-1 max-w-xs">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-xs font-bold text-primary">Conversa colada</p>
                </div>
                <div className="space-y-1.5">
                  {['> Olá, vi sua proposta...', '> Qual o investimento?', '> Deixa eu pensar...'].map((msg, i) => (
                    <div key={i} className={`text-[10px] font-mono rounded px-2 py-1 ${i % 2 === 0 ? 'bg-primary/8 text-primary/70 mr-4' : 'bg-muted text-muted-foreground ml-4'}`}>
                      {msg}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-1 rotate-90 md:rotate-0">
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
                <span className="text-[9px] text-muted-foreground uppercase tracking-wider font-bold">Auditoria</span>
              </div>

              <div className="bg-background/60 border border-accent/20 rounded-xl p-4 flex-1 max-w-xs">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                    <ScanLine className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <p className="text-xs font-bold text-accent">Processando</p>
                </div>
                <div className="space-y-2">
                  {['Mapeando etapas...', 'Identificando padrões...', 'Calculando score...'].map((msg, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                      <span className="text-[10px] text-muted-foreground font-mono">{msg}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-1 rotate-90 md:rotate-0">
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
                <span className="text-[9px] text-muted-foreground uppercase tracking-wider font-bold">Resultado</span>
              </div>

              <div className="bg-background/60 border border-green-500/20 rounded-xl p-4 flex-1 max-w-xs">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <FileBarChart2 className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <p className="text-xs font-bold text-green-400">Clareza para agir</p>
                </div>
                <div className="space-y-1.5">
                  {[
                    { label: 'Diagnóstico', val: 'Completo', color: 'text-green-400' },
                    { label: 'Script', val: 'Corrigido', color: 'text-accent' },
                    { label: 'Plano', val: '3 ações', color: 'text-primary' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-[10px]">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className={`font-bold ${item.color}`}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <SectionCTA label="Começar meu diagnóstico" />
      </div>
    </section>
  );
}
