
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/context/ProductContext';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  const { products } = useProducts();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Get random products for featured section
    if (products.length > 0) {
      const randomProducts = [...products]
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(3, products.length));
      
      setFeaturedProducts(randomProducts);
    }
  }, [products]);

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-soft_cream">
      <div className="container-custom">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="section-header">Featured Crafts</h2>
          <Link to="/products">
            <Button variant="link" className="text-terracotta hover:text-terracotta/80">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
