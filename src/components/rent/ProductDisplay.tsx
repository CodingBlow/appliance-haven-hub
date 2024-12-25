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
        <CardContent className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={productImage}
              alt={`${productId?.split("-").join(" ")} ${variant}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <Badge className="absolute top-4 right-4 bg-primary text-white">
              Available for Rent
            </Badge>
          </div>
          <div className="p-8">
            <h1 className="text-4xl font-bold capitalize mb-3">
              {productId?.split("-").join(" ")}
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium quality {productId?.split("-").join(" ")} available for flexible rental periods. 
              Perfect for homes and offices.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};