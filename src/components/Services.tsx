import { motion } from "framer-motion";
import { Clock, Truck, Wrench, Shield } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Flexible Plans",
    description: "Daily, monthly, or yearly rental options to suit your needs",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Complimentary delivery and professional installation",
  },
  {
    icon: Wrench,
    title: "24/7 Support",
    description: "Round-the-clock maintenance and technical assistance",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "All appliances undergo rigorous quality checks",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Exceptional Service, Every Step
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We go above and beyond to ensure your complete satisfaction
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};