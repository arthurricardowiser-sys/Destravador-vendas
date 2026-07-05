import React from 'react';
import { Search, Zap, AlertCircle, Target } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const causes = [
  {
    icon: <Search className="w-6 h-6 text-primary" />,
    title: 'Perguntas rasas',
    description: 'Você pergunta, mas não aprofunda.',
    bg: 'bg-primary/5 border-primary/20',
    iconBg: 'bg-primary/10',
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    title: 'Solução cedo demais',
    description: 'Você apresenta sua solução antes de entender o que realmente importa.',
    bg: 'bg-orange-50/60 border-orange-200',
    iconBg: 'bg-orange-100',
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-destructive" />,
    title: 'Objeção mal interpretada',
    description: 'Você responde preço quando o problema pode ser insegurança, falta de prioridade ou baixa percepção de valor.',
    bg: 'bg-destructive/5 border-destructive/20',
    iconBg: 'bg-destructive/10',
  },
  {
    icon: <Target className="w-6 h-6 text-purple-500" />,
    title: 'Diagnóstico fraco',
    description: 'Você tenta fechar sem ter criado clareza suficiente na cabeça do cliente.',
    bg: 'bg-purple-50/60 border-purple-200',
    iconBg: 'bg-purple-100',
  },
];

export function CausaReal() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-5 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Você não perde vendas no fechamento.{' '}
              <span className="text-primary">Você perde no diagnóstico.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A maioria dos vendedores tenta melhorar argumentos, respostas para objeções e técnicas
              de fechamento. Mas muitas vendas já morreram antes disso.
            </p>
          </div>
        </FadeIn>

        {/* Narrative */}
        <FadeIn delay={0.1}>
          <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            A venda começa a morrer quando a dor é explorada de forma rasa, a urgência não aparece,
            a prioridade não fica clara e o cliente não se sente compreendido.
          </p>
        </FadeIn>

        {/* 4 cause cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {causes.map((c, i) => (
            <FadeIn key={i} delay={i * 0.09}>
              <div className={`border rounded-2xl p-6 flex items-start gap-4 h-full shadow-sm hover:shadow-md transition-all group ${c.bg}`}>
                <div className={`${c.iconBg} p-3 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform`}>
                  {c.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Impact quote */}
        <FadeIn delay={0.45}>
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <blockquote className="text-base md:text-lg font-semibold text-foreground bg-foreground/3 border border-border rounded-2xl px-8 py-6 leading-relaxed">
              "O 'vou pensar' normalmente não nasce no final da conversa. Ele nasce no momento em
              que o cliente{' '}
              <span className="text-primary">deixou de se sentir compreendido.</span>"
            </blockquote>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
