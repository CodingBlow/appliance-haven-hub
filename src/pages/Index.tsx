import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Services } from "@/components/Services";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Hero />
      <FeaturedProducts />
      <Services />
    </motion.div>
  );
};

export default Index;