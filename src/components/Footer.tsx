import { Mail, Globe, Copyright } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-gray-400">
              Premium appliance rental solutions with flexible plans and exceptional service.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/products" className="hover:text-primary">Products</a></li>
              <li><a href="/services" className="hover:text-primary">Services</a></li>
              <li><a href="/about" className="hover:text-primary">About</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                support@appliancehaven.com
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                www.appliancehaven.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/privacy" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex items-center justify-center text-gray-400">
          <Copyright className="h-4 w-4 mr-2" />
          <p>{currentYear} ApplianceHaven. All rights reserved.</p>
        </div>
        <div className="mt-4 text-center text-gray-400">
          <p>Website designed by <a href="https://www.zuridox.com" className="text-primary hover:underline">Zuridox</a></p>
        </div>
      </div>
    </footer>
  );
};
