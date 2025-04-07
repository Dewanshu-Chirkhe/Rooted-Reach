
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import MissionSection from '@/components/MissionSection';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <FeaturedProducts />
      <MissionSection />
    </div>
  );
};

export default HomePage;
