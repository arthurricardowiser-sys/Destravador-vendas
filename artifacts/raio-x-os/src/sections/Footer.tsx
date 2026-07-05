import React from 'react';
import { Crosshair } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-border/30">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Crosshair className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm font-bold text-foreground tracking-wide">RAIO-X OS</span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Sistema de auditoria comercial baseada em evidências. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground">
          Garantia de 7 dias
        </p>
      </div>
    </footer>
  );
}
