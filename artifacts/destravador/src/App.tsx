import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';

import { ReadingProgress } from '@/components/ReadingProgress';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';

// Sections — DOR → CAUSA → MECANISMO → SOLUÇÃO → CONVICÇÃO → OFERTA
import { Hero } from '@/sections/Hero';
import { Pain } from '@/sections/Pain';
import { CausaReal } from '@/sections/CausaReal';
import { MecanismoUnico } from '@/sections/MecanismoUnico';
import { Demo } from '@/sections/Demo';
import { OrigemReal } from '@/sections/OrigemReal';
import { WhyItWorks } from '@/sections/WhyItWorks';
import { WhatYouGet } from '@/sections/WhatYouGet';
import { UniqueAngle } from '@/sections/UniqueAngle';
import { Benefits } from '@/sections/Benefits';
import { Testimonials } from '@/sections/Testimonials';
import { Offer } from '@/sections/Offer';
import { Guarantee } from '@/sections/Guarantee';
import { FAQ } from '@/sections/FAQ';
import { FinalCTA } from '@/sections/FinalCTA';
import { Footer } from '@/sections/Footer';

function LandingPage() {
  return (
    <main className="w-full flex flex-col bg-background min-h-[100dvh]">
      <ReadingProgress />

      {/* Hero — identificação imediata para tráfego frio */}
      <Hero />

      {/* 1. DOR — "O pior não é perder a venda. É não saber onde você errou." */}
      <Pain />

      {/* 2. CAUSA — "Você não perde vendas no fechamento. Você perde no diagnóstico." */}
      <CausaReal />

      {/* 3. MECANISMO — "Um gerente comercial dentro do ChatGPT." */}
      <MecanismoUnico />

      {/* 4. DEMONSTRAÇÃO — conversa perdida vira diagnóstico */}
      <Demo />

      {/* 5. AUTORIDADE — origem do método */}
      <OrigemReal />

      {/* 6. O QUE A IA PROCURA — 6 análises */}
      <WhyItWorks />

      {/* 7. O QUE VOCÊ RECEBE — 6 entregáveis */}
      <WhatYouGet />

      {/* 8. DIFERENCIAÇÃO — vs prompt genérico */}
      <UniqueAngle />

      {/* 9. BENEFÍCIOS — o que muda na prática */}
      <Benefits />

      {/* CONVICÇÃO — prova social */}
      <Testimonials />

      {/* 10. OFERTA */}
      <Offer />

      {/* GARANTIA */}
      <Guarantee />

      {/* FAQ */}
      <FAQ />

      {/* CTA FINAL */}
      <FinalCTA />

      <Footer />

      <MobileStickyCTA />
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;
