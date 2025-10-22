export function formatCurrency(amount: number, currency: string = "BDT") {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
