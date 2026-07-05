import React from 'react';
import { ArrowRight, MessageSquare, Bot, CornerDownRight } from 'lucide-react';
import { ButtonCTA } from '@/components/ButtonCTA';
import { FadeIn } from '@/components/FadeIn';

export function WhatsAppSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        <FadeIn>
          <div className="text-center mb-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/6 px-4 py-2 text-[11px] font-semibold text-primary tracking-wide mb-5">
              <MessageSquare className="w-3.5 h-3.5" />
              Novo
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Também funciona para quem vende pelo WhatsApp.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Nem toda venda morre em uma call. Muitas morrem em uma mensagem mal conduzida.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            Se você vende no WhatsApp, provavelmente já viveu isso: o cliente chama, pergunta preço, parece interessado, recebe sua explicação e depois desaparece.
          </p>
        </FadeIn>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* Column 1 — Common WhatsApp conversation */}
          <FadeIn delay={0.15}>
            <div className="bg-card border border-destructive/20 rounded-2xl p-6 h-full shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-destructive" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Conversa comum no WhatsApp</h3>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">C</div>
                  <div className="bg-muted rounded-xl rounded-tl-sm px-3 py-2 text-sm text-foreground/80 max-w-[85%]">
                    "Qual o valor?"
                  </div>
                </div>
                <div className="flex gap-3 items-start justify-end">
                  <div className="bg-primary/10 rounded-xl rounded-tr-sm px-3 py-2 text-sm text-foreground/80 max-w-[85%]">
                    "Fica R$497. Posso te explicar como funciona."
                  </div>
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">V</div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">C</div>
                  <div className="bg-muted rounded-xl rounded-tl-sm px-3 py-2 text-sm text-foreground/80 max-w-[85%]">
                    "Vou ver certinho e te aviso."
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-destructive bg-destructive/8 border border-destructive/20 rounded-xl px-3 py-2">
                  <span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                  Cliente sumiu.
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Column 2 — Auditor output */}
          <FadeIn delay={0.25}>
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 h-full shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/40 rounded-t-2xl" />

              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Auditor Comercial IA</h3>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-3 space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-orange-500">Erro identificado</p>
                  <p className="text-sm text-foreground/80 leading-snug">
                    Você respondeu preço antes de entender contexto, prioridade e consequência.
                  </p>
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary">Mensagem sugerida</p>
                  <p className="text-sm text-foreground/80 italic leading-snug">
                    "Claro. Antes de te passar a melhor opção, me conta uma coisa: o que fez você procurar por isso agora?"
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-muted/40 p-3 space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Próxima ação</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CornerDownRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    Voltar para diagnóstico antes de apresentar valor.
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.35}>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              O Auditor Comercial IA não serve apenas para calls. Ele analisa mensagens, follow-ups, directs e conversas escritas para mostrar onde sua condução perdeu força.
            </p>
            <ButtonCTA href="#oferta" className="w-full sm:w-auto px-8 py-4">
              Quero Analisar Meu WhatsApp ou Call <ArrowRight className="w-5 h-5 ml-1" />
            </ButtonCTA>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
