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
      className="w-full"
    >
      <Card className="overflow-hidden bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="relative rounded-lg overflow-hidden bg-gray-50 p-4">
            <div className="aspect-square w-full max-w-[400px] mx-auto">
              <img
                src={productImage}
                alt={`${productId?.split("-").join(" ")} ${variant}`}
                className="w-full h-full object-contain"
              />
            </div>
            <Badge className="absolute top-4 right-4 bg-primary hover:bg-primary-hover text-white">
              Available for Rent
            </Badge>
          </div>
          <div className="mt-6 text-left">
            <h1 className="text-3xl font-bold capitalize mb-2 text-gray-900">
              {productId?.split("-").join(" ")}
            </h1>
            <p className="text-lg text-gray-600">
              Premium quality {productId?.split("-").join(" ")} available for flexible rental periods. 
              Perfect for homes and offices.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};