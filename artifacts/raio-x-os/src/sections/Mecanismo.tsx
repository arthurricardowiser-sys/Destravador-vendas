import React from 'react';
import { MessageCircle, Phone, Video, Mail, Cpu, Search, AlertOctagon, Lightbulb, FileCheck, Brain, Dumbbell } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { SectionCTA } from '@/components/SectionCTA';

const canais = [
  { icon: <MessageCircle className="w-4 h-4" />, label: 'WhatsApp' },
  { icon: <Phone className="w-4 h-4" />, label: 'Ligação' },
  { icon: <Video className="w-4 h-4" />, label: 'Google Meet' },
  { icon: <Video className="w-4 h-4" />, label: 'Zoom' },
  { icon: <Mail className="w-4 h-4" />, label: 'E-mail' },
  { icon: <MessageCircle className="w-4 h-4" />, label: 'Chat' },
];

const entregaveis = [
  { icon: <Search className="w-5 h-5 text-primary" />, label: 'Onde o erro começou' },
  { icon: <AlertOctagon className="w-5 h-5 text-orange-400" />, label: 'Comportamento crítico' },
  { icon: <Cpu className="w-5 h-5 text-red-400" />, label: 'Objeção não tratada' },
  { icon: <Lightbulb className="w-5 h-5 text-yellow-400" />, label: 'Parte que perdeu força' },
  { icon: <FileCheck className="w-5 h-5 text-accent" />, label: 'Script que deveria ter sido usado' },
  { icon: <Dumbbell className="w-5 h-5 text-green-400" />, label: 'Habilidade para treinar' },
];

export function Mecanismo() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-5 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-bold text-primary tracking-widest uppercase mb-5">
              <Cpu className="w-3.5 h-3.5" /> Mecanismo Único
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Auditoria Comercial{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Baseada em Evidências
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              O RAIO-X OS transforma qualquer conversa comercial em um diagnóstico estruturado.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12 max-w-3xl mx-auto">
            {[
              'Não é uma IA genérica',
              'Não é mais um curso de vendas',
              'Não é um script pronto',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-card border border-border/40 rounded-xl px-4 py-3">
                <span className="w-5 h-5 rounded-full border border-red-500/40 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-0.5 bg-red-400 rounded-full block" />
                </span>
                <p className="text-xs text-muted-foreground leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn delay={0.15}>
            <div className="bg-card border border-border/50 rounded-2xl p-7 h-full">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-5">Ele analisa</h3>
              <div className="grid grid-cols-2 gap-3">
                {canais.map((canal, i) => (
                  <div key={i} className="flex items-center gap-3 bg-background/60 border border-border/30 rounded-xl px-4 py-3 hover:border-primary/20 transition-colors group">
                    <div className="text-primary group-hover:scale-110 transition-transform">{canal.icon}</div>
                    <span className="text-sm text-foreground/80 font-medium">{canal.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="bg-card border border-primary/20 rounded-2xl p-7 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-5">E entrega</h3>
              <div className="space-y-3">
                {entregaveis.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-background/60 border border-border/30 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-sm text-foreground/80">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <SectionCTA label="Começar minha auditoria" />
      </div>
    </section>
  );
}
