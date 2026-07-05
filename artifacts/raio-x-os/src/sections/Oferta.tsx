import React from 'react';
import { ArrowRight, Lock, ShieldCheck, Zap, BrainCircuit, CheckCircle2, MessageCircle } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

const included = [
  { icon: <BrainCircuit className="w-4 h-4 text-primary" />, label: 'Prompt ChatGPT' },
  { icon: <BrainCircuit className="w-4 h-4 text-accent" />, label: 'Prompt Gemini' },
  { icon: <CheckCircle2 className="w-4 h-4 text-blue-400" />, label: 'Framework de auditoria' },
  { icon: <CheckCircle2 className="w-4 h-4 text-cyan-400" />, label: 'Biblioteca de comportamentos comerciais' },
  { icon: <CheckCircle2 className="w-4 h-4 text-primary" />, label: 'Sistema de score' },
  { icon: <CheckCircle2 className="w-4 h-4 text-accent" />, label: 'Modelo de diagnóstico' },
  { icon: <CheckCircle2 className="w-4 h-4 text-green-400" />, label: 'Scripts corrigidos' },
  { icon: <CheckCircle2 className="w-4 h-4 text-yellow-400" />, label: 'Plano de ação por negociação' },
];

export function Oferta() {
  return (
    <section id="oferta" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-primary/3 to-muted/5 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">

        {/* Valor percebido */}
        <FadeIn>
          <div className="bg-card border border-border/40 rounded-2xl p-7 md:p-9">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">O que vale mais:</p>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5 leading-snug">
              Perder mais vendas sem saber o motivo — ou descobrir o erro antes da próxima negociação?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Cada negociação perdida sem diagnóstico pode fazer você repetir o mesmo erro por semanas. O RAIO-X foi criado para encurtar esse ciclo e transformar conversas reais em aprendizado prático.
            </p>
          </div>
        </FadeIn>

        {/* Main offer card */}
        <FadeIn delay={0.1}>
          <div className="relative bg-card border-2 border-primary/30 rounded-3xl p-8 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.4)] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            {/* Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-bold text-primary tracking-wide">
                <Zap className="w-4 h-4" />
                Acesso Inicial
              </div>
            </div>

            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-5 leading-tight">
                Entre hoje no RAIO-X OS e pare de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  vender no escuro.
                </span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Acesse o sistema de auditoria comercial baseada em evidências que mostra onde suas negociações estão travando e entrega um plano claro para corrigir antes da próxima conversa.
              </p>
            </div>

            {/* What's included */}
            <div className="mb-8">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5 text-center">O que está incluso</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {included.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-background/40 border border-border/30 rounded-xl px-4 py-3">
                    {item.icon}
                    <span className="text-sm text-foreground/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatibility badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <div className="flex items-center gap-2 bg-background/60 border border-border/40 rounded-xl px-4 py-2.5">
                <BrainCircuit className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">ChatGPT</span>
              </div>
              <div className="flex items-center gap-2 bg-background/60 border border-border/40 rounded-xl px-4 py-2.5">
                <BrainCircuit className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-foreground">Gemini</span>
              </div>
              <div className="flex items-center gap-2 bg-background/60 border border-border/40 rounded-xl px-4 py-2.5">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-foreground">WhatsApp & Calls</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center mb-4">
              <ButtonCTA href="#" className="w-full sm:w-auto px-12 py-5 text-lg shadow-[0_0_40px_rgba(99,131,255,0.3)]">
                Quero acessar o RAIO-X agora <ArrowRight className="w-5 h-5 ml-2" />
              </ButtonCTA>
            </div>

            <p className="text-center text-sm text-muted-foreground mb-8 font-medium">
              Acesso imediato após confirmação.
            </p>

            <div className="flex flex-wrap justify-center gap-5 text-sm font-medium text-muted-foreground pt-6 border-t border-border/40">
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-primary/60" /> Compra Segura
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary/60" /> Garantia de 7 dias
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary/60" /> Acesso Imediato
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
