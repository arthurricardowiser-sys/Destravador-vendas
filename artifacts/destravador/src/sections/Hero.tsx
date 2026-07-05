import React from 'react';
import { Lock, Star, Users, ArrowRight } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Background elegant grid/glow */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-40 blur-[100px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground premium-gradient-text">
            Você não perde vendas no fechamento. Você perde no diagnóstico.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            Use IA para auditar suas conversas comerciais, descobrir onde a venda começou a morrer e receber a pergunta certa para revelar a dor real do cliente.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="flex flex-col items-center gap-6">
          <ButtonCTA href="#oferta" className="text-lg px-10 py-5 w-full sm:w-auto">
            Quero Auditar Minha Próxima Venda <ArrowRight className="w-5 h-5 ml-2" />
          </ButtonCTA>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-primary" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>4.9/5 avaliação</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-accent" />
              <span>2.847 profissionais</span>
            </div>
          </div>
        </FadeIn>

        {/* Mockup area */}
        <FadeIn delay={0.5} className="mt-16 mx-auto max-w-4xl relative">
          <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden glass-card aspect-video flex flex-col">
            {/* Fake window header */}
            <div className="h-10 border-b border-border bg-muted/30 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 text-xs text-muted-foreground font-mono">destravador-ai-diagnostics.app</div>
            </div>
            {/* Fake app content */}
            <div className="flex-1 p-6 flex flex-col md:flex-row gap-6 bg-gradient-to-br from-background to-muted/20">
              <div className="flex-1 space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary text-xs font-bold">IA</div>
                  <div className="bg-card border border-border p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-left">
                    <p className="text-foreground font-semibold mb-1">Análise de Conversa</p>
                    <p className="text-muted-foreground">O cliente perdeu engajamento porque o diagnóstico foi superficial. Ele mencionou "falta de tempo", mas a dor real é "medo de errar na implementação".</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none shadow-sm text-sm text-left max-w-[80%]">
                    <p>Qual pergunta devo fazer agora?</p>
                  </div>
                  <div className="w-8 h-8 rounded bg-foreground/10 flex-shrink-0 flex items-center justify-center text-xs font-bold">VC</div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary text-xs font-bold">IA</div>
                  <div className="bg-card border border-border border-l-4 border-l-primary p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-left w-full">
                    <p className="text-foreground font-medium mb-2">Pergunta recomendada:</p>
                    <p className="text-foreground/80 italic">"Se você tivesse a garantia de que não precisaria alocar tempo da sua equipe para isso, o que mudaria na sua decisão hoje?"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative glow behind mockup */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-50 -z-10"></div>
        </FadeIn>
      </div>
    </section>
  );
}
