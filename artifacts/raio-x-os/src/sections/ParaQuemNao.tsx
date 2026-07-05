import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';

const naoE = [
  'você não conversa com leads;',
  'você não quer revisar suas negociações;',
  'você procura uma promessa milagrosa;',
  'você não quer corrigir sua execução comercial;',
  'você espera que uma IA venda por você sem melhorar sua abordagem.',
];

export function ParaQuemNao() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="bg-card border border-border/40 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-4 py-1.5 text-[11px] font-bold text-muted-foreground tracking-widest uppercase">
                  Atenção
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 leading-tight">
                  O RAIO-X não é para você se...
                </h2>
                <ul className="space-y-3 mb-7">
                  {naoE.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t border-border/40">
                  <a
                    href="#oferta"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 bg-primary/8 hover:bg-primary/15 hover:border-primary/60 rounded-xl px-6 py-3 transition-all duration-200 active:scale-[0.98]"
                  >
                    Se isso faz sentido para você, veja a oferta <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
