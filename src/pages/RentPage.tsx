import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNavigate } from 'react-router-dom';

// Product-specific variants
const productVariants = {
  "window-ac": ["1.0 TON", "1.5 TON", "2.0 TON"],
  "split-ac": ["1.0 TON", "1.5 TON", "2.0 TON"],
  "room-heater": ["1000W", "1500W", "2000W"],
  geyser: ["10L", "15L", "25L"],
  refrigerator: ["180L", "250L", "350L"],
  "washing-machine": ["6KG", "7.5KG", "9KG"],
};

const getPricing = (productId: string, duration: string, variant: string) => {
  const variantPrices = {
    "window-ac": {
      "1.0 TON": { daily: 299, monthly: 5999, yearly: 59999 },
      "1.5 TON": { daily: 399, monthly: 7999, yearly: 79999 },
      "2.0 TON": { daily: 499, monthly: 9999, yearly: 99999 },
    },
    "split-ac": {
      "1.0 TON": { daily: 399, monthly: 7999, yearly: 79999 },
      "1.5 TON": { daily: 499, monthly: 9999, yearly: 99999 },
      "2.0 TON": { daily: 599, monthly: 11999, yearly: 119999 },
    },
    "room-heater": {
      "1000W": { daily: 99, monthly: 1999, yearly: 19999 },
      "1500W": { daily: 149, monthly: 2999, yearly: 29999 },
      "2000W": { daily: 199, monthly: 3999, yearly: 39999 },
    },
    geyser: {
      "10L": { daily: 149, monthly: 2999, yearly: 29999 },
      "15L": { daily: 199, monthly: 3999, yearly: 39999 },
      "25L": { daily: 249, monthly: 4999, yearly: 49999 },
    },
    refrigerator: {
      "180L": { daily: 199, monthly: 3999, yearly: 39999 },
      "250L": { daily: 249, monthly: 4999, yearly: 49999 },
      "350L": { daily: 299, monthly: 5999, yearly: 59999 },
    },
    "washing-machine": {
      "6KG": { daily: 199, monthly: 3999, yearly: 39999 },
      "7.5KG": { daily: 249, monthly: 4999, yearly: 49999 },
      "9KG": { daily: 299, monthly: 5999, yearly: 59999 },
    },
  };

  return (
    variantPrices[productId as keyof typeof variantPrices]?.[variant]?.[
      duration
    ] || 2999
  );
};

const getProductImage = (productId: string) => {
  const images = {
    "window-ac":
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80",
    "split-ac":
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80",
    "room-heater":
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80",
    geyser:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80",
    refrigerator:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80",
    "washing-machine":
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=400&q=80",
  };
  return images[productId as keyof typeof images] || images["window-ac"];
};

const RentPage = () => {
  const navigate = useNavigate();
  const TELEGRAM_BOT_TOKEN = "7549216853:AAHHWzqTmib1CvR5DFZH-zgqYCRakxM8vkc";
  const TELEGRAM_CHAT_ID = "1684000886";
  const { productId } = useParams();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    duration: "monthly",
    variant:
      productVariants[productId as keyof typeof productVariants]?.[0] || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Construct the message
    const message = `
  Rental Request:
  Name: ${formData.name}
  Email: ${formData.email}
  Phone: ${formData.phone}
  Address: ${formData.address}
  Duration: ${formData.duration}
  Variant: ${formData.variant}
    `;

    // Send data to Telegram
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message to Telegram");
      }

      toast({
        title: "Request Submitted!",
        description: "We'll contact you shortly to confirm your rental.",
      });
      navigate("/");
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      toast({
        title: "Submission Failed",
        description: "Unable to send your request. Please try again later.",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const currentPrice = getPricing(
    productId || "",
    formData.duration,
    formData.variant
  );
  const productImage = getProductImage(productId || "");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-8">
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
                <CardTitle className="text-2xl">
                  Rent {productId?.split("-").join(" ")}
                </CardTitle>
                <CardDescription>
                  Select your rental preferences
                </CardDescription>
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
                      <h3 className="text-lg font-semibold mb-2">
                        Current Pricing
                      </h3>
                      <p className="text-3xl font-bold text-primary">
                        ₹{currentPrice}/{formData.duration}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {formData.variant} variant
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Label>Rental Duration</Label>
                        <RadioGroup
                          defaultValue="monthly"
                          onValueChange={(value) =>
                            setFormData({ ...formData, duration: value })
                          }
                          className="grid grid-cols-3 gap-4 mt-2"
                        >
                          {["daily", "monthly", "yearly"].map((duration) => (
                            <div key={duration}>
                              <RadioGroupItem
                                value={duration}
                                id={duration}
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor={duration}
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                              >
                                <span className="capitalize">{duration}</span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div>
                        <Label>Variant</Label>
                        <RadioGroup
                          defaultValue={formData.variant}
                          onValueChange={(value) =>
                            setFormData({ ...formData, variant: value })
                          }
                          className="grid grid-cols-3 gap-4 mt-2"
                        >
                          {productVariants[
                            productId as keyof typeof productVariants
                          ]?.map((variant) => (
                            <div key={variant}>
                              <RadioGroupItem
                                value={variant}
                                id={variant}
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor={variant}
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                              >
                                <span>{variant}</span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full">
                            Submit Rental Request
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              Complete Your Rental Request
                            </DialogTitle>
                          </DialogHeader>
                          <form
                            onSubmit={handleSubmit}
                            className="space-y-4 mt-4"
                          >
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
                            <div>
                              <Label htmlFor="address">Address</Label>
                              <Input
                                id="address"
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleInputChange}
                              />
                            </div>
                            <Button type="submit" className="w-full">
                              Submit
                            </Button>
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
