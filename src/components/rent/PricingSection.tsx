import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Calendar, Package } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PricingSectionProps {
  duration: string;
  variant: string;
  currentPrice: number;
  productVariants: string[];
  availableMonths: number[];
  onDurationChange: (value: string) => void;
  onVariantChange: (value: string) => void;
  onMonthsChange?: (value: string) => void;
  selectedMonths?: string;
  onSubmitClick: () => void;
}

export const PricingSection = ({
  duration,
  variant,
  currentPrice,
  productVariants,
  availableMonths,
  onVariantChange,
  onMonthsChange,
  selectedMonths,
  onSubmitClick,
}: PricingSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-2xl font-bold">Rental Options</h2>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">₹{currentPrice}</p>
              <p className="text-sm text-muted-foreground">
                per {duration === "monthly" && selectedMonths ? `${selectedMonths} months` : duration}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* <div>
              <Label className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Rental Duration
              </Label>
              <RadioGroup
                defaultValue="monthly"
                value={duration}
                onValueChange={onDurationChange}
                className="grid grid-cols-2 gap-3"
              >
                {["monthly", "yearly"].map((d) => (
                  <div key={d}>
                    <RadioGroupItem value={d} id={d} className="peer sr-only" />
                    <Label
                      htmlFor={d}
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                    >
                      <Calendar className="h-5 w-5 mb-2" />
                      <span className="capitalize text-sm">{d}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div> */}
            <div>
              <Label className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Package className="h-4 w-4" /> Capacity Variant
              </Label>
              <RadioGroup
                value={variant}
                onValueChange={onVariantChange}
                className="grid grid-cols-3 gap-3"
              >
                {productVariants?.map((v) => (
                  <div key={v}>
                    <RadioGroupItem value={v} id={v} className="peer sr-only" />
                    <Label
                      htmlFor={v}
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all text-sm"
                    >
                      <span>{v}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            {duration === "monthly" && (
              <div>
                <Label className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Number of Months
                </Label>
                <Select onValueChange={onMonthsChange} value={selectedMonths}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900">
                    {availableMonths.map((month) => (
                      <SelectItem key={month} value={month.toString()}>
                        {month} {month === 1 ? 'month' : 'months'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground mt-2">
                  The longer you rent, the lesser you spend per month
                </p>
              </div>
            )}

          

            <div className="space-y-3">
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Refundable security deposit: ₹1,000</p>
                <p>• All payments are due in advance on delivery</p>
                <p>• Free maintenance covered for all rental products</p>
              </div>
              
              <Button 
                onClick={onSubmitClick}
                className="w-full py-5 text-base font-semibold"
              >
                Submit Rental Request
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};