import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Package } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PricingSectionProps {
  duration: string;
  variant: string;
  currentPrice: number;
  productVariants: string[];
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
  onDurationChange,
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
    >
      <Card className="bg-white shadow-lg">
        <CardContent className="p-8 space-y-8">
          <div className="flex items-center justify-between border-b pb-6">
            <h2 className="text-3xl font-bold">Rental Options</h2>
            <div className="text-right">
              <p className="text-4xl font-bold text-primary">₹{currentPrice}</p>
              <p className="text-muted-foreground">
                per {duration === "monthly" && selectedMonths ? `${selectedMonths} months` : duration}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <Label className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" /> Rental Duration
              </Label>
              <RadioGroup
                defaultValue="monthly"
                onValueChange={onDurationChange}
                className="grid grid-cols-2 gap-4"
              >
                {["monthly", "yearly"].map((d) => (
                  <div key={d}>
                    <RadioGroupItem value={d} id={d} className="peer sr-only" />
                    <Label
                      htmlFor={d}
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-white p-6 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                    >
                      <Calendar className="h-6 w-6 mb-2" />
                      <span className="capitalize text-lg">{d}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {duration === "monthly" && (
              <div>
                <Label className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5" /> Number of Months
                </Label>
                <Select onValueChange={onMonthsChange} value={selectedMonths}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-gray-900">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) => (
                      <SelectItem key={month} value={month.toString()}>
                        {month} {month === 1 ? 'month' : 'months'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Package className="h-5 w-5" /> Capacity Variant
              </Label>
              <RadioGroup
                defaultValue={variant}
                onValueChange={onVariantChange}
                className="grid grid-cols-3 gap-4"
              >
                {productVariants?.map((v) => (
                  <div key={v}>
                    <RadioGroupItem value={v} id={v} className="peer sr-only" />
                    <Label
                      htmlFor={v}
                      className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-white p-6 hover:bg-gray-50 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                    >
                      <span className="text-lg">{v}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Button 
              onClick={onSubmitClick}
              className="w-full py-6 text-lg font-semibold"
            >
              Submit Rental Request
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};