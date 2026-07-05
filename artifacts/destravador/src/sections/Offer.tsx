import React from 'react';
import { ArrowRight, Lock, ShieldCheck, Zap } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

export function Offer() {
  return (
    <section id="oferta" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn>
          <div className="bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Ribbon */}
            <div className="absolute top-6 right-[-40px] bg-primary text-primary-foreground text-xs font-bold px-12 py-1 rotate-45 shadow-sm">
              OFERTA ESPECIAL
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Invista no seu diagnóstico comercial
              </h2>
              <p className="text-lg text-muted-foreground">
                Uma única venda recuperada já paga esse investimento dezenas de vezes.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center mb-10">
              <span className="text-muted-foreground line-through text-xl mb-2">De R$ 297,00</span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-medium">12x</span>
                <span className="text-6xl font-extrabold text-foreground tracking-tighter">R$ 9,74</span>
              </div>
              <span className="text-muted-foreground mt-2 font-medium">ou R$ 97 à vista</span>
            </div>

            <div className="flex justify-center mb-8">
              <ButtonCTA className="w-full sm:w-auto px-12 py-5 text-lg" onClick={() => window.location.href = "#"}>
                Quero Destravar Minhas Vendas Agora <ArrowRight className="w-5 h-5 ml-2" />
              </ButtonCTA>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-muted-foreground">
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

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm font-semibold text-destructive animate-pulse">
                Preço de lançamento — pode aumentar a qualquer momento
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
