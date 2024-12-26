export const getAvailableMonths = (productId: string, variant: string) => {
  const pricingData = {
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
        1: 2500,
        2: 3500,
        3: 4000,
      },
      "11Fin": {
        1: 2800,
        2: 4000,
        3: 4500,
      },
      "12Fin": {
        1: 2900,
        2: 4200,
        3: 4500,
      },
      "13Fin": {
        1: 3000,
        2: 4400,
        3: 4600,
      },
    },
    "geyser": {
      "15L - 20L": {
        2: 2500,
        3: 2700,
        4: 2961,
        5: 3001,
      },
    },
    "refrigerator": {
      "150-220L": {
        4: 3680,
        5: 4400,
        6: 4800,
        7: 5600,
        8: 6400,
        9: 7200,
        10: 8000,
        11: 8800,
        12: 9600,
      },
      "220-400L": {
        4: 4140,
        5: 4950,
        6: 5400,
        7: 6300,
        8: 7200,
        9: 8100,
        10: 9000,
        11: 9900,
        12: 10800,
      },
    },
    "washing-machine": {
      "semi-automatic": {
        4: 3220,
        5: 3850,
        6: 4200,
        7: 4900,
        8: 5600,
        9: 6300,
        10: 7000,
        11: 7700,
        12: 8400,
      },
      "fully-automatic": {
        4: 3450,
        5: 4125,
        6: 4500,
        7: 5250,
        8: 6000,
        9: 6750,
        10: 7500,
        11: 8250,
        12: 9000,
      },
    },
  };

  const productPricing = pricingData[productId as keyof typeof pricingData];
  if (!productPricing) return [];

  const variantPricing = productPricing[variant as keyof typeof productPricing];
  if (!variantPricing) return [];

  return Object.keys(variantPricing).map(Number);
};

export const getPricing = (
  productId: string,
  duration: string,
  variant: string,
  months: number = 1
) => {
  const pricingData = {
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
        1: 2500,
        2: 3500,
        3: 4000,
      },
      "11Fin": {
        1: 2800,
        2: 4000,
        3: 4500,
      },
      "12Fin": {
        1: 2900,
        2: 4200,
        3: 4500,
      },
      "13Fin": {
        1: 3000,
        2: 4400,
        3: 4600,
      },
    },
    "geyser": {
      "15L - 20L": {
        2: 2500,
        3: 2700,
        4: 2961,
        5: 3001,
      },
    },
    "refrigerator": {
      "150-220L": {
        4: 3680,
        5: 4400,
        6: 4800,
        7: 5600,
        8: 6400,
        9: 7200,
        10: 8000,
        11: 8800,
        12: 9600,
      },
      "220-400L": {
        4: 4140,
        5: 4950,
        6: 5400,
        7: 6300,
        8: 7200,
        9: 8100,
        10: 9000,
        11: 9900,
        12: 10800,
      },
    },
    "washing-machine": {
      "semi-automatic": {
        4: 3220,
        5: 3850,
        6: 4200,
        7: 4900,
        8: 5600,
        9: 6300,
        10: 7000,
        11: 7700,
        12: 8400,
      },
      "fully-automatic": {
        4: 3450,
        5: 4125,
        6: 4500,
        7: 5250,
        8: 6000,
        9: 6750,
        10: 7500,
        11: 8250,
        12: 9000,
      },
    },
  };

  const productPricing = pricingData[productId as keyof typeof pricingData];
  if (!productPricing) return 2999;

  const variantPricing = productPricing[variant as keyof typeof productPricing];
  if (!variantPricing) return 2999;

  const price = variantPricing[months as keyof typeof variantPricing];
  return price || 2999;
};
