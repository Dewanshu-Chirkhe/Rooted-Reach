
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from './CartContext';
import { toast } from "@/components/ui/use-toast";

// Sample initial products
const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Handwoven Tote Bag',
    price: 35.99,
    description: 'A beautiful handwoven tote bag made with natural fibers and recycled materials. Perfect for everyday use.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    category: 'Handbags'
  },
  {
    id: '2',
    name: 'Embroidered Cushion Cover',
    price: 24.99,
    description: 'Exquisitely embroidered cushion cover featuring traditional patterns and vibrant colors.',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    category: 'Home Decor'
  },
  {
    id: '3',
    name: 'Hand-bound Journal',
    price: 18.50,
    description: 'Beautifully crafted journal with handmade paper and a unique fabric cover. Perfect for writing or sketching.',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    category: 'Book Binding'
  },
  {
    id: '4',
    name: 'Macramé Wall Hanging',
    price: 29.99,
    description: 'Intricate macramé wall hanging made with organic cotton rope and natural wooden beads.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    category: 'Home Decor'
  }
];

interface ProductContextType {
  products: Product[];
  loading: boolean;
  addProduct: (product: Omit<Product, 'id'>) => void;
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (category: string) => Product[];
  getCategories: () => string[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState<boolean>(false);

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct = {
      ...productData,
      id: Date.now().toString() // Simple ID generation for demo purposes
    };
    
    setProducts(prevProducts => [...prevProducts, newProduct]);
    toast({
      title: "Product added",
      description: `${productData.name} has been added successfully.`,
    });
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (category: string) => {
    if (category === 'All') return products;
    return products.filter(product => product.category === category);
  };

  const getCategories = () => {
    const categories = new Set(products.map(product => product.category));
    return ['All', ...Array.from(categories)];
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        addProduct,
        getProductById,
        getProductsByCategory,
        getCategories
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
