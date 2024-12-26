import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: "window-ac",
      name: "Window AC",
      image: "/ac-1.jpg",
      description: "Efficient cooling for small to medium rooms",
      price: "Starting from ₹7869"
    },
    {
      id: "split-ac",
      name: "Split AC",
      image: "/ac-2.jpg",
      description: "Premium cooling solution for larger spaces",
      price: "Starting from ₹9772"
    },
    {
      id: "room-heater",
      name: "Room Heater",
      image: "/heater.jpg", // Add image path
      description: "Ideal for warming small to medium-sized rooms",
      price: "Starting from ₹2500"
    },
    {
      id: "geyser",
      name: "Geyser",
      image: "/geyser.jpg", // Add image path
      description: "Reliable heating for your water needs",
      price: "Starting from ₹2500"
    },
    {
      id: "refrigerator",
      name: "Refrigerator",
      image: "/refrigerator.jpg", // Add image path
      description: "Efficient cooling and storage for your groceries",
      price: "Starting from ₹3680"
    },
    {
      id: "washing-machine",
      name: "Washing Machine",
      image: "/washing-machine.jpg", // Add image path
      description: "Convenient laundry solution for your home",
      price: "Starting from ₹3220"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="text-primary font-semibold">{product.price}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button
                        className="w-full"
                        onClick={() => navigate(`/rent/${product.id}`)}
                      >
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
