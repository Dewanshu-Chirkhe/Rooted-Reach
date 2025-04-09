import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const CartPage = () => {
    const { state, getTotalPrice, clearCart } = useCart();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [checkoutComplete, setCheckoutComplete] = useState(false);

    const handleCheckout = () => {
        setIsCheckingOut(true);

        // Simulate checkout process
        setTimeout(() => {
            setIsCheckingOut(false);
            setCheckoutComplete(true);
            clearCart();

            // Show success toast
            toast({
                title: "Order placed successfully!",
                description: "Thank you for supporting our children's crafts.",
            });
        }, 1500);
    };

    if (checkoutComplete) {
        return (
            <div className="min-h-screen py-12 bg-white">
                <div className="container-custom max-w-4xl">
                    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h1 className="text-2xl font-bold mb-4">
                            Thank You for Your Order!
                        </h1>
                        <p className="text-deep_charcoal/80 mb-6">
                            Your purchase directly supports mentally challenged
                            children and helps them develop skills and
                            confidence.
                        </p>
                        <Link to="/products">
                            <Button className="btn-primary">
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 bg-white">
            <div className="container-custom max-w-4xl">
                <h1 className="page-header mb-8">Your Cart</h1>

                {state.items.length > 0 ? (
                    <>
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="p-6">
                                {state.items.map((item) => (
                                    <CartItem
                                        key={item.product.id}
                                        item={item}
                                    />
                                ))}
                            </div>

                            <div className="border-t border-gray-200 p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-medium">
                                        Subtotal
                                    </span>
                                    <span className="font-semibold">
                                        ₹{getTotalPrice().toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <span className="font-medium">
                                        Shipping
                                    </span>
                                    <span className="font-semibold">Free</span>
                                </div>
                                <div className="flex justify-between items-center text-lg font-bold mb-8">
                                    <span>Total</span>
                                    <span className="text-terracotta">
                                        ₹{getTotalPrice().toFixed(2)}
                                    </span>
                                </div>
                                <Button
                                    className="w-full btn-primary"
                                    onClick={handleCheckout}
                                    disabled={isCheckingOut}
                                >
                                    {isCheckingOut ? (
                                        <div className="flex items-center">
                                            <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                                            Processing...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center">
                                            <ShoppingCart className="mr-2 h-4 w-4" />{" "}
                                            Checkout
                                        </div>
                                    )}
                                </Button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Link
                                to="/products"
                                className="inline-flex items-center text-terracotta hover:text-terracotta/80"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" /> Continue
                                Shopping
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <ShoppingCart className="h-8 w-8 text-gray-400" />
                        </div>
                        <h2 className="text-xl font-medium mb-4">
                            Your cart is empty
                        </h2>
                        <p className="text-deep_charcoal/70 mb-6">
                            Looks like you haven't added any products to your
                            cart yet.
                        </p>
                        <Link to="/products">
                            <Button className="btn-primary">
                                Browse Products
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
