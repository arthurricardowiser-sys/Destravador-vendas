import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const faqs = [
  {
    q: 'Preciso ser vendedor profissional?',
    a: 'Não. O RAIO-X OS foi criado para qualquer pessoa que vende por conversa — seja no WhatsApp, ligação, reunião ou e-mail. Se você tem negociações que não avançam, o sistema vai te ajudar a entender onde está o problema.',
  },
  {
    q: 'Funciona para WhatsApp?',
    a: 'Sim. Você copia a conversa do WhatsApp, cola no sistema e recebe o diagnóstico completo: causa raiz, erros críticos, script corrigido e plano de ação.',
  },
  {
    q: 'Funciona para ligação ou reunião?',
    a: 'Sim. Você pode usar a transcrição da ligação, o resumo da reunião ou o histórico de qualquer conversa comercial. O RAIO-X analisa qualquer formato e entrega o mesmo diagnóstico estruturado.',
  },
  {
    q: 'Preciso saber usar IA?',
    a: 'Não. O acesso inclui o prompt pronto e o passo a passo completo. Você copia, cola e recebe o diagnóstico — sem configuração, sem conhecimento técnico.',
  },
  {
    q: 'Isso substitui um treinamento de vendas?',
    a: 'Não. O RAIO-X OS é uma ferramenta de diagnóstico e correção. Você usa depois de cada negociação para entender exatamente o que aconteceu. Ele complementa qualquer treinamento que você já faz — e torna o aprendizado mais prático e direto.',
  },
  {
    q: 'O RAIO-X promete que vou fechar todas as vendas?',
    a: 'Não. Nenhuma ferramenta honesta promete isso. O RAIO-X entrega diagnóstico, clareza, correção e plano de ação. O resultado depende de você aplicar o que aprende em cada auditoria.',
  },
  {
    q: 'Posso usar no ChatGPT e no Gemini?',
    a: 'Sim. O acesso inclui prompts compatíveis com os dois. Você escolhe o que preferir — e usa a IA que já tem na mão.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-card border rounded-xl transition-colors duration-200 ${open ? 'border-primary/30' : 'border-border/40'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
      >
        <span className="text-sm md:text-base font-semibold text-foreground leading-snug">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-primary' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 to-transparent pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Perguntas frequentes
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
