import Hero from '@/components/Hero';
import MetricsBar from '@/components/MetricsBar';
import ServicesGrid from '@/components/ServicesGrid';
import EquipmentShowcase from '@/components/EquipmentShowcase';
import CoverageMapSection from '@/components/CoverageMapSection';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <MetricsBar />
      <ServicesGrid />
      <EquipmentShowcase />
      <CoverageMapSection />
      <Testimonials />
    </main>
  );
}