export const formatCartNumber = (cpf: string): string => {
  const formattedCardNumber = cpf.replace(/\d{4}(?=\d)/g, "$& ");
  return formattedCardNumber;
};
