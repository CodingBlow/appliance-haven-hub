import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

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
    // Here you would typically send the data to your backend
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

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Rent {productId?.split('-').join(' ')}</CardTitle>
              <CardDescription>Please fill out the form below to proceed with your rental</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
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
                </div>
                <Button type="submit" className="w-full">Submit Rental Request</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default RentPage;