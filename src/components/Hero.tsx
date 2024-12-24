import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Premium Appliance Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Rent Premium Appliances
            <br />
            <span className="text-primary">Hassle-Free Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access top-quality appliances with flexible rental plans and exceptional service. Experience comfort without commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Rent Now
            </button>
            <button className="px-8 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors">
              Sell Your Appliances
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};