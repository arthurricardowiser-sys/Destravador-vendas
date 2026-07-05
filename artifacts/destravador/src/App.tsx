import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';

import { ReadingProgress } from '@/components/ReadingProgress';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { Hero } from '@/sections/Hero';
import { Pain } from '@/sections/Pain';
import { TheTruth } from '@/sections/TheTruth';
import { Presentation } from '@/sections/Presentation';
import { HowItWorks } from '@/sections/HowItWorks';
import { Benefits } from '@/sections/Benefits';
import { Deliverables } from '@/sections/Deliverables';
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
      
      <Hero />
      <Pain />
      <TheTruth />
      <Presentation />
      <HowItWorks />
      <Benefits />
      <Deliverables />
      <Testimonials />
      <Offer />
      <Guarantee />
      <FAQ />
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
