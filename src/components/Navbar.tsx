import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { getTotalItems } = useCart();
    const { state: authState, signOut } = useAuth();
    const { clearCart } = useCart();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSignOut = () => {
        clearCart();
        signOut();
        navigate("/");
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "About", path: "/about" },
    ];

    // Add the "Add Product" link only if user is authenticated
    if (authState.isAuthenticated) {
        navLinks.push({ name: "Add Product", path: "/add-product" });
    }

    const getInitials = (username: string) => {
        if (!username) return "";

        return username
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase();
    };

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container-custom py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold text-terracotta">
                            Rooted Reach
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium transition-colors hover:text-terracotta ${
                                    location.pathname === link.path
                                        ? "text-terracotta"
                                        : "text-deep_charcoal"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Auth & Cart Buttons */}
                    <div className="flex items-center space-x-2">
                        {authState.isAuthenticated ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="relative p-2"
                                    >
                                        <Avatar className="h-8 w-8 bg-sage text-deep_charcoal font-semibold">
                                            <AvatarFallback className="bg-sage text-deep_charcoal">
                                                {getInitials(
                                                    authState.user?.username ||
                                                        ""
                                                )}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    className="bg-white shadow-md border border-gray-200"
                                >
                                    <DropdownMenuLabel className="text-black">
                                        {authState.user?.username}
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={handleSignOut}
                                        className="cursor-pointer text-black"
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        Sign out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Button
                                variant="ghost"
                                onClick={() => navigate("/auth")}
                                className="p-2"
                            >
                                <User className="h-5 w-5" />
                            </Button>
                        )}

                        <Link to="/cart">
                            <Button variant="ghost" className="relative p-2">
                                <ShoppingCart className="h-5 w-5" />
                                {getTotalItems() > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-terracotta text-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {getTotalItems()}
                                    </span>
                                )}
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                onClick={toggleMenu}
                                className="p-2"
                            >
                                {isMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-2 animate-fade-in">
                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`py-2 px-4 rounded-md font-medium transition-colors ${
                                        location.pathname === link.path
                                            ? "bg-sage/10 text-terracotta"
                                            : "text-deep_charcoal hover:bg-sage/10"
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {!authState.isAuthenticated && (
                                <Link
                                    to="/auth"
                                    className="py-2 px-4 rounded-md font-medium transition-colors text-deep_charcoal hover:bg-sage/10"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign In / Sign Up
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
