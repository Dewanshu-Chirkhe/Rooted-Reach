
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-sage/30 to-muted_yellow/30 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Handcrafted with <span className="text-terracotta">Love</span> and <span className="text-sage">Purpose</span>
          </h1>
          <p className="text-xl text-deep_charcoal/80 mb-8 leading-relaxed">
            Discover beautiful crafts made by mentally challenged children. 
            Each purchase supports their growth, confidence, and independence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button className="btn-primary text-base px-6 py-3">
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="text-base px-6 py-3 border-terracotta text-terracotta hover:bg-terracotta/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-muted_yellow/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 -right-20 w-72 h-72 bg-sage/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
