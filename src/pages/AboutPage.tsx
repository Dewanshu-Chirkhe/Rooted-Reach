
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-12 bg-soft_cream">
      <div className="container-custom max-w-4xl">
        <h1 className="page-header mb-8 text-center">About Rooted Reach</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
            alt="Children creating crafts" 
            className="w-full h-64 object-cover object-center" 
          />
          
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-deep_charcoal/80 mb-6 leading-relaxed">
              Rooted Reach began in 2018 with a simple yet powerful idea: to create a platform where mentally challenged children could share their unique creativity with the world. What started as a small workshop in New Delhi has grown into a vibrant community of young artisans, mentors, and supporters.
            </p>
            <p className="text-deep_charcoal/80 mb-6 leading-relaxed">
              We believe that every child, regardless of their challenges, has incredible potential and creativity within them. Through our craft programs, we provide a nurturing environment where these children can explore their talents, build skills, and gain confidence.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">Our Mission</h2>
            <p className="text-deep_charcoal/80 mb-6 leading-relaxed">
              Our mission at Rooted Reach is three-fold:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-deep_charcoal/80">
              <li>To provide mentally challenged children with opportunities to develop creative skills and express themselves through crafts</li>
              <li>To create a sustainable platform for these children to showcase and sell their creations</li>
              <li>To foster understanding and appreciation in society for the abilities and talents of mentally challenged individuals</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4 mt-8">How Your Purchase Helps</h2>
            <p className="text-deep_charcoal/80 mb-6 leading-relaxed">
              When you purchase a craft from Rooted Reach, you're doing much more than buying a product. You're:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-deep_charcoal/80">
              <li>Directly supporting the child who created it, with 80% of proceeds going to the artisan</li>
              <li>Funding our workshops, materials, and mentorship programs</li>
              <li>Helping us expand our reach to more children who can benefit from our programs</li>
              <li>Showing these talented children that their work is valued and appreciated</li>
            </ul>
            
            <div className="mt-8 text-center">
              <Link to="/products">
                <Button className="btn-primary">
                  Shop Our Crafts
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Our Location</h3>
              <address className="not-italic text-deep_charcoal/80 mb-4">
                123 Craft Lane<br />
                New Delhi, India 110001
              </address>
              
              <h3 className="text-lg font-medium mb-3">Email Us</h3>
              <p className="text-deep_charcoal/80 mb-4">
                <a href="mailto:info@rootedreach.org" className="text-terracotta hover:underline">
                  info@rootedreach.org
                </a>
              </p>
              
              <h3 className="text-lg font-medium mb-3">Call Us</h3>
              <p className="text-deep_charcoal/80">
                <a href="tel:+911234567890" className="text-terracotta hover:underline">
                  +91 123 456 7890
                </a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Hours</h3>
              <p className="text-deep_charcoal/80 mb-4">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
              
              <h3 className="text-lg font-medium mb-3">Support Our Cause</h3>
              <p className="text-deep_charcoal/80">
                If you'd like to volunteer, donate, or partner with us, please reach out via email or phone. We welcome support in all forms!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
