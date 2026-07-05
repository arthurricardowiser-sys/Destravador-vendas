import React from 'react';
import {
  RefreshCcw,
  MessageSquareDashed,
  DollarSign,
  TrendingDown,
  Volume2,
  Rewind,
  ClipboardX,
  ShieldOff,
} from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

const painPoints = [
  {
    icon: <RefreshCcw className="w-5 h-5 text-primary" />,
    title: 'Você sente que falou demais tentando convencer',
    description: 'Argumentos, benefícios, diferenciais — e mesmo assim o cliente não fechou.',
  },
  {
    icon: <MessageSquareDashed className="w-5 h-5 text-accent" />,
    title: 'O cliente some depois de dizer "vou ver e te aviso"',
    description: 'E você fica sem entender o que exatamente aconteceu.',
  },
  {
    icon: <DollarSign className="w-5 h-5 text-yellow-600" />,
    title: 'Você acredita que perdeu por preço, mas não tem certeza',
    description: 'A objeção de preço quase nunca é sobre preço. Mas sem diagnóstico, você nunca descobre.',
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-destructive" />,
    title: 'Você responde objeções sem saber a causa real',
    description: 'Tenta convencer sem entender o que está travando o cliente de verdade.',
  },
  {
    icon: <Volume2 className="w-5 h-5 text-orange-500" />,
    title: 'A conversa parecia boa, mas não avançou',
    description: 'O rapport estava lá, o interesse parecia real — mas a decisão nunca veio.',
  },
  {
    icon: <Rewind className="w-5 h-5 text-rose-500" />,
    title: 'Você queria voltar alguns minutos e fazer outra pergunta',
    description: 'Você sentia que havia um ponto de virada — mas não sabia qual era.',
  },
  {
    icon: <ClipboardX className="w-5 h-5 text-purple-500" />,
    title: 'Você registra "cliente vai pensar", mas sabe que a venda morreu antes disso',
    description: 'No fundo você sabe. Mas não sabe onde exatamente errou.',
  },
  {
    icon: <ShieldOff className="w-5 h-5 text-muted-foreground" />,
    title: 'Você termina a conversa sem saber onde perdeu autoridade',
    description: 'Sem esse dado, o mesmo ciclo se repete na próxima oportunidade.',
  },
];

export function Pain() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-5 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              O pior não é perder a venda.{' '}
              <span className="text-destructive">É não saber onde você errou.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Mini storytelling */}
        <FadeIn delay={0.1}>
          <div className="max-w-2xl mx-auto mb-10 text-center space-y-3">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Você termina a conversa, fecha o notebook, abre o WhatsApp ou atualiza o CRM e tenta lembrar em qual momento o cliente esfriou.
            </p>
            <div className="bg-card border border-border rounded-2xl px-7 py-6 text-left space-y-2 shadow-sm">
              <p className="text-sm text-muted-foreground leading-relaxed">Às vezes a conversa parecia boa.</p>
              <p className="text-sm text-muted-foreground leading-relaxed">O cliente respondeu bem. Fez perguntas. Demonstrou interesse.</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Mas, no final, veio o clássico:</p>
              <p className="text-base font-bold text-foreground italic">"Vou pensar."</p>
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">E depois disso, silêncio.</p>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2">
              O problema é que a maioria dos vendedores nunca descobre se perdeu por preço, falta de confiança, baixa percepção de valor, ausência de urgência — ou simplesmente porque fez a pergunta errada no momento errado.
            </p>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painPoints.map((point, index) => (
            <FadeIn key={index} delay={index * 0.06}>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full flex items-start gap-4 group">
                <div className="bg-muted p-2.5 rounded-xl group-hover:scale-105 transition-transform flex-shrink-0 mt-0.5">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Closing line */}
        <FadeIn delay={0.5}>
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-base md:text-lg font-medium text-foreground border-l-4 border-primary/50 pl-5 text-left bg-primary/3 py-4 pr-5 rounded-r-xl mb-8">
              O Destravador foi criado para encontrar exatamente esse ponto.
            </p>
            <ButtonCTA href="#oferta" className="w-full sm:w-auto px-8 py-4">
              Quero Descobrir Onde Perdi o Cliente <ArrowRight className="w-5 h-5 ml-1" />
            </ButtonCTA>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
