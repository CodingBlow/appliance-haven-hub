import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductDisplayProps {
  productId: string;
  productImage: string;
  variant: string;
}

export const ProductDisplay = ({ productId, productImage, variant }: ProductDisplayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[400px] mx-auto" // Slightly increased max width
    >
      <Card className="overflow-hidden bg-white shadow-md"> {/* Moderate shadow */}
        <CardContent className="p-5"> {/* Increased padding */}
          <div className="relative rounded-lg overflow-hidden bg-gray-50 p-3"> {/* Adjusted padding */}
            <div className="aspect-square w-full max-w-[350px] mx-auto"> {/* Slightly larger image */}
              <img
                src={productImage}
                alt={`${productId?.split("-").join(" ")} ${variant}`}
                className="w-full h-full object-contain"
              />
            </div>
            <Badge className="absolute top-3 right-3 bg-primary hover:bg-primary-hover text-white text-sm"> {/* Slightly larger badge */}
              Available for Rent
            </Badge>
          </div>
          <div className="mt-5 text-left"> {/* Adjusted spacing */}
            <h1 className="text-2xl font-bold capitalize mb-2 text-gray-900"> {/* Increased heading size */}
              {productId?.split("-").join(" ")}
            </h1>
            <p className="text-base text-gray-600"> {/* Slightly larger description */}
              Premium quality {productId?.split("-").join(" ")} available for flexible rental periods. 
              Perfect for homes and offices.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
