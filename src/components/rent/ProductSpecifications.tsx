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
    "window-ac": {
      highlights: [
        "Energy-efficient cooling performance",
        "Easy installation and maintenance",
        "Robust build quality for long-term use",
        "Multiple fan speed settings"
      ],
      features: [
        "Anti-bacterial filter for clean air",
        "Auto restart function after power cuts",
        "Sleep mode for comfortable nights",
        "Self-diagnosis feature for easy maintenance",
        "Rotary compressor for efficient cooling"
      ],
      sizingGuide: [
        "0.75 Ton: Suitable for up to 120 sq ft",
        "1.0 Ton: Ideal for 120-180 sq ft",
        "1.5 Ton: Perfect for 180-240 sq ft",
        "2.0 Ton: Best for 240-400 sq ft"
      ],
      brands: "Available brands include Voltas, Blue Star, Carrier, LG, Samsung, etc. (subject to availability)",
      note: "All pictures shown are for illustration purpose. Actual product may vary."
    },
    "split-ac": {
      highlights: [
        "Inverter technology for power savings",
        "Elegant design with LED display",
        "Wide air distribution",
        "Quick cooling technology"
      ],
      features: [
        "4-way air swing for uniform cooling",
        "Dual inverter compressor",
        "Anti-virus protection",
        "Low noise operation",
        "Smart diagnosis system"
      ],
      sizingGuide: [
        "1.0 Ton: Ideal for rooms up to 120 sq ft",
        "1.5 Ton: Perfect for 120-180 sq ft",
        "2.0 Ton: Suitable for 180-240 sq ft"
      ],
      brands: "Available brands include Daikin, Hitachi, LG, Samsung, etc. (subject to availability)",
      note: "All pictures shown are for illustration purpose. Actual product may vary."
    },
    "refrigerator": {
      highlights: [
        "Energy-efficient operation",
        "Multiple storage compartments",
        "Adjustable temperature control",
        "Quick freeze function"
      ],
      features: [
        "Multi-airflow system",
        "Toughened glass shelves",
        "Vegetable crisper",
        "Door alarm",
        "Anti-bacterial gasket"
      ],
      sizingGuide: [
        "150L-220L: Ideal for 2-3 members",
        "220L-400L: Perfect for 3-5 members"
      ],
      brands: "Available brands include LG, Samsung, Whirlpool, Godrej, etc. (subject to availability)",
      note: "All pictures shown are for illustration purpose. Actual product may vary."
    },
    "washing-machine": {
      highlights: [
        "Multiple wash programs",
        "Energy and water efficient",
        "Durable build quality",
        "Easy to use controls"
      ],
      features: [
        "Quick wash option",
        "Delay start function",
        "Child lock safety",
        "Auto-restart after power cuts",
        "Lint filter"
      ],
      sizingGuide: [
        "6-7 kg: Ideal for 3-4 members",
        "7-8 kg: Perfect for 4-6 members"
      ],
      brands: "Available brands include LG, Samsung, IFB, Whirlpool, etc. (subject to availability)",
      note: "All pictures shown are for illustration purpose. Actual product may vary."
    },
    "geyser": {
      highlights: [
        "Quick heating technology",
        "Safety cut-off system",
        "Corrosion-resistant tank",
        "Temperature control"
      ],
      features: [
        "Auto shut-off function",
        "High-pressure resistance",
        "Glass-lined tank",
        "Energy-efficient heating",
        "Long-lasting performance"
      ],
      sizingGuide: [
        "15L: Suitable for 2-3 members",
        "20L: Ideal for 3-4 members"
      ],
      brands: "Available brands include Bajaj, Havells, AO Smith, Venus, etc. (subject to availability)",
      note: "All pictures shown are for illustration purpose. Actual product may vary."
    }
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