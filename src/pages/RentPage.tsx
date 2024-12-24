import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const getPricing = (productId: string, duration: string, season: string) => {
  const basePrice = {
    "window-ac": 2999,
    "split-ac": 3499,
    "room-heater": 999,
  }[productId] || 1999;

  const durationMultiplier = {
    daily: 1,
    monthly: 25,
    yearly: 250,
  }[duration] || 1;

  const seasonMultiplier = season === "peak" ? 1.3 : 1;

  return Math.round(basePrice * seasonMultiplier / durationMultiplier);
};

const getProductImage = (productId: string) => {
  const images = {
    "window-ac": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80",
    "split-ac": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80",
    "room-heater": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80",
  };
  return images[productId as keyof typeof images] || images["window-ac"];
};

const RentPage = () => {
  const { productId } = useParams();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    duration: "monthly",
    season: "regular",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Request Submitted!",
      description: "We'll contact you shortly to confirm your rental.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const currentPrice = getPricing(productId || "", formData.duration, formData.season);
  const productImage = getProductImage(productId || "");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Rent {productId?.split('-').join(' ')}</CardTitle>
                <CardDescription>Select your rental preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="aspect-square overflow-hidden rounded-xl mb-6">
                      <img
                        src={productImage}
                        alt={productId}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-6 p-4 bg-primary/10 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Current Pricing</h3>
                      <p className="text-3xl font-bold text-primary">₹{currentPrice}/{formData.duration === "daily" ? "day" : formData.duration === "monthly" ? "month" : "year"}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {formData.season === "peak" ? "Peak season pricing applies" : "Regular season pricing"}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Label>Rental Duration</Label>
                        <RadioGroup
                          defaultValue="monthly"
                          onValueChange={(value) => setFormData({ ...formData, duration: value })}
                          className="grid grid-cols-3 gap-4 mt-2"
                        >
                          <div>
                            <RadioGroupItem value="daily" id="daily" className="peer sr-only" />
                            <Label
                              htmlFor="daily"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span>Daily</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
                            <Label
                              htmlFor="monthly"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span>Monthly</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="yearly" id="yearly" className="peer sr-only" />
                            <Label
                              htmlFor="yearly"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span>Yearly</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label>Season</Label>
                        <RadioGroup
                          defaultValue="regular"
                          onValueChange={(value) => setFormData({ ...formData, season: value })}
                          className="grid grid-cols-2 gap-4 mt-2"
                        >
                          <div>
                            <RadioGroupItem value="regular" id="regular" className="peer sr-only" />
                            <Label
                              htmlFor="regular"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span>Regular Season</span>
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="peak" id="peak" className="peer sr-only" />
                            <Label
                              htmlFor="peak"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span>Peak Season</span>
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full">Submit Rental Request</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Complete Your Rental Request</DialogTitle>
                          </DialogHeader>
                          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                            <div>
                              <Label htmlFor="name">Full Name</Label>
                              <Input
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                              />
                            </div>
                            <Button type="submit" className="w-full">Submit</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RentPage;