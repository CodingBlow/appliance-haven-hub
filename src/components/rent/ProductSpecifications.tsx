import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ProductSpecificationsProps {
  productId: string;
}

export const ProductSpecifications = ({ productId }: ProductSpecificationsProps) => {
  const specifications = {
    "room-heater": {
      highlights: [
        "Extra safety with tilt switch, Over heat protection & Thermostatic heat control",
        "Ease to use 2-3 power settings 1500 to 2500 Watt",
        "230 V. Frequency (hertz) : AC 50 Hz, 16Amper input Wire/Power Plug",
        "Castor wheels for easy mobility"
      ],
      features: [
        "No Oxygen Burning: Fresh and breathable air, ideal for closed spaces",
        "Maintains Humidity: Keeps natural moisture intact for added comfort",
        "Health-Friendly: Safe for kids, elderly, and respiratory health",
        "Energy-Efficient: Long-lasting warmth with low power consumption",
        "Silent & Safe: Noise-free and perfect for overnight use"
      ],
      sizingGuide: [
        "9 Fin: Best for standard bedroom (100-140 sq ft)",
        "11 Fin: Ideal for 140-180 sq ft",
        "12 Fin: Perfect for 180-200 sq ft",
        "13 Fin: Suitable for 200-220 sq ft"
      ],
      brands: "Available brands include Orient, Khetan, Bajaj, Maharaja, Vox, Delongi, Morphy, etc. (subject to availability)",
      note: "All pictures shown are for illustration purpose. Actual product may vary."
    },
    // Add specifications for other products here
  };

  const productSpecs = specifications[productId as keyof typeof specifications];

  if (!productSpecs) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-primary mb-2">Highlights</h4>
              <ul className="list-disc pl-5 space-y-2">
                {productSpecs.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-600">{highlight}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-primary mb-2">Key Features</h4>
              <ul className="list-disc pl-5 space-y-2">
                {productSpecs.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-primary mb-2">Size Guide</h4>
              <ul className="list-disc pl-5 space-y-2">
                {productSpecs.sizingGuide.map((size, index) => (
                  <li key={index} className="text-gray-600">{size}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-primary mb-2">Available Brands</h4>
              <p className="text-gray-600">{productSpecs.brands}</p>
            </div>

            <p className="text-sm text-gray-500 italic">{productSpecs.note}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};