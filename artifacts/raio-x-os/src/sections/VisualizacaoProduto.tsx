import React from 'react';
import {
  BrainCircuit, BarChart3, BookOpen, AlertOctagon, FileText, Target, ClipboardList, Layers,
  CheckCircle2, ArrowRight, Zap
} from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { SectionCTA } from '@/components/SectionCTA';

const cards = [
  {
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    title: 'Prompt de Auditoria para ChatGPT',
    desc: 'Cole sua conversa e use uma estrutura pronta para receber um diagnóstico comercial completo.',
    benefit: 'Você não começa do zero e não depende de perguntas genéricas.',
    border: 'border-primary/25',
    bg: 'bg-primary/5',
    badgeColor: 'text-primary bg-primary/10 border-primary/20',
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-accent" />,
    title: 'Prompt de Auditoria para Gemini',
    desc: 'Use o mesmo sistema na IA que você já utiliza, com estrutura adaptada para análise de negociações.',
    benefit: 'Você consegue analisar conversas sem depender de plataforma complexa.',
    border: 'border-accent/25',
    bg: 'bg-accent/5',
    badgeColor: 'text-accent bg-accent/10 border-accent/20',
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-400" />,
    title: 'Framework de Auditoria Comercial',
    desc: 'Metodologia para avaliar contexto, diagnóstico, valor, decisão, conversão e continuidade.',
    benefit: 'Você recebe diagnóstico consistente, sem depender de achismos.',
    border: 'border-blue-500/25',
    bg: 'bg-blue-500/5',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-yellow-400" />,
    title: 'Sistema de Score da Negociação',
    desc: 'Visualize onde a conversa perdeu força e quais pontos mais prejudicaram a venda.',
    benefit: 'Você entende rapidamente onde precisa melhorar.',
    border: 'border-yellow-500/25',
    bg: 'bg-yellow-500/5',
    badgeColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-orange-400" />,
    title: 'Biblioteca de Erros Comerciais',
    desc: 'Padrões como diagnóstico superficial, desconto prematuro, ansiedade comercial e perda de controle.',
    benefit: 'Você para de tratar cada venda perdida como um caso isolado.',
    border: 'border-orange-500/25',
    bg: 'bg-orange-500/5',
    badgeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  },
  {
    icon: <FileText className="w-6 h-6 text-cyan-400" />,
    title: 'Script Corrigido',
    desc: 'Veja como a conversa poderia ter sido conduzida de forma mais estratégica.',
    benefit: 'Você sai sabendo exatamente o que falar diferente na próxima negociação.',
    border: 'border-cyan-500/25',
    bg: 'bg-cyan-500/5',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: <Target className="w-6 h-6 text-green-400" />,
    title: 'Plano de Ação',
    desc: 'Receba uma missão clara para aplicar na próxima conversa.',
    benefit: 'Você não recebe apenas análise. Você recebe direção.',
    border: 'border-green-500/25',
    bg: 'bg-green-500/5',
    badgeColor: 'text-green-400 bg-green-500/10 border-green-500/20',
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-rose-400" />,
    title: 'Modelo de Diagnóstico',
    desc: 'Organize causa raiz, erro crítico, momento de perda de força e próxima ação.',
    benefit: 'Cada negociação vira aprendizado prático.',
    border: 'border-rose-500/25',
    bg: 'bg-rose-500/5',
    badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  },
];

export function VisualizacaoProduto() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-primary/3 to-muted/5 pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[400px] bg-primary/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-5 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-bold text-primary tracking-widest uppercase mb-5">
              <Zap className="w-3.5 h-3.5" /> O que você recebe
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Veja exatamente o que você recebe{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                dentro do RAIO-X OS
              </span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Não é uma aula genérica de vendas. É um sistema prático para transformar conversas reais em diagnóstico, correção e plano de ação.
            </p>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className={`border ${card.border} ${card.bg} rounded-2xl p-6 flex flex-col gap-4 h-full hover:border-primary/30 transition-all duration-300 group`}>
                <div className="flex items-start justify-between gap-2">
                  <div className="w-11 h-11 rounded-xl bg-background/60 border border-border/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <div className={`text-[9px] font-black uppercase tracking-widest border rounded-full px-2 py-1 ${card.badgeColor} flex-shrink-0`}>
                    Incluso
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-foreground mb-2 leading-snug">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{card.desc}</p>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground/70 font-medium leading-snug italic">{card.benefit}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Example delivery mockup */}
        <FadeIn delay={0.45}>
          <div className="bg-card border border-border/40 rounded-2xl p-7 md:p-10">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-7 text-center">
              Exemplo de entrega
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: report preview */}
              <div className="bg-background/60 border border-border/30 rounded-xl overflow-hidden">
                {/* Report header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-border/30 bg-[#050812]">
                  <span className="text-xs font-bold text-foreground">Relatório da Auditoria</span>
                  <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-[10px] font-bold text-primary">Score: 72/100</span>
                  </div>
                </div>
                {/* Score bar */}
                <div className="px-5 py-4 border-b border-border/20">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-muted-foreground">Performance geral</span>
                    <span className="text-yellow-400 font-black">72</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-green-400 w-[72%] transition-all" />
                  </div>
                </div>
                {/* Report fields */}
                <div className="divide-y divide-border/20">
                  {[
                    { label: 'Momento de perda de força', value: 'Solução apresentada antes da dor estar clara.', color: 'text-orange-400' },
                    { label: 'Causa raiz', value: 'Diagnóstico superficial.', color: 'text-red-400' },
                    { label: 'Correção sugerida', value: 'Aprofundar impacto antes de apresentar a oferta.', color: 'text-accent' },
                    { label: 'Próxima missão', value: 'Fazer 3 perguntas de consequência antes da proposta.', color: 'text-primary' },
                  ].map((item, i) => (
                    <div key={i} className="px-5 py-3">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                      <p className={`text-xs font-semibold ${item.color} leading-snug`}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: what this means */}
              <div className="flex flex-col justify-center gap-5">
                <h3 className="text-lg font-bold text-foreground leading-snug">
                  Cada auditoria termina com clareza, não com dúvidas.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Não é uma análise genérica. É um relatório estruturado que aponta o comportamento exato que enfraqueceu a venda — e o que fazer diferente na próxima conversa.
                </p>
                <div className="space-y-2.5">
                  {[
                    'Score da negociação em segundos',
                    'Causa raiz identificada com precisão',
                    'Script corrigido para a próxima conversa',
                    'Missão clara para a próxima negociação',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#oferta" className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link">
                  Quero acessar esses materiais <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <SectionCTA label="Quero acessar esses materiais" />
      </div>
    </section>
  );
}
