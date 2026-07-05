import React from 'react';
import { FadeIn } from '@/components/FadeIn';
import { BrainCircuit, Target, Lightbulb } from 'lucide-react';

export function Presentation() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-background overflow-hidden relative">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <div className="flex-1 space-y-8 z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm mb-4 border border-primary/30">
              <BrainCircuit className="w-4 h-4" />
              Mentor Comercial de Bolso
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Apresentamos o <br/>
              <span className="text-primary">Destravador de Vendas</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Não é mais um cursinho teórico de vendas. É um Sistema de Diagnóstico Comercial Inteligente alimentado por IA.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-background/10 p-3 rounded-lg h-fit">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Auditoria de Conversas</h4>
                <p className="text-muted-foreground">A IA analisa o que você e o cliente disseram e aponta exatamente onde você perdeu o controle.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-background/10 p-3 rounded-lg h-fit">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Recomendação Tática</h4>
                <p className="text-muted-foreground">Descubra qual pergunta você deveria ter feito para acessar a dor emocional do cliente.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} direction="left" className="flex-1 w-full max-w-md lg:max-w-none z-10">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/20 bg-background/5 p-8 flex flex-col justify-end">
            {/* Abstract Tech Illustration representing AI Mentor */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-spin-slow" style={{ animationDuration: '30s' }}>
                <path fill="#22c55e" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,72.6,41.1C63.8,53.1,51.8,62.6,38.3,70.1C24.8,77.6,9.8,83,-5.7,85.2C-21.2,87.4,-37.2,86.4,-51.1,79.1C-65,71.8,-76.8,58.2,-83.4,42.7C-90,27.2,-91.4,9.8,-88.7,-6.6C-86,-23,-79.2,-38.4,-68.8,-50.6C-58.4,-62.8,-44.4,-71.8,-30.2,-78.5C-16,-85.2, -1,-89.6, 12.8,-87.3C26.6,-85, 40,-76, 44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative z-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-mono text-primary uppercase tracking-wider">Análise Concluída</span>
              </div>
              <p className="text-white font-medium mb-2 text-lg">Erro de Diagnóstico Identificado</p>
              <p className="text-white/70 text-sm mb-4">Você focou nas características do produto na mensagem #4, antes de entender o impacto financeiro do problema atual do cliente.</p>
              <div className="bg-primary/20 text-primary-foreground border border-primary/30 p-3 rounded-lg text-sm">
                <span className="font-bold text-primary block mb-1">Ação Corretiva:</span>
                "Pergunte: Quanto esse problema está custando para a empresa por mês em horas perdidas?"
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
