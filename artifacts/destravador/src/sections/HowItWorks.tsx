import React from 'react';
import { Copy, FileSearch, FileCheck2, Lightbulb, TrendingUp } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { ButtonCTA } from '@/components/ButtonCTA';

const steps = [
  {
    icon: <Copy className="w-6 h-6" />,
    title: "Cole sua conversa",
    description: "Pegue o histórico de uma venda perdida no WhatsApp ou email e cole no nosso Prompt Mestre na IA."
  },
  {
    icon: <FileSearch className="w-6 h-6" />,
    title: "IA encontra os erros",
    description: "O sistema mapeia exatamente onde a conexão quebrou e a venda começou a morrer."
  },
  {
    icon: <FileCheck2 className="w-6 h-6" />,
    title: "Receba o diagnóstico",
    description: "Um relatório preciso, sem enrolação, do que falhou na sua abordagem."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Aprenda a pergunta certa",
    description: "Descubra a pergunta cirúrgica que você deveria ter feito para revelar a dor real."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Aplique na próxima venda",
    description: "Evolua a cada interação. Suas próximas conversas serão muito mais persuasivas e fluidas."
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Como funciona em <span className="text-primary">5 etapas</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Um processo rápido, simples e brutalmente eficaz.
          </p>
        </FadeIn>

        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-border md:hidden"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <FadeIn key={index} delay={index * 0.1} direction={isEven ? "right" : "left"}>
                  <div className={`relative flex items-center md:justify-between flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Center Node */}
                    <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-card border-4 border-background shadow-md rounded-full flex items-center justify-center -translate-x-1/2 z-10 text-primary md:block hidden">
                      <span className="font-bold">{index + 1}</span>
                    </div>

                    {/* Mobile Node */}
                    <div className="absolute left-8 w-10 h-10 bg-primary border-4 border-background shadow-md rounded-full flex items-center justify-center -translate-x-1/2 z-10 text-primary-foreground font-bold md:hidden">
                      {index + 1}
                    </div>

                    {/* Content Box */}
                    <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className={`absolute top-0 w-2 h-full bg-primary/20 transition-all group-hover:bg-primary ${isEven ? 'left-0' : 'right-0 hidden md:block'} left-0 md:left-auto`}></div>
                        <div className={`absolute top-0 left-0 w-2 h-full bg-primary/20 transition-all group-hover:bg-primary block md:hidden`}></div>
                        
                        <div className={`flex items-center gap-4 mb-3 ${!isEven ? 'md:flex-row-reverse' : ''} flex-row`}>
                          <div className="bg-muted p-2 rounded-lg text-foreground">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        <FadeIn delay={0.6} className="mt-20 text-center">
          <ButtonCTA href="#oferta" className="px-8 py-4">
            Quero diagnosticar minhas conversas agora
          </ButtonCTA>
        </FadeIn>
      </div>
    </section>
  );
}
