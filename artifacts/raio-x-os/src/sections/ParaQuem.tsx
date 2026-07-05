import React from 'react';
import { Check } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { SectionCTA } from '@/components/SectionCTA';

const perfis = [
  { label: 'Closers', desc: 'Que precisam entender seus erros de condução' },
  { label: 'Afiliados', desc: 'Que vendem no WhatsApp ou direct' },
  { label: 'Consultores', desc: 'Que negociam por ligação ou reunião' },
  { label: 'Corretores', desc: 'Que acompanham propostas e follow-ups' },
  { label: 'SDRs', desc: 'E executivos comerciais' },
  { label: 'Prestadores de serviço', desc: 'Que vendem por conversa' },
  { label: 'Infoprodutores', desc: 'Que fecham no WhatsApp ou Zoom' },
  { label: 'Vendedores no WhatsApp', desc: 'Que querem parar de repetir erros' },
];

export function ParaQuem() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-bold text-primary tracking-widest uppercase mb-5">
              Para Quem É
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Para quem vende por conversa e{' '}
              <span className="text-primary">precisa melhorar conversão</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-card border-2 border-primary/25 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {perfis.map((perfil, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-background/40 rounded-xl border border-border/30 hover:border-primary/20 transition-colors group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-snug">{perfil.label}</p>
                    <p className="text-xs text-muted-foreground leading-snug mt-0.5">{perfil.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <SectionCTA label="Quero testar o RAIO-X" />
      </div>
    </section>
  );
}
