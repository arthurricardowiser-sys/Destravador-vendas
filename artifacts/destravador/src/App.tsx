import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';

import { ReadingProgress } from '@/components/ReadingProgress';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';

// Sections — in narrative order
import { Hero } from '@/sections/Hero';
import { Demo } from '@/sections/Demo';
import { Pain } from '@/sections/Pain';
import { WhyItWorks } from '@/sections/WhyItWorks';
import { TheTruth } from '@/sections/TheTruth';
import { Presentation } from '@/sections/Presentation';
import { HowItWorks } from '@/sections/HowItWorks';
import { Benefits } from '@/sections/Benefits';
import { WhatYouGet } from '@/sections/WhatYouGet';
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

      {/* 1. Hero — first fold, product promise */}
      <Hero />

      {/* 2. Demo — show the system in action immediately */}
      <Demo />

      {/* 3. Pain — identify with the reader's frustration */}
      <Pain />

      {/* 4. Why it works — mechanism / unique angle */}
      <WhyItWorks />

      {/* 5. The Truth — reframe the real problem */}
      <TheTruth />

      {/* 6. Presentation — introduce the product */}
      <Presentation />

      {/* 7. How It Works — 5-step process */}
      <HowItWorks />

      {/* 8. Benefits — transformation outcomes */}
      <Benefits />

      {/* 9. What You Get — clear breakdown of what's purchased */}
      <WhatYouGet />

      {/* 10. Testimonials — social proof */}
      <Testimonials />

      {/* 11. Offer — price and CTA */}
      <Offer />

      {/* 12. Guarantee — risk reversal */}
      <Guarantee />

      {/* 13. FAQ — objection handling */}
      <FAQ />

      {/* 14. Final CTA — last push */}
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
