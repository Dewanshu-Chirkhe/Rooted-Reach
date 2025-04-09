import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-auto">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">
                            Rooted Reach
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Supporting mentally challenged children through
                            creativity and craftsmanship.
                        </p>
                        <p className="text-gray-300">
                            © {new Date().getFullYear()} Rooted Reach. All
                            rights reserved.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-4 text-white">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-300 hover:text-primary transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    className="text-gray-300 hover:text-primary transition-colors"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-300 hover:text-primary transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/add-product"
                                    className="text-gray-300 hover:text-primary transition-colors"
                                >
                                    Add Product
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-4 text-white">
                            Contact
                        </h4>
                        <address className="text-gray-300 not-italic">
                            <p className="mb-2">RCOEM</p>
                            <p className="mb-2">Nagpur, India 440013</p>
                            <p className="mb-2">Email: rootedreach@gmail.com</p>
                            <p>Phone: +91 937 015 XXXX</p>
                        </address>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
