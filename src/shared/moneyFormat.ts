export const moneyFormat = (amount: number, currency: string) => {
  return new Intl.NumberFormat('en-EN', { style: 'currency', currency }).format(amount);

}