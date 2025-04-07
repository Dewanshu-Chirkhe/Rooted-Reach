
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const MissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
              alt="Children making crafts" 
              className="rounded-lg shadow-md w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          
          <div>
            <h2 className="section-header mb-6">Our Mission</h2>
            <p className="text-deep_charcoal/80 mb-4 leading-relaxed">
              At Rooted Reach, we believe in the transformative power of creativity. Our mission is to provide mentally challenged children a platform to showcase their talents and craftsmanship.
            </p>
            <p className="text-deep_charcoal/80 mb-6 leading-relaxed">
              Every purchase you make directly supports these gifted children, helping build their confidence, skills, and sense of accomplishment. Together, we're creating opportunities and changing lives.
            </p>
            <Link to="/about">
              <Button className="btn-secondary">
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
