import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from '@/components/FadeIn';

const faqs = [
  {
    question: "Preciso ter experiência com IA para usar?",
    answer: "Não. O sistema é feito para ser usado por qualquer vendedor. O Prompt Mestre já vem pronto para você simplesmente colar na IA junto com a sua conversa. É um processo de 'copiar e colar'."
  },
  {
    question: "Isso é um curso ou treinamento?",
    answer: "Não. É um Sistema de Diagnóstico. Você não vai ficar horas assistindo aulas teóricas — você aplica o protocolo imediatamente nas suas conversas reais e já tem o feedback do que melhorar."
  },
  {
    question: "Para qual tipo de venda funciona?",
    answer: "Para qualquer venda consultiva onde há diálogo: B2B, prestação de serviços, corretagem de imóveis, infoprodutos high-ticket, saúde, seguros e consultorias."
  },
  {
    question: "Quanto tempo leva para ver resultado?",
    answer: "A maioria dos nossos usuários relata uma diferença clara de postura e conexão logo na primeira conversa após aplicar o diagnóstico."
  },
  {
    question: "Tenho acesso imediato após a compra?",
    answer: "Sim. Assim que o pagamento for confirmado, você recebe o acesso a todo o material por e-mail em menos de 5 minutos."
  },
  {
    question: "E se não funcionar para mim?",
    answer: "Você está protegido pela nossa garantia incondicional de 7 dias. Se não gostar do formato ou achar que não serve para o seu mercado, basta enviar um e-mail e devolvemos 100% do seu dinheiro."
  }
];

export function FAQ() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Perguntas frequentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border px-6 rounded-xl data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
