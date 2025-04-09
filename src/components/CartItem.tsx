
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { Trash, Plus, Minus } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { product, quantity } = item;
  const { updateQuantity, removeFromCart } = useCart();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setIsUpdating(true);
      updateQuantity(product.id, newQuantity);
      setTimeout(() => setIsUpdating(false), 300);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
      <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 py-4">
          <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-0 sm:mr-4 mb-4 sm:mb-0 flex-shrink-0">
              <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
              />
          </div>

          <div className="flex-grow">
              <h3 className="font-medium text-lg text-deep_charcoal">
                  {product.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                  {product.category}
              </p>
              <p className="font-medium text-terracotta">
                  ₹{product.price.toFixed(2)}
              </p>
          </div>

          <div className="flex items-center mt-4 sm:mt-0">
              <div className="flex items-center border rounded-md mr-4">
                  <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-r-none"
                      onClick={() => handleUpdateQuantity(quantity - 1)}
                      disabled={isUpdating || quantity <= 1}
                  >
                      <Minus className="h-3 w-3" />
                  </Button>

                  <span className="w-8 text-center">{quantity}</span>

                  <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-l-none"
                      onClick={() => handleUpdateQuantity(quantity + 1)}
                      disabled={isUpdating}
                  >
                      <Plus className="h-3 w-3" />
                  </Button>
              </div>

              <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={handleRemove}
              >
                  <Trash className="h-4 w-4" />
              </Button>
          </div>
      </div>
  );
};

export default CartItem;
