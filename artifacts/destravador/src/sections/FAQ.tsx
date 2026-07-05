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
    question: 'Isso é um curso?',
    answer:
      'Não. É um sistema de auditoria comercial com IA. O objetivo é analisar conversas e entregar diagnóstico prático — você não assiste aulas, você aplica o protocolo nas suas conversas reais.',
  },
  {
    question: 'Preciso saber usar IA?',
    answer:
      'Não. Você recebe o comando estruturado (Prompt Mestre) e o passo a passo completo para aplicar. É um processo de copiar, colar e ler o diagnóstico.',
  },
  {
    question: 'Funciona para WhatsApp?',
    answer:
      'Sim. Você pode usar em conversas de WhatsApp, abordagens por mensagem e follow-ups. O sistema inclui um guia específico para aplicação em texto.',
  },
  {
    question: 'Funciona para ligação?',
    answer:
      'Sim. Basta transcrever ou resumir a call e inserir no sistema conforme o passo a passo. Funciona para qualquer formato de conversa comercial.',
  },
  {
    question: 'Serve para qualquer tipo de venda?',
    answer:
      'Funciona melhor para vendas consultivas, high ticket, B2B, serviços, mentorias, infoprodutos e negociações onde existe conversa antes da decisão.',
  },
  {
    question: 'Isso substitui treinamento comercial?',
    answer:
      'Não. Ele funciona como uma ferramenta prática de correção e melhoria contínua das suas conversas — um gerente comercial de bolso para usar depois de cada call.',
  },
  {
    question: 'Tenho garantia?',
    answer:
      'Sim. Você tem 7 dias de garantia. Se acessar o Destravador e sentir que ele não te ajuda a enxergar suas conversas com mais clareza, basta solicitar o reembolso.',
  },
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
                <AccordionTrigger className="text-left font-semibold text-base hover:no-underline hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
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
