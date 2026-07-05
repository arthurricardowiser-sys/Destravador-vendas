import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';

import { ReadingProgress } from '@/components/ReadingProgress';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';

// Sections — in narrative order
import { Hero } from '@/sections/Hero';
import { OrigemReal } from '@/sections/OrigemReal';
import { WhyItWorks } from '@/sections/WhyItWorks';
import { Demo } from '@/sections/Demo';
import { Pain } from '@/sections/Pain';
import { TheTruth } from '@/sections/TheTruth';
import { Presentation } from '@/sections/Presentation';
import { HowItWorks } from '@/sections/HowItWorks';
import { Benefits } from '@/sections/Benefits';
import { WhatYouGet } from '@/sections/WhatYouGet';
import { UniqueAngle } from '@/sections/UniqueAngle';
import { Testimonials } from '@/sections/Testimonials';
import { Offer } from '@/sections/Offer';
import { Guarantee } from '@/sections/Guarantee';
import { FAQ } from '@/sections/FAQ';
import { FinalCTA } from '@/sections/FinalCTA';
import { Footer } from '@/sections/Footer';

function LandingPage() {
  return (
    <main className="w-full flex flex-col bg-background min-h-[100dvh]">
      {/* Global CRO components */}
      <ReadingProgress />

      {/* 1. Hero — first fold, product promise + laptop mockup */}
      <Hero />

      {/* 2. Origem Real — "não nasceu em uma sala de aula" — credencial de campo */}
      <OrigemReal />

      {/* 3. What the AI looks for — 5 analysis cards */}
      <WhyItWorks />

      {/* 4. Demo — conversation lost → diagnosis */}
      <Demo />

      {/* 5. Pain — "O pior não é perder a venda. É não saber onde você errou." */}
      <Pain />

      {/* 6. The Truth — reframe the real problem */}
      <TheTruth />

      {/* 7. Presentation — introduce the product */}
      <Presentation />

      {/* 8. How It Works — 5-step process */}
      <HowItWorks />

      {/* 9. Benefits — transformation outcomes */}
      <Benefits />

      {/* 10. What You Get — 6 deliverable cards */}
      <WhatYouGet />

      {/* 11. Unique Angle — vs generic prompt comparison */}
      <UniqueAngle />

      {/* 12. Testimonials — social proof */}
      <Testimonials />

      {/* 13. Offer — price and CTA */}
      <Offer />

      {/* 14. Guarantee — risk reversal */}
      <Guarantee />

      {/* 15. FAQ — objection handling */}
      <FAQ />

      {/* 16. Final CTA — last push */}
      <FinalCTA />

      <Footer />

      {/* Mobile sticky CTA */}
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
