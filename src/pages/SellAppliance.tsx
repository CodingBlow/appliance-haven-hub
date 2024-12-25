import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SellAppliance = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success!",
        description: "Your appliance listing has been submitted for review.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-8 text-center">Sell Your Appliance</h1>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="applianceType">Appliance Type</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select appliance type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="window-ac">Window AC</SelectItem>
                          <SelectItem value="split-ac">Split AC</SelectItem>
                          <SelectItem value="portable-ac">Portable AC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="brand">Brand</Label>
                      <Input id="brand" placeholder="Enter brand name" required />
                    </div>

                    <div>
                      <Label htmlFor="model">Model</Label>
                      <Input id="model" placeholder="Enter model number" required />
                    </div>

                    <div>
                      <Label htmlFor="age">Age of Appliance</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Age in years"
                        min="0"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="condition">Condition</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="like-new">Like New</SelectItem>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="price">Expected Price (₹)</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="Enter your expected price"
                        min="0"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your appliance's features and condition"
                        className="h-32"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="images">Upload Images</Label>
                      <Input
                        id="images"
                        type="file"
                        accept="image/*"
                        multiple
                        required
                        className="cursor-pointer"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Upload up to 5 images of your appliance
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Listing"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SellAppliance;