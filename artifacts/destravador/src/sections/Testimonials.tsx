import React from 'react';
import { Star } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const testimonials = [
  {
    name: "Marcus Oliveira",
    role: "Closer B2B",
    content: "Fechei 3 contratos na semana que implementei o diagnóstico. Eu achava que era bom em quebrar objeções, mas a IA me mostrou que eu mesmo as criava por não investigar a fundo.",
    initials: "MO",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Fernanda Ramos",
    role: "SDR de Software",
    content: "Reduzi meu ciclo de vendas pela metade. A IA encontrou padrões nas minhas mensagens que eu nunca perceberia. É literalmente um mentor no meu bolso.",
    initials: "FR",
    color: "from-primary to-emerald-500"
  },
  {
    name: "Ricardo Mendes",
    role: "Consultor",
    content: "Parei de perder vendas no final. O problema era sempre o diagnóstico no início. O Destravador mudou completamente como eu conduzo minhas reuniões.",
    initials: "RM",
    color: "from-orange-500 to-red-500"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que dizem os profissionais que já usaram
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados reais de quem parou de adivinhar e começou a diagnosticar.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col h-full relative">
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                <p className="text-foreground/80 italic mb-8 flex-grow">
                  "{t.content}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
