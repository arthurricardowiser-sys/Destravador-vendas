import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const deliverables = [
  {
    title: "Protocolo de Diagnóstico",
    description: "PDF completo com a metodologia de vendas consultivas e diagnóstico de dor real."
  },
  {
    title: "Prompt Mestre do Auditor Comercial",
    description: "O coração do sistema. Basta copiar e colar na sua IA favorita (ChatGPT, Claude) junto com sua conversa."
  },
  {
    title: "Biblioteca Inteligente de Objeções",
    description: "Como diagnosticar e contornar as 47 objeções mais comuns do mercado."
  },
  {
    title: "Framework das Perguntas de Dor",
    description: "Estruturas de perguntas poderosas que fazem o cliente revelar o que realmente importa."
  },
  {
    title: "Guia de Autoanálise de Calls",
    description: "Aprenda a auditar suas próprias reuniões de vídeo e áudio usando inteligência artificial."
  }
];

export function Deliverables() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tudo que você recebe <span className="text-primary">hoje</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Acesso imediato ao arsenal completo para revolucionar suas conversas comerciais.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {deliverables.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-background/5 border border-background/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-background/10 transition-colors">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
