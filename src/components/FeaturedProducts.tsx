import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Split from "../assets/Product Image/Split AC.png";
import WindowAC from "../assets/Product Image/Window Ac.png";
import RoomHeater from "../assets/Product Image/Room Heater2.png";
import Fridge from "../assets/Product Image/Fridge1.png";
import WashingMachine from "../assets/Product Image/Washing Mac.png";
import Geyser from "../assets/Product Image/Geyser2.png";


const products = [
  {
    name: "Window AC",
    description: "Efficient cooling solutions",
    image: WindowAC,
    price: "₹2600/month",
    features: ["Energy efficient", "Quick installation", "24/7 support"],
  },
  {
    name: "Split AC",
    description: "Energy-efficient comfort",
    image: Split,
    price: "₹3200/month",
    features: ["Smart controls", "Low noise", "Premium brands"],
  },
  {
    name: "Room Heater",
    description: "Cozy winter warmth",
    image: RoomHeater,
    price: "₹2500/month",
    features: ["Instant heating", "Safe operation", "Multiple modes"],
  },
  {
    name: "Geyser",
    description: "Hot water on demand",
    image: Geyser,
    price: "₹1200/month",
    features: ["Energy saving", "Compact design", "Quick heating"],
  },
  {
    name: "Washing Machine",
    description: "Effortless laundry days",
    image: WashingMachine,
    price: "₹800/month",
    features: ["Top & front load", "Multiple wash modes", "Water efficient"],
  },
  {
    name: "Refrigerator",
    description: "Keep it fresh and cool",
    image: Fridge,
    price: "₹900/month",
    features: ["Spacious", "Energy efficient", "Modern design"],
  },
];

export const FeaturedProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 mb-4 text-sm font-semibold text-primary uppercase tracking-wider bg-primary/20 rounded-full">
            Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Premium Appliances for Rent
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our carefully curated selection of high-quality appliances with flexible rental plans.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-lg">
                <CardHeader className="relative">
                  <div className="aspect-square overflow-hidden rounded-lg mb-6 group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">{product.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="mr-2 text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full py-3 text-lg font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg"
                    onClick={() => navigate(`/rent/${product.name.toLowerCase().replace(' ', '-')}`)}
                  >
                    Rent Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
