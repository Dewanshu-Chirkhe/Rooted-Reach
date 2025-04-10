
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();
    const { state: authState } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        // If user is not authenticated, redirect to auth page
        if (!authState.isAuthenticated) {
            navigate("/auth");
            return;
        }
        
        // User is authenticated, add to cart
        addToCart(product);
    };

    return (
        <Card className="card-custom h-full flex flex-col">
            <div className="relative pt-[75%] bg-gray-100 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <CardContent className="p-4 flex-grow">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-deep_charcoal/70 text-sm mb-2">
                    {product.category}
                </p>
                <p className="font-medium text-terracotta text-lg">
                    ₹{product.price}
                </p>
                <p className="text-deep_charcoal/80 text-sm mt-3 line-clamp-3">
                    {product.description}
                </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs py-1"
                    onClick={handleAddToCart}
                >
                    <ShoppingCart className="mr-1.5 h-2.5 w-2.5" /> Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
