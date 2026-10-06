import Hero from '@/components/Hero';
import MetricsBar from '@/components/MetricsBar';
import ServicesGrid from '@/components/ServicesGrid';
import EquipmentShowcase from '@/components/EquipmentShowcase';
import CoverageMapSection from '@/components/CoverageMapSection';
import Testimonials from '@/components/Testimonials';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <AnimatedSection>
        <MetricsBar />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesGrid />
      </AnimatedSection>
      <AnimatedSection>
        <EquipmentShowcase />
      </AnimatedSection>
      <AnimatedSection>
        <CoverageMapSection />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
    </main>
  );
}