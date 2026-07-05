import React from 'react';
import { MessageSquareDashed, Ghost, ShieldQuestion, Bot, HeartCrack, BookX } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { ButtonCTA } from '@/components/ButtonCTA';

const painPoints = [
  {
    icon: <MessageSquareDashed className="w-6 h-6 text-accent" />,
    title: "O cliente diz 'vou pensar'",
    description: "E nunca mais dá retorno. Você fica no vácuo sem saber o que deu errado."
  },
  {
    icon: <Ghost className="w-6 h-6 text-muted-foreground" />,
    title: "O cliente desaparece",
    description: "Depois de uma conversa aparentemente boa, ele simplesmente some do WhatsApp."
  },
  {
    icon: <ShieldQuestion className="w-6 h-6 text-destructive" />,
    title: "Objeções constantes",
    description: "Preço, tempo, sócio, mercado... Eles sempre têm uma desculpa na ponta da língua."
  },
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "Conversas robóticas",
    description: "Você faz o roteiro perfeitamente, mas o cliente não engaja e a conexão não acontece."
  },
  {
    icon: <HeartCrack className="w-6 h-6 text-orange-500" />,
    title: "Muito esforço para vender",
    description: "Você dá tudo de si, faz follow-up infinito, mas a taxa de conversão continua baixa."
  },
  {
    icon: <BookX className="w-6 h-6 text-purple-500" />,
    title: "Perde vendas mesmo estudando",
    description: "Seu conhecimento teórico não está se transformando em resultados práticos."
  }
];

export function Pain() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Você se identifica com alguma dessas situações?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A maioria dos vendedores acredita que o problema está no fechamento. Eles estão errados.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full flex items-start gap-4">
                <div className="bg-muted p-3 rounded-xl">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6} className="mt-16 text-center">
          <ButtonCTA href="#oferta" className="px-8 py-4">
            Quero parar de perder essas vendas
          </ButtonCTA>
        </FadeIn>
      </div>
    </section>
  );
}
