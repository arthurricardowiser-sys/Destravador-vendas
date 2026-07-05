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
      'Não. Você recebe o Prompt Mestre estruturado e o passo a passo completo para aplicar. É um processo de copiar, colar a conversa e ler o diagnóstico.',
  },
  {
    question: 'Funciona para WhatsApp?',
    answer:
      'Sim. Você pode colar mensagens de WhatsApp, abordagens por texto, directs e follow-ups. O sistema inclui um guia específico para aplicação em conversas escritas.',
  },
  {
    question: 'Funciona para ligação?',
    answer:
      'Sim. Basta transcrever ou resumir a call e inserir no sistema conforme o passo a passo. Funciona para qualquer formato de conversa comercial — call, WhatsApp, direct ou follow-up.',
  },
  {
    question: 'Posso usar com conversas antigas?',
    answer:
      'Sim. Você pode pegar conversas passadas que não fecharam e usar o Auditor para entender o que aconteceu. É uma ótima forma de aprender com o histórico.',
  },
  {
    question: 'Serve para vendas high ticket?',
    answer:
      'Funciona especialmente bem para vendas consultivas, high ticket, B2B, serviços, mentorias e infoprodutos — qualquer venda onde existe conversa antes da decisão.',
  },
  {
    question: 'Serve para vendas pelo direct?',
    answer:
      'Sim. O sistema funciona com qualquer conversa em formato de texto. Direct do Instagram, Telegram, WhatsApp — basta colar a conversa e rodar o diagnóstico.',
  },
  {
    question: 'Isso substitui treinamento comercial?',
    answer:
      'Não. Ele funciona como uma ferramenta prática de correção e melhoria contínua — um gerente comercial de bolso que você usa depois de cada conversa para entender o que poderia ter sido diferente.',
  },
  {
    question: 'Tenho garantia?',
    answer:
      'Sim. Você tem 7 dias de garantia. Use o Destravador em uma conversa real. Se sentir que ele não te ajudou a enxergar sua abordagem com mais clareza, solicite o reembolso e devolvemos 100% sem perguntas.',
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
