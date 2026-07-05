import React from 'react';
import { ArrowRight, Lock, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

const included = [
  'Auditor Comercial com IA',
  'Prompt Mestre de Diagnóstico',
  'Protocolo de Correção de Calls',
  'Biblioteca de Perguntas de Alto Impacto',
  'Biblioteca de Objeções',
  'Guia de Aplicação no WhatsApp e Call',
  'Atualizações futuras inclusas',
  'Garantia incondicional de 7 dias',
];

export function Offer() {
  return (
    <section
      id="oferta"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn>
          <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

            {/* Ribbon */}
            <div className="absolute top-6 right-[-40px] bg-primary text-primary-foreground text-[11px] font-bold px-12 py-1.5 rotate-45 shadow-sm tracking-wider">
              ACESSO ESPECIAL
            </div>

            {/* Value block */}
            <FadeIn delay={0.05}>
              <div className="mb-10 p-6 rounded-2xl bg-muted/50 border border-border text-center">
                <p className="text-base font-semibold text-foreground mb-2">
                  Você não está comprando informação. Está comprando clareza comercial.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  Uma única conversa melhor conduzida pode recuperar o investimento. O objetivo do
                  Destravador é fazer você parar de vender por tentativa e erro e começar a
                  corrigir suas abordagens com base em diagnóstico.
                </p>
              </div>
            </FadeIn>

            {/* What's included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="flex flex-col items-center justify-center mb-10 text-center">
              <span className="text-muted-foreground line-through text-lg mb-1">
                De R$ 297,00
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-medium text-foreground/70">12x de</span>
                <span className="text-6xl font-extrabold text-foreground tracking-tighter">
                  R$&nbsp;9,74
                </span>
              </div>
              <span className="text-muted-foreground mt-1.5 font-medium">ou R$ 97 à vista</span>
            </div>

            {/* CTA */}
            <div className="flex justify-center mb-6">
              <ButtonCTA href="#" className="w-full sm:w-auto px-12 py-5 text-lg">
                Quero Acessar o Destravador Agora <ArrowRight className="w-5 h-5 ml-2" />
              </ButtonCTA>
            </div>

            {/* Trust microcopy */}
            <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
              Compra segura · Acesso imediato · Garantia de 7 dias
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-muted-foreground pt-4 border-t border-border">
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-primary" /> SSL Seguro
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" /> Pagamento Protegido
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary" /> Acesso Imediato
              </div>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
