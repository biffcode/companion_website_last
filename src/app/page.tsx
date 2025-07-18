import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import FounderStory from '@/components/FounderStory';
import Comparison from '@/components/Comparison';
import IntegrationsSection from '@/components/IntegrationsSection';
import CTASection from '@/components/CTASection';
import TaskComparison from '@/components/TaskComparison';
import ROICalculator from '@/components/ROICalculator';
import Availability from '@/components/Availability';
import PricingSection from '@/components/PricingSection';
import TechSection from '@/components/TechSection';
import FaqSection from '@/components/FaqSection';
import DemoSection from '@/components/DemoSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CTASection />
      <IntegrationsSection />
      <TaskComparison />
      <ROICalculator />
      <PricingSection />
      <FounderStory />
      <Comparison />
      <TechSection />
      <Availability />
      <DemoSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
