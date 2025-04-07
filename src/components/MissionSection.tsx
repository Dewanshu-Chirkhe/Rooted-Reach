
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MissionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-soft_cream/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-500 hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
              alt="Children making crafts" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/3] border border-muted"
            />
          </div>
          
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-deep_charcoal relative inline-block">
              Our Mission
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-terracotta rounded-full"></span>
            </h2>
            <p className="text-deep_charcoal/80 mb-4 leading-relaxed text-lg">
              At Rooted Reach, we believe in the transformative power of creativity. Our mission is to provide mentally challenged children a platform to showcase their talents and craftsmanship.
            </p>
            <p className="text-deep_charcoal/80 mb-8 leading-relaxed text-lg">
              Every purchase you make directly supports these gifted children, helping build their confidence, skills, and sense of accomplishment. Together, we're creating opportunities and changing lives.
            </p>
            <Link to="/about">
              <Button variant="default" className="bg-terracotta hover:bg-terracotta/90 text-white font-medium py-2.5 px-6 rounded-md transition-all shadow-md hover:shadow-lg">
                About Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
