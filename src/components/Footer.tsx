
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-deep_charcoal text-white py-12 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Rooted Reach</h3>
            <p className="text-gray-300 mb-4">
              Supporting mentally challenged children through creativity and craftsmanship.
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} Rooted Reach. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-muted_yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-muted_yellow transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-muted_yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/add-product" className="text-gray-300 hover:text-muted_yellow transition-colors">
                  Add Product
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Contact</h4>
            <address className="text-gray-300 not-italic">
              <p className="mb-2">123 Craft Lane</p>
              <p className="mb-2">New Delhi, India 110001</p>
              <p className="mb-2">Email: info@rootedreach.org</p>
              <p>Phone: +91 123 456 7890</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
