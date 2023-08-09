export const maskCreditCard = (cardNumber: string) => {
  if (cardNumber) {
    const masked = "*".repeat(12) + cardNumber.slice(-4);
    const formatted = masked.match(/.{1,4}/g)?.join(".");
    return formatted;
  }
};
