import React from 'react';
import { ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

export function TheTruth() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              O problema <span className="text-destructive">nunca foi</span> a objeção.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A venda não morre quando o cliente diz "está caro". A venda morre nos primeiros 5 minutos de conversa, quando você falha em diagnosticar a verdadeira dor emocional dele.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Path to Failure */}
          <FadeIn delay={0.2}>
            <div className="bg-destructive/5 border border-destructive/20 rounded-3xl p-8 relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-background border border-destructive/20 text-destructive text-sm font-bold px-4 py-1 rounded-full flex items-center gap-2 shadow-sm">
                <XCircle className="w-4 h-4" /> Caminho do Amador
              </div>
              
              <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[19px] before:w-[2px] before:bg-destructive/20 ml-2 mt-4">
                {[
                  "Diagnóstico superficial (foca só no produto)",
                  "Conversa lógica sem conexão",
                  "Apresentação da solução cedo demais",
                  "Surgem objeções inquebráveis",
                  "Venda perdida"
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 border-2 border-destructive flex items-center justify-center text-destructive font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <div className="pt-2 text-foreground font-medium">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Path to Success */}
          <FadeIn delay={0.4}>
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-background border border-primary/20 text-primary text-sm font-bold px-4 py-1 rounded-full flex items-center gap-2 shadow-sm">
                <CheckCircle2 className="w-4 h-4" /> Caminho do Especialista
              </div>
              
              <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[19px] before:w-[2px] before:bg-primary/20 ml-2 mt-4">
                {[
                  "Diagnóstico preciso (revela dor emocional)",
                  "Conexão verdadeira criada",
                  "Cliente percebe o valor por si mesmo",
                  "Decisão de compra natural",
                  "Fechamento sem esforço"
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <div className="pt-2 text-foreground font-medium">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
