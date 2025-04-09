import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense, lazy } from "react";

// Lazy load components
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const AddProductPage = lazy(() => import("./pages/AddProductPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const Loading = () => (
    <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
);

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <ProductProvider>
                <CartProvider>
                    <Toaster />
                    <Sonner />
                    <BrowserRouter>
                        <div className="flex flex-col min-h-screen">
                            <Navbar />
                            <Suspense fallback={<Loading />}>
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route
                                        path="/products"
                                        element={<ProductsPage />}
                                    />
                                    <Route
                                        path="/cart"
                                        element={<CartPage />}
                                    />
                                    <Route
                                        path="/add-product"
                                        element={<AddProductPage />}
                                    />
                                    <Route
                                        path="/about"
                                        element={<AboutPage />}
                                    />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </Suspense>
                            <Footer />
                        </div>
                    </BrowserRouter>
                </CartProvider>
            </ProductProvider>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
