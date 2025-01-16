import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-black pt-8 pb-4 invert">
        <div className="container mx-auto px-4 md:flex md:justify-between">
          {/* About Us Section */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">About Us</h4>
            <p className="text-sm">
              "Vijay Mobile & Accessories Shop specializes in providing the
              latest mobile devices along with a wide range of trendy
              accessories. <br />
              From stylish mobile covers and top-quality tempered glass screen
              protectors and fast chargers and audio accessories, we are{" "}
              <br></br>committed to offering only the best for our customers.
              With a focus on durability and style, we aim to keep your devices
              safe <br />
              and on-trend. Customer satisfaction and quality are at the heart
              of everything we do."
            </p>
          </div>
          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">
              shop no.1, 2, Near Shiv Mandir, Chanchal Chouraha, Bairagarh,
              <br /> Bhopal, 462030
            </p>
            <p className="text-sm">Phone: +91-9179280085</p>
            <p className="text-sm">Email: aryannagar193@gmail.com</p>
          </div>
          {/* /* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="flex gap-4 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-green-500">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        {/* footer bottom */}
        <div className="bg-white border-t border-gray-600 mt-6 pt-4 text-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Vijay Mobile Shop & Accessories.
            All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
