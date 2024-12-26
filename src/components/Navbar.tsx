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
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-20" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-lg rounded-md">
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink asChild>
                      <Link to="/products" className="block p-2 hover:bg-muted rounded-md">
                        All Products
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/rent/window-ac" className="block p-2 hover:bg-muted rounded-md">
                        Window AC
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/rent/split-ac" className="block p-2 hover:bg-muted rounded-md">
                        Split AC
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/rent/room-heater" className="block p-2 hover:bg-muted rounded-md">
                        Room Heaters
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/rent/geyser" className="block p-2 hover:bg-muted rounded-md">
                        Geysers
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/rent/refrigerator" className="block p-2 hover:bg-muted rounded-md">
                        Refrigerators
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/rent/washing-machine" className="block p-2 hover:bg-muted rounded-md">
                        Washing Machines
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white shadow-lg rounded-md">
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink asChild>
                      <Link to="/sell" className="block p-2 hover:bg-muted rounded-md">
                        Sell Your Appliance
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/maintenance" className="block p-2 hover:bg-muted rounded-md">
                        Maintenance
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about" className="text-primary hover:underline">
                  About Us
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className="text-primary hover:underline">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

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

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-black" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-md p-4 md:hidden">
            <div className="space-y-4">
              <Link to="/products" className="block text-black text-xl hover:underline">
                All Products
              </Link>
              <Link to="/sell" className="block text-black text-xl hover:underline">
                Sell Your Appliance
              </Link>
              <Link to="/maintenance" className="block text-black text-xl hover:underline">
                Maintenance
              </Link>
              <Link to="/about" className="block text-black text-xl hover:underline">
                About Us
              </Link>
              <Link to="/contact" className="block text-black text-xl hover:underline">
                Contact
              </Link>
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