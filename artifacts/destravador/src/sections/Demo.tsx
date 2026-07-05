import React, { useState } from 'react';
import { MessageCircle, Cpu, Sparkles, ArrowRight } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

const example1 = [
  {
    icon: <MessageCircle className="w-5 h-5 text-foreground/50" />,
    tag: 'O cliente diz (Call)',
    tagColor: 'text-muted-foreground',
    border: 'border-border',
    bg: 'bg-card',
    content: '"Está caro."',
    contentStyle: 'italic text-foreground/70',
  },
  {
    icon: <Cpu className="w-5 h-5 text-orange-500" />,
    tag: 'Auditor identifica',
    tagColor: 'text-orange-500',
    border: 'border-orange-200',
    bg: 'bg-orange-50/60',
    content:
      'Preço não foi a causa principal. O valor não foi conectado à dor e à consequência.',
    contentStyle: 'text-foreground/80',
  },
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    tag: 'Pergunta sugerida',
    tagColor: 'text-primary',
    border: 'border-primary/30',
    bg: 'bg-primary/5',
    content:
      '"Se esse problema continuar por mais seis meses, qual seria o impacto real para você?"',
    contentStyle: 'italic text-foreground/80',
  },
];

const example2 = [
  {
    icon: <MessageCircle className="w-5 h-5 text-foreground/50" />,
    tag: 'O cliente diz (WhatsApp)',
    tagColor: 'text-muted-foreground',
    border: 'border-border',
    bg: 'bg-card',
    content: '"Vou ver certinho e te aviso."',
    contentStyle: 'italic text-foreground/70',
  },
  {
    icon: <Cpu className="w-5 h-5 text-orange-500" />,
    tag: 'Auditor identifica',
    tagColor: 'text-orange-500',
    border: 'border-orange-200',
    bg: 'bg-orange-50/60',
    content:
      'A resposta ficou vaga porque a decisão não foi ancorada em prioridade.',
    contentStyle: 'text-foreground/80',
  },
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    tag: 'Mensagem sugerida',
    tagColor: 'text-primary',
    border: 'border-primary/30',
    bg: 'bg-primary/5',
    content:
      '"Claro. Só para eu entender melhor: o que ainda falta ficar claro para você tomar essa decisão com segurança?"',
    contentStyle: 'italic text-foreground/80',
  },
];

type ExTab = 'call' | 'whatsapp';

export function Demo() {
  const [tab, setTab] = useState<ExTab>('call');
  const cards = tab === 'call' ? example1 : example2;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">

        <FadeIn>
          <div className="text-center mb-5 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veja o mecanismo em ação.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Em vez de decorar respostas prontas, você entende onde a conversa perdeu profundidade — e como reconduzir com inteligência.
            </p>
          </div>
        </FadeIn>

        {/* Example toggle */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-1 bg-card border border-border rounded-xl p-1">
              <button
                onClick={() => setTab('call')}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                  tab === 'call'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Exemplo 1 — Call
              </button>
              <button
                onClick={() => setTab('whatsapp')}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                  tab === 'whatsapp'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Exemplo 2 — WhatsApp
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
          {cards.map((card, i) => (
            <FadeIn key={`${tab}-${i}`} delay={i * 0.1}>
              <div
                className={`rounded-2xl border ${card.border} ${card.bg} p-6 h-full flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className={`flex items-center gap-2 ${card.tagColor}`}>
                  {card.icon}
                  <span className="text-xs font-bold uppercase tracking-widest">{card.tag}</span>
                </div>
                <p className={`text-sm leading-relaxed ${card.contentStyle} flex-1`}>
                  {card.content}
                </p>
                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground self-end">
                  {i + 1}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 max-w-2xl mx-auto bg-card border border-border rounded-2xl px-7 py-5 mb-10">
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed text-center">
              O objetivo não é decorar respostas prontas. É entender onde a conversa perdeu profundidade e como{' '}
              <strong className="text-foreground font-semibold">reconduzir com inteligência.</strong>
            </p>
          </div>

          <div className="flex justify-center">
            <ButtonCTA href="#oferta" className="w-full sm:w-auto px-8 py-4">
              Quero Ver Isso Na Minha Próxima Conversa <ArrowRight className="w-5 h-5 ml-1" />
            </ButtonCTA>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
