import { acPricing, heaterPricing, geyserPricing, washingMachinePricing, refrigeratorPricing } from './productPricing';

const allPricing = {
  ...acPricing,
  ...heaterPricing,
  ...geyserPricing,
  ...washingMachinePricing,
  ...refrigeratorPricing,
};

export const getAvailableMonths = (productId: string, variant: string) => {
  const productPricing = allPricing[productId as keyof typeof allPricing];
  if (!productPricing) return [3, 4, 5, 6]; // Default months if product not found

  const variantPricing = productPricing[variant as keyof typeof productPricing];
  if (!variantPricing) return [3, 4, 5, 6]; // Default months if variant not found

  return Object.keys(variantPricing).map(Number).sort((a, b) => a - b);
};

export const getPricing = (
  productId: string,
  duration: string,
  variant: string,
  months: number = 1
) => {
  const productPricing = allPricing[productId as keyof typeof allPricing];
  if (!productPricing) return 2999;

  const variantPricing = productPricing[variant as keyof typeof productPricing];
  if (!variantPricing) return 2999;

  const monthlyPrice = variantPricing[months as keyof typeof variantPricing];
  
  if (duration === "yearly") {
    return Math.round(monthlyPrice * 0.9); // 10% discount for yearly rentals
  }
  
  return monthlyPrice || 2999;
};