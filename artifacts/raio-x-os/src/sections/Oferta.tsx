import React from 'react';
import { ArrowRight, Lock, ShieldCheck, Zap, BrainCircuit, CheckCircle2, MessageCircle } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

const oQueLeva = [
  'Acesso ao sistema RAIO-X OS',
  'Prompt de auditoria para ChatGPT',
  'Prompt de auditoria para Gemini',
  'Framework de Auditoria Comercial Baseada em Evidências',
  'Biblioteca de Erros Comerciais',
  'Modelo de Score da Negociação',
  'Diagnóstico de Causa Raiz',
  'Modelo de Script Corrigido',
  'Plano de Ação para a Próxima Conversa',
  'Modelo para transformar cada negociação em treinamento',
];

const comoUsa = [
  { step: '01', desc: 'Escolha uma conversa real.' },
  { step: '02', desc: 'Cole no ChatGPT ou Gemini usando o prompt RAIO-X.' },
  { step: '03', desc: 'Receba diagnóstico, correção e próxima missão.' },
  { step: '04', desc: 'Aplique o aprendizado na próxima negociação.' },
];

const imagineBenefits = [
  'Onde você perdeu autoridade',
  'Onde criou resistência sem perceber',
  'Onde deveria ter aprofundado',
  'Onde deveria ter permanecido em silêncio',
  'O que falar diferente na próxima conversa',
  'Qual habilidade treinar primeiro',
  'Como transformar aquela perda em aprendizado prático',
];

export function Oferta() {
  return (
    <section id="oferta" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-primary/3 to-muted/5 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-7">

        {/* Imagine block */}
        <FadeIn>
          <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-5">Imagine revisar sua última conversa e descobrir:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {imagineBenefits.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <p className="text-sm text-foreground/80 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Main offer card */}
        <FadeIn delay={0.08}>
          <div className="relative bg-card border-2 border-primary/30 rounded-3xl p-7 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.4)] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-bold text-primary tracking-wide">
                <Zap className="w-4 h-4" />
                Acesso Inicial — RAIO-X OS
              </div>
            </div>

            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-5 leading-tight">
                Descubra o erro que pode estar fazendo você perder vendas{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  antes mesmo de apresentar sua oferta.
                </span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Com o RAIO-X OS, você revisa qualquer negociação em poucos minutos e entende exatamente onde perdeu autoridade, criou resistência, deixou de aprofundar, quebrou o silêncio ou conduziu mal a decisão.
              </p>
            </div>

            {/* O que você leva hoje */}
            <div className="mb-8">
              <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-5">O que você leva hoje:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {oQueLeva.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-background/40 border border-border/20 rounded-xl px-4 py-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-sm text-foreground/85 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Como você usa */}
            <div className="mb-8">
              <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-5">Como você usa:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {comoUsa.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-background/40 border border-border/20 rounded-xl px-4 py-4">
                    <span className="text-xs font-black text-primary/50 tracking-widest mt-0.5 flex-shrink-0">{item.step}</span>
                    <p className="text-sm text-foreground/80 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Value & anchor phrases */}
            <div className="bg-primary/5 border border-primary/15 rounded-2xl px-6 py-5 mb-8 space-y-3">
              <p className="text-sm font-medium text-foreground/85 leading-relaxed">
                Você não está comprando um prompt. Está acessando um sistema para{' '}
                <span className="text-primary font-bold">parar de perder vendas sem diagnóstico.</span>
              </p>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Uma única venda perdida sem clareza pode custar mais caro do que o acesso ao RAIO-X."
              </p>
            </div>

            {/* Compatibility */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
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
              <ButtonCTA href="#" className="w-full sm:w-auto px-10 py-5 text-lg shadow-[0_0_40px_rgba(99,131,255,0.3)]">
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
