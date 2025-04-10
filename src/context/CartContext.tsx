
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "./AuthContext";

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

type CartAction =
    | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
    | { type: "REMOVE_ITEM"; payload: { productId: string } }
    | {
          type: "UPDATE_QUANTITY";
          payload: { productId: string; quantity: number };
      }
    | { type: "CLEAR_CART" };

interface CartContextType {
    state: CartState;
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "ADD_ITEM": {
            const { product, quantity } = action.payload;
            const existingItemIndex = state.items.findIndex(
                (item) => item.product.id === product.id
            );

            if (existingItemIndex >= 0) {
                // Item exists, update quantity
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity:
                        updatedItems[existingItemIndex].quantity + quantity,
                };
                return { ...state, items: updatedItems };
            } else {
                // New item, add to cart
                return {
                    ...state,
                    items: [...state.items, { product, quantity }],
                };
            }
        }
        case "REMOVE_ITEM": {
            const { productId } = action.payload;
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.product.id !== productId
                ),
            };
        }
        case "UPDATE_QUANTITY": {
            const { productId, quantity } = action.payload;
            if (quantity <= 0) {
                return {
                    ...state,
                    items: state.items.filter(
                        (item) => item.product.id !== productId
                    ),
                };
            }
            return {
                ...state,
                items: state.items.map((item) =>
                    item.product.id === productId ? { ...item, quantity } : item
                ),
            };
        }
        case "CLEAR_CART":
            return { ...state, items: [] };
        default:
            return state;
    }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });
    const { state: authState } = useAuth();

    const addToCart = (product: Product, quantity = 1) => {
        if (!authState.isAuthenticated) {
            toast({
                title: "Authentication required",
                description: "Please sign in to add items to your cart.",
                variant: "destructive",
            });
            return;
        }

        dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
        toast({
            title: "Added to cart",
            description: `${product.name} has been added to your cart.`,
        });
    };

    const removeFromCart = (productId: string) => {
        dispatch({ type: "REMOVE_ITEM", payload: { productId } });
    };

    const updateQuantity = (productId: string, quantity: number) => {
        dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    const getTotalItems = () => {
        return state.items.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return state.items.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                state,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getTotalItems,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
