import React from 'react';
import { MapPin, VolumeX, Stethoscope, AlertCircle, HelpCircle, ShieldOff } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

/* ─── 6 cards: what the AI looks for ─── */
const cards = [
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    accent: 'border-primary/20 hover:border-primary/40',
    iconBg: 'bg-primary/8',
    title: 'Onde você perdeu o cliente',
    description: 'Identifica o ponto exato em que a conversa deixou de gerar avanço.',
  },
  {
    icon: <VolumeX className="w-6 h-6 text-orange-500" />,
    accent: 'border-orange-200/60 hover:border-orange-300',
    iconBg: 'bg-orange-50',
    title: 'Onde você falou demais',
    description: 'Mostra quando você tentou convencer antes de entender.',
  },
  {
    icon: <Stethoscope className="w-6 h-6 text-accent" />,
    accent: 'border-accent/20 hover:border-accent/40',
    iconBg: 'bg-accent/8',
    title: 'Onde faltou diagnóstico',
    description: 'Aponta perguntas que deveriam ter sido feitas para aprofundar dor, urgência e prioridade.',
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-destructive" />,
    accent: 'border-destructive/20 hover:border-destructive/40',
    iconBg: 'bg-destructive/5',
    title: 'Onde a objeção nasceu',
    description: "Revela se o 'vou pensar' apareceu por preço, insegurança, falta de clareza ou baixa percepção de valor.",
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-purple-500" />,
    accent: 'border-purple-200/60 hover:border-purple-300',
    iconBg: 'bg-purple-50',
    title: 'Qual pergunta poderia mudar o rumo',
    description: 'Sugere perguntas melhores para reconduzir a conversa com naturalidade.',
  },
  {
    icon: <ShieldOff className="w-6 h-6 text-rose-500" />,
    accent: 'border-rose-200/60 hover:border-rose-300',
    iconBg: 'bg-rose-50',
    title: 'Onde você perdeu autoridade',
    description: 'Mostra quando sua condução deixou de gerar confiança.',
  },
];

export function WhyItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-5 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que o Auditor Comercial IA procura na sua conversa?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Ele analisa sinais que normalmente passam despercebidos pelo vendedor.
            </p>
          </div>
        </FadeIn>

        {/* Cards grid — 2 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {cards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className={`bg-card border ${card.accent} rounded-2xl p-6 flex items-start gap-5 shadow-sm hover:shadow-md transition-all h-full group`}
              >
                <div className={`${card.iconBg} p-3 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
