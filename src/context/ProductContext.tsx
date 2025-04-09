import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "./CartContext";
import { toast } from "@/components/ui/use-toast";

// Sample initial products
const initialProducts: Product[] = [
    {
        id: "1",
        name: "Handwoven Tote Bag",
        price: 700,
        description:
            "A beautiful handwoven tote bag made with natural fibers and recycled materials. Perfect for everyday use.",
        image: "https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Handbags",
    },
    {
        id: "2",
        name: "Embroidered Cushion Cover",
        price: 500,
        description:
            "Exquisitely embroidered cushion cover featuring traditional patterns and vibrant colors.",
        image: "https://cdn.pixabay.com/photo/2012/03/04/00/04/colorful-21747_1280.jpg",
        category: "Home Decor",
    },
    {
        id: "3",
        name: "Hand-bound Journal",
        price: 300,
        description:
            "Beautifully crafted journal with handmade paper and a unique fabric cover. Perfect for writing or sketching.",
        image: "https://cdn.pixabay.com/photo/2020/09/04/17/45/diary-5544547_1280.jpg",
        category: "Book Binding",
    },
    {
        id: "4",
        name: "Wall Hanging",
        price: 600,
        description:
            "Intricate wall hanging made with organic cotton rope and natural wooden beads.",
        image: "https://images.pexels.com/photos/3730860/pexels-photo-3730860.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Home Decor",
    },
    {
        id: "5",
        name: "Hand-painted Ceramic Mug",
        price: 200,
        description:
            "Unique ceramic mug featuring hand-painted designs and a comfortable handle. Microwave and dishwasher safe.",
        image: "https://images.pexels.com/photos/18702613/pexels-photo-18702613/free-photo-of-decorated-clay-cups.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "Ceramics",
    },
    {
        id: "6",
        name: "Beaded Statement Necklace",
        price: 200,
        description:
            "Stunning beaded necklace made with semi-precious stones and handcrafted metal components.",
        image: "https://images.pexels.com/photos/10061423/pexels-photo-10061423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "Jewelry",
    },
    {
        id: "7",
        name: "Wooden Photo Frame",
        price: 250,
        description:
            "Hand-carved wooden photo frame with intricate patterns and a natural finish.",
        image: "https://images.pexels.com/photos/8490193/pexels-photo-8490193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        category: "Woodwork",
    },
    {
        id: "8",
        name: "Hand-knitted Scarf",
        price: 700,
        description:
            "Soft and warm scarf made with premium wool, featuring a unique pattern and fringe details.",
        image: "https://images.pexels.com/photos/19469963/pexels-photo-19469963/free-photo-of-woman-sitting-on-bench.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Textiles",
    },
    {
        id: "9",
        name: "Decorative Clay Pot",
        price: 300,
        description:
            "Hand-thrown clay pot with beautiful glaze and decorative patterns. Perfect for plants or storage.",
        image: "https://images.pexels.com/photos/8063826/pexels-photo-8063826.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Ceramics",
    },
];

interface ProductContextType {
    products: Product[];
    loading: boolean;
    addProduct: (product: Omit<Product, "id">) => void;
    getProductById: (id: string) => Product | undefined;
    getProductsByCategory: (category: string) => Product[];
    getCategories: () => string[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [loading, setLoading] = useState<boolean>(false);

    const addProduct = (productData: Omit<Product, "id">) => {
        const newProduct = {
            ...productData,
            id: Date.now().toString(), // Simple ID generation for demo purposes
        };

        setProducts((prevProducts) => [...prevProducts, newProduct]);
        toast({
            title: "Product added",
            description: `${productData.name} has been added successfully.`,
        });
    };

    const getProductById = (id: string) => {
        return products.find((product) => product.id === id);
    };

    const getProductsByCategory = (category: string) => {
        if (category === "All") return products;
        return products.filter((product) => product.category === category);
    };

    const getCategories = () => {
        const categories = new Set(products.map((product) => product.category));
        return ["All", ...Array.from(categories)];
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                loading,
                addProduct,
                getProductById,
                getProductsByCategory,
                getCategories,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
};
