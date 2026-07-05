import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Hero } from "@/sections/Hero";
import { Pain } from "@/sections/Pain";
import { Inimigo } from "@/sections/Inimigo";
import { Mecanismo } from "@/sections/Mecanismo";
import { ComoFunciona } from "@/sections/ComoFunciona";
import { Resultado } from "@/sections/Resultado";
import { Transformacao } from "@/sections/Transformacao";
import { ParaQuem } from "@/sections/ParaQuem";
import { ParaQuemNao } from "@/sections/ParaQuemNao";
import { Oferta } from "@/sections/Oferta";
import { Garantia } from "@/sections/Garantia";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

const queryClient = new QueryClient();

function LandingPage() {
  return (
    <main className="w-full flex flex-col bg-background min-h-[100dvh] relative z-10">
      <Hero />
      <Pain />
      <Inimigo />
      <Mecanismo />
      <ComoFunciona />
      <Resultado />
      <Transformacao />
      <ParaQuem />
      <ParaQuemNao />
      <Oferta />
      <Garantia />
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
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
