import {
  Mail,
  PhoneCall,
  Copyright,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-500">
              Ac On Rent Gurugram
            </h3>
            <p className="text-gray-400">
              Premium appliance rental solutions with flexible plans and
              exceptional service.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/products" className="hover:text-primary">
                  Products
                </a>
              </li>
              <li>
                <a href="/maintenance" className="hover:text-primary">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:AcOnRentGurugram24@gmail.com"
                  className="hover:text-primary"
                >
                  AcOnRentGurugram24@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                <a href="tel:+918744982935" className="hover:text-primary">
                  087449 82935
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Sheetla Colony, Sector 34, Gurugram, Haryana 122001
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 text-gray-400">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <div className="flex items-center justify-center text-gray-400 mt-4">
            <Copyright className="h-4 w-4 mr-2" />
            <p>{currentYear} Ac On Rent Gurugram. All rights reserved.</p>
          </div>
          <div className="mt-4 text-center text-gray-400">
            <p>
              Website designed by{" "}
              <a
                href="https://www.zuridox.com"
                className="text-primary hover:underline"
              >
                Zuridox
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
