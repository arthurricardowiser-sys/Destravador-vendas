import React from 'react';

export function Footer() {
  return (
    <footer className="bg-foreground border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 text-center text-white/40 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Destravador de Vendas. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
