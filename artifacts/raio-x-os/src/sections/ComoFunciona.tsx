import React from 'react';
import { ClipboardPaste, ScanLine, FileBarChart2 } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const steps = [
  {
    number: '01',
    icon: <ClipboardPaste className="w-7 h-7 text-primary" />,
    title: 'Cole a conversa ou transcrição',
    desc: 'Copie a conversa do WhatsApp, a transcrição da ligação ou o e-mail. Cole no sistema. Não precisa formatar nada.',
    color: 'border-primary/30 bg-primary/5',
    glow: 'from-primary/20 to-transparent',
  },
  {
    number: '02',
    icon: <ScanLine className="w-7 h-7 text-accent" />,
    title: 'O RAIO-X audita a negociação',
    desc: 'O sistema analisa cada etapa da conversa com base em lógica real de auditoria comercial — não em respostas genéricas.',
    color: 'border-accent/30 bg-accent/5',
    glow: 'from-accent/20 to-transparent',
  },
  {
    number: '03',
    icon: <FileBarChart2 className="w-7 h-7 text-green-400" />,
    title: 'Você recebe diagnóstico, causa raiz e plano de ação',
    desc: 'Em minutos você entende onde a negociação saiu do controle, qual foi o erro crítico e o que fazer diferente na próxima conversa.',
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
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-4 py-1.5 text-[11px] font-bold text-muted-foreground tracking-widest uppercase mb-5">
              Como Funciona
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Três passos. Diagnóstico completo.
            </h2>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-8 top-16 bottom-16 w-px bg-gradient-to-b from-primary/30 via-accent/30 to-green-500/30 hidden lg:block" style={{ left: '2rem' }} />

          <div className="space-y-6">
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
        </div>

      </div>
    </section>
  );
}
