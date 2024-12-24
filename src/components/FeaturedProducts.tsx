import { motion } from "framer-motion";

const products = [
  {
    name: "Window AC",
    description: "Efficient cooling solutions",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Split AC",
    description: "Energy-efficient comfort",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Room Heater",
    description: "Cozy winter warmth",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium Appliances for Rent
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated selection of high-quality appliances
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-secondary p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden rounded-xl mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-muted-foreground">{product.description}</p>
              <button className="mt-4 text-primary font-medium hover:text-primary/80 transition-colors">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};