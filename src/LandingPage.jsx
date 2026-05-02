import Header from './components/Header';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import { trackMetaInitiateCheckout, trackPlanClick } from './utils/analytics';

const PLAN_NAME = 'Plano MAX 20x';
const PLAN_PRICE_LABEL = 'R$249';
const PLAN_PRICE_VALUE = 249;

export default function LandingPage() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePlanClick = (planId) => {
    trackPlanClick(planId, PLAN_NAME, PLAN_PRICE_LABEL);
    trackMetaInitiateCheckout({
      planId,
      planName: PLAN_NAME,
      value: PLAN_PRICE_VALUE,
    });

    window.open('https://pay.cakto.com.br/z27d5zi_859122', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full flex flex-col overflow-clip bg-white font-[Inter,system-ui,sans-serif] antialiased">
      <Header />
      <main>
        <Hero onViewPlans={() => scrollTo('planos')} onHowItWorks={() => scrollTo('como-funciona')} />
        <Stats />
        <Projects />
        <Features />
        <HowItWorks />
        <Plans onPlanClick={handlePlanClick} />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
