import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductDisplay } from "@/components/rent/ProductDisplay";
import { PricingSection } from "@/components/rent/PricingSection";
import { RentalForm } from "@/components/rent/RentalForm";
import { OfferDialog } from "@/components/rent/OfferDialog";
import { Link } from "react-router-dom";

const productVariants = {
  "window-ac": ["1.0 TON", "1.5 TON", "2.0 TON"],
  "split-ac": ["1.0 TON", "1.5 TON", "2.0 TON"],
  "room-heater": ["1000W", "1500W", "2000W"],
  geyser: ["10L", "15L", "25L"],
  refrigerator: ["180L", "250L", "350L"],
  "washing-machine": ["6KG", "7.5KG", "9KG"],
};

const getPricing = (
  productId: string,
  duration: string,
  variant: string,
  months: number = 1
) => {
  const basePrice = {
    "window-ac": {
      "0.75 TON": {
        3: 7869,
        4: 8600,
        5: 9245,
        6: 9804,
        7: 10234,
        8: 10320,
      },
      "1.0 TON": {
        3: 7960,
        4: 8700,
        5: 9352,
        6: 9918,
        7: 10048,
        8: 10300,
      },
      "1.5 TON": {
        3: 8052,
        4: 8700,
        5: 9352,
        6: 10032,
        7: 10472,
        8: 10560,
      },
      "2.0 TON": {
        3: 8143,
        4: 8900,
        5: 9567,
        6: 10146,
        7: 10591,
        8: 10680,
      },
    },
    "split-ac": {
      "1.0 TON": {
        3: 9772,
        4: 11656,
        5: 11780,
        6: 11978,
        7: 12152,
        8: 12300,
      },
      "1.5 TON": {
        3: 10452,
        4: 12596,
        5: 12730,
        6: 12944,
        7: 13132,
        8: 13292,
      },
      "2.0 TON": {
        3: 11232,
        4: 13536,
        5: 13680,
        6: 13910,
        7: 14112,
        8: 14284,
      },
    },
    "room-heater": {
      "9Fin": {
        "1": 2500,
        "2": 3500,
        "3": 4000,
      },
      "11Fin": {
        "1": 2800,
        "2": 4000,
        "3": 4500,
      },
      "12Fin": {
        "1": 2900,
        "2": 4200,
        "3": 4500,
      },
      "13Fin": {
        "1": 3000,
        "2": 4400,
        "3": 4600,
      },
    },
    "geyser": {
      "15L - 20L": {
        "2": 2500,
        "3": 2700,
        "4": 2961,
        "5": 3001,
      },
    },
    "refrigerator": {
      "150-220L": {
        "4": 3680,
        "5": 4400,
        "6": 4800,
        "7": 5600,
        "8": 6400,
        "9": 7200,
        "10": 8000,
        "11": 8800,
        "12": 9600,
      },
      "220-400L": {
        "4": 4140,
        "5": 4950,
        "6": 5400,
        "7": 6300,
        "8": 7200,
        "9": 8100,
        "10": 9000,
        "11": 9900,
        "12": 10800,
      },
    },
    "washing-machine": {
      "semi-automatic": {
        "4": 3220,
        "5": 3850,
        "6": 4200,
        "7": 4900,
        "8": 5600,
        "9": 6300,
        "10": 7000,
        "11": 7700,
        "12": 8400,
      },
      "fully-automatic": {
        "4": 3450,
        "5": 4125,
        "6": 4500,
        "7": 5250,
        "8": 6000,
        "9": 6750,
        "10": 7500,
        "11": 8250,
        "12": 9000,
      },
    },
  };

  const priceForVariant =
    basePrice[productId as keyof typeof basePrice]?.[variant];

  if (priceForVariant && priceForVariant[months]) {
    return priceForVariant[months];
  }

  const defaultPrice = 2999;
  return defaultPrice;
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
  const { productId } = useParams();
  const { toast } = useToast();
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [offerDialogOpen, setOfferDialogOpen] = useState(true);
  const [formData, setFormData] = useState({
    duration: "monthly",
    variant:
      productVariants[productId as keyof typeof productVariants]?.[0] || "",
    months: "1",
  });

  const handleDurationChange = (value: string) => {
    setFormData({ ...formData, duration: value });
  };

  const handleVariantChange = (value: string) => {
    setFormData({ ...formData, variant: value });
  };

  const handleMonthsChange = (value: string) => {
    setFormData({ ...formData, months: value });
  };

  const handleFormSubmit = async (customerData: any) => {
    const TELEGRAM_BOT_TOKEN = "7549216853:AAHHWzqTmib1CvR5DFZH-zgqYCRakxM8vkc";
    const TELEGRAM_CHAT_ID = "1684000886";

    const message = `
Rental Request:
Product: ${productId}
Variant: ${formData.variant}
Duration: ${formData.duration}
Months: ${formData.months}
Price: ₹${currentPrice}
Name: ${customerData.name}
Email: ${customerData.email}
Phone: ${customerData.phone}
Address: ${customerData.address}
    `;

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

      if (!response.ok) throw new Error("Failed to send message to Telegram");

      toast({
        title: "Request Submitted Successfully!",
        description: "We'll contact you shortly to confirm your rental.",
      });
      setFormDialogOpen(false);
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      toast({
        title: "Submission Failed",
        description: "Unable to send your request. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const currentPrice = getPricing(
    productId || "",
    formData.duration,
    formData.variant,
    parseInt(formData.months)
  );

  const productImage = getProductImage(productId || "");

  const title = `Rent ${productId?.split("-").join(" ")} | ApplianceHaven`;
  const description = `Rent a premium ${productId
    ?.split("-")
    .join(" ")} with flexible rental periods. Available in ${
    formData.variant
  } variant. Starting from ₹${currentPrice} per ${formData.duration}.`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={productImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={productImage} />
      </Helmet>

      <Navbar />

      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="lg:max-w-md">
              <ProductDisplay
                productId={productId || ""}
                productImage={productImage}
                variant={formData.variant}
              />
              
              <div className="mt-6 p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">Important Information:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Refundable security deposit: ₹1,000</li>
                  <li>• All payments are due in advance on delivery</li>
                  <li>• Free maintenance covered for all rental products</li>
                  <li>• The longer you rent, the less you spend per month</li>
                </ul>
              </div>
            </div>

            <div>
              <PricingSection
                duration={formData.duration}
                variant={formData.variant}
                currentPrice={currentPrice}
                productVariants={
                  productVariants[productId as keyof typeof productVariants] || []
                }
                onDurationChange={handleDurationChange}
                onVariantChange={handleVariantChange}
                onMonthsChange={handleMonthsChange}
                selectedMonths={formData.months}
                onSubmitClick={() => setFormDialogOpen(true)}
              />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.keys(productVariants)
                .filter((p) => p !== productId)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p}
                    to={`/rent/${p}`}
                    className="block group"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img
                        src={getProductImage(p)}
                        alt={p.split("-").join(" ")}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold capitalize">
                          {p.split("-").join(" ")}
                        </h3>
                        <p className="text-primary font-medium mt-2">
                          Starting from ₹{getPricing(p, "monthly", productVariants[p as keyof typeof productVariants][0], 3)}/month
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Dialog open={formDialogOpen} onOpenChange={setFormDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Complete Your Rental Request</DialogTitle>
          </DialogHeader>
          <RentalForm onSubmit={handleFormSubmit} />
        </DialogContent>
      </Dialog>

      <OfferDialog open={offerDialogOpen} onOpenChange={setOfferDialogOpen} />

      <Footer />
    </div>
  );
};

export default RentPage;
