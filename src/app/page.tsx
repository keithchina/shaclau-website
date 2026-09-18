import Hero from '@/components/Hero';
import MetricsBar from '@/components/MetricsBar';
import ServicesGrid from '@/components/ServicesGrid';
import EquipmentShowcase from '@/components/EquipmentShowcase';
import CoverageMapSection from '@/components/CoverageMapSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <MetricsBar />
      <ServicesGrid />
      <EquipmentShowcase />
      <CoverageMapSection />
    </main>
  );
}