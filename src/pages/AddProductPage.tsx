
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useProducts } from '@/context/ProductContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Image, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  price: string;
  description: string;
  category: string;
}

const AddProductPage = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<FormData>({
    defaultValues: {
      name: '',
      price: '',
      description: '',
      category: '',
    }
  });
  
  const category = watch('category');

  const categoryOptions = ['Handbags', 'Home Decor', 'Book Binding', 'Jewelry', 'Accessories'];
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // For this demo, we'll use placeholder images
      const placeholderImages = [
        'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07'
      ];
      
      // Create new product
      const newProduct = {
        name: data.name,
        price: parseFloat(data.price),
        description: data.description,
        category: data.category,
        image: imageUrl || placeholderImages[Math.floor(Math.random() * placeholderImages.length)]
      };
      
      // Fake delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add product
      addProduct(newProduct);
      
      // Reset form
      reset();
      setImageUrl('');
      
      // Navigate to products page
      navigate('/products');
    } catch (error) {
      console.error('Error adding product:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };
  
  const handleCategoryChange = (value: string) => {
    setValue('category', value);
  };

  return (
    <div className="min-h-screen py-12 bg-soft_cream">
      <div className="container-custom max-w-2xl">
        <h1 className="page-header mb-8">Add New Product</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Product Name */}
            <div>
              <Label htmlFor="name" className="mb-2 block">
                Product Name*
              </Label>
              <Input
                id="name"
                {...register('name', { required: 'Product name is required' })}
                error={errors.name?.message}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            
            {/* Price */}
            <div>
              <Label htmlFor="price" className="mb-2 block">
                Price* (in USD)
              </Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0.01"
                {...register('price', { 
                  required: 'Price is required',
                  min: { value: 0.01, message: 'Price must be greater than 0' } 
                })}
                error={errors.price?.message}
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
              )}
            </div>
            
            {/* Category */}
            <div>
              <Label htmlFor="category" className="mb-2 block">
                Category*
              </Label>
              <Select 
                value={category} 
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger id="category" className={errors.category ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categoryOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
              )}
            </div>
            
            {/* Description */}
            <div>
              <Label htmlFor="description" className="mb-2 block">
                Description*
              </Label>
              <Textarea
                id="description"
                rows={4}
                {...register('description', { 
                  required: 'Description is required',
                  minLength: { value: 10, message: 'Description must be at least 10 characters' } 
                })}
                error={errors.description?.message}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>
            
            {/* Image URL (optional) */}
            <div>
              <Label htmlFor="image" className="mb-2 block">
                Image URL (Optional - random image will be used if empty)
              </Label>
              <div className="flex">
                <div className="relative flex-grow">
                  <Image className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="image"
                    className="pl-10"
                    placeholder="Enter image URL"
                    value={imageUrl}
                    onChange={handleImageUrlChange}
                  />
                </div>
              </div>
              <p className="text-sm text-deep_charcoal/70 mt-1">
                Leave empty to use a placeholder image
              </p>
            </div>
            
            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding Product...
                </>
              ) : (
                'Add Product'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
