export const formatToReal = (valor: number) => {
  let valorFixed = valor.toFixed(2);
  let [number, decimal] = valorFixed.split(".");
  let Real = `${number},${decimal} `;
  return Real;
};
