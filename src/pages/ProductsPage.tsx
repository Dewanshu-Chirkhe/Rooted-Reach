import { useState, useEffect } from "react";
import { useProducts } from "@/context/ProductContext";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const ProductsPage = () => {
    const { products, getCategories } = useProducts();
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = getCategories();

    useEffect(() => {
        let result = products;

        // Apply category filter
        if (selectedCategory !== "All") {
            result = result.filter(
                (product) => product.category === selectedCategory
            );
        }

        // Apply search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(
                (product) =>
                    product.name.toLowerCase().includes(term) ||
                    product.description.toLowerCase().includes(term)
            );
        }

        setFilteredProducts(result);
    }, [products, searchTerm, selectedCategory]);

    return (
        <div className="min-h-screen py-12 bg-white">
            <div className="container-custom">
                <h1 className="page-header text-center mb-10">
                    Handcrafted Products
                </h1>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Search */}
                        <div className="relative">
                            <Label htmlFor="search" className="mb-2 block">
                                Search
                            </Label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    id="search"
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    className="pl-10"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div>
                            <Label htmlFor="category" className="mb-2 block">
                                Category
                            </Label>
                            <Select
                                value={selectedCategory}
                                onValueChange={(value) =>
                                    setSelectedCategory(value)
                                }
                            >
                                <SelectTrigger id="category">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border border-gray-200 shadow-md rounded-md z-50">
                                    {categories.map((category) => (
                                        <SelectItem
                                            key={category}
                                            value={category}
                                            className="cursor-pointer hover:bg-gray-100 px-4 py-2 text-deep_charcoal"
                                        >
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {filteredProducts.length > 0 ? (
                    <>
                        <div className="mb-4 text-deep_charcoal/70">
                            Showing {filteredProducts.length}{" "}
                            {filteredProducts.length === 1
                                ? "product"
                                : "products"}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center py-10">
                        <h3 className="text-xl font-medium mb-2">
                            No products found
                        </h3>
                        <p className="text-deep_charcoal/70">
                            Try adjusting your search or filter criteria
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;
