import React from 'react';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { SectionCTA } from '@/components/SectionCTA';

const casos = [
  {
    title: 'O cliente sumiu depois da proposta',
    antes: '"Eu achei que era preço."',
    depois: 'O diagnóstico mostrou que a proposta veio antes de aprofundar a dor e criar urgência.',
    resultado: 'Na próxima conversa, o vendedor sabe que precisa investigar impacto antes de apresentar solução.',
    color: 'border-red-500/20',
    dot: 'bg-red-400',
  },
  {
    title: 'A call parecia boa, mas não fechou',
    antes: '"Eu senti que ele gostou, mas ficou inseguro."',
    depois: 'A análise mostrou que faltou critério de decisão e próximo passo claro.',
    resultado: 'O vendedor passa a conduzir a decisão com mais objetividade.',
    color: 'border-orange-500/20',
    dot: 'bg-orange-400',
  },
  {
    title: 'O vendedor deu desconto cedo demais',
    antes: '"Eu tentei facilitar para fechar."',
    depois: 'O diagnóstico mostrou desconto prematuro antes de validar valor e compromisso.',
    resultado: 'O vendedor entende quando segurar preço e quando aprofundar percepção de valor.',
    color: 'border-yellow-500/20',
    dot: 'bg-yellow-400',
  },
  {
    title: 'O follow-up virou insistência',
    antes: '"Eu só perguntava se o cliente decidiu."',
    depois: 'A análise mostrou falta de continuidade estratégica.',
    resultado: 'O vendedor passa a retomar a conversa com contexto, valor e próximo passo.',
    color: 'border-primary/20',
    dot: 'bg-primary',
  },
];

const placeholders = [
  { label: 'Print de diagnóstico real', icon: <TrendingUp className="w-5 h-5 text-muted-foreground/50" /> },
  { label: 'Antes e depois de uma negociação', icon: <ArrowRight className="w-5 h-5 text-muted-foreground/50" /> },
  { label: 'Depoimento de usuário', icon: <Clock className="w-5 h-5 text-muted-foreground/50" /> },
];

export function CasosDeUso() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-5 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              O que o RAIO-X ajuda você a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                melhorar na prática
              </span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Mesmo antes de ter dezenas de negociações analisadas, o objetivo é simples: sair de cada conversa com mais clareza do que corrigir.
            </p>
          </div>
        </FadeIn>

        {/* Casos de uso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {casos.map((caso, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className={`border ${caso.color} bg-card rounded-2xl p-6 flex flex-col gap-4 h-full hover:border-primary/25 transition-all duration-300`}>
                <div className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full ${caso.dot} flex-shrink-0 mt-1.5`} />
                  <h3 className="text-sm font-bold text-foreground leading-snug">Antes: {caso.title}</h3>
                </div>

                <div className="bg-muted/25 border border-border/30 rounded-xl p-4 space-y-3">
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Pensamento</p>
                    <p className="text-sm text-muted-foreground italic leading-snug">{caso.antes}</p>
                  </div>
                  <div className="border-t border-border/25 pt-3">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Depois do RAIO-X</p>
                    <p className="text-xs text-foreground/75 leading-relaxed">{caso.depois}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5">Resultado prático</p>
                    <p className="text-xs text-foreground/80 font-medium leading-snug">{caso.resultado}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Disclaimer */}
        <FadeIn delay={0.35}>
          <p className="text-center text-xs text-muted-foreground/60 italic mb-10 max-w-2xl mx-auto leading-relaxed">
            Esses são exemplos de aplicação do sistema. Os resultados individuais dependem da qualidade da conversa, execução do vendedor e aplicação do plano de ação.
          </p>
        </FadeIn>

        {/* Placeholder for real results */}
        <FadeIn delay={0.4}>
          <div className="bg-card border border-border/30 rounded-2xl p-7">
            <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest text-center mb-5">
              Resultados reais — em breve
            </p>
            <p className="text-xs text-muted-foreground/50 text-center mb-6 max-w-xl mx-auto">
              Assim que novas auditorias forem aplicadas, esta área será atualizada com depoimentos, prints e aprendizados reais dos usuários.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {placeholders.map((p, i) => (
                <div key={i} className="border border-dashed border-border/30 rounded-xl p-5 flex flex-col items-center gap-3 opacity-50">
                  {p.icon}
                  <p className="text-xs text-muted-foreground/60 text-center font-medium">{p.label}</p>
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 border border-border/30 rounded-full px-2.5 py-1">
                    Em breve
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <SectionCTA label="Quero transformar minhas conversas em aprendizado" />
      </div>
    </section>
  );
}
