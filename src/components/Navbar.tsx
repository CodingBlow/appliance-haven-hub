import { Menu } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary">
          ApplianceHaven
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-lg rounded-md">
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink asChild>
                      <a className="block p-2 hover:bg-muted rounded-md" href="/products">
                        All Products
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a className="block p-2 hover:bg-muted rounded-md" href="/products#ac">
                        Air Conditioners
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a className="block p-2 hover:bg-muted rounded-md" href="/products#heaters">
                        Heaters
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-lg rounded-md">
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink asChild>
                      <a className="block p-2 hover:bg-muted rounded-md" href="/services/rental">
                        Rental Plans
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a className="block p-2 hover:bg-muted rounded-md" href="/sell">
                        Sell Your Appliance
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a className="block p-2 hover:bg-muted rounded-md" href="/services/maintenance">
                        Maintenance
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/about" className="text-primary hover:underline">
                  About Us
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/contact" className="text-primary hover:underline">
                  Contact
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Section: Phone and WhatsApp */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-primary font-medium">
            <span>📞</span>
            <span>+1-234-567-8900</span>
          </div>
          <a
            href="https://wa.me/12345678900"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
          >
            WhatsApp Us
          </a>
          {/* Hamburger Menu (Black) */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-black" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-white shadow-md p-4 md:hidden">
            <div className="space-y-4">
              <a href="/products" className="block text-black text-xl hover:underline">
                All Products
              </a>
              <a href="/sell" className="block text-black text-xl hover:underline">
                Sell Your Appliance
              </a>
            <a href="/services/rental" className="block text-black text-xl hover:underline">
              Rental Plans
            </a>
            <a href="/services/trade-in" className="block text-black text-xl hover:underline">
              Trade-In Services
            </a>
            <a href="/services/maintenance" className="block text-black text-xl hover:underline">
              Maintenance
            </a>
            <a href="/services/installation" className="block text-black text-xl hover:underline">
              Installation Services
            </a>
            <a href="/about" className="block text-black text-xl hover:underline">
              About Us
            </a>
            <a href="/contact" className="block text-black text-xl hover:underline">
              Contact
            </a>
            <a
              href="https://wa.me/12345678900"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-green-500 text-white rounded-lg font-medium text-center"
            >
              WhatsApp Us
            </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
