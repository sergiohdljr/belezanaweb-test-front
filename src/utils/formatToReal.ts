export const formatToReal = (valor: number) => {
  if (valor) {
    let valorFixed = valor.toFixed(2);
    let [number, decimal] = valorFixed.split(".");
    let Real = `${number},${decimal} `;
    return Real;
  }

  return "00,00"
};
