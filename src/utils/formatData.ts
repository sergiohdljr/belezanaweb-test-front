export const formartData = (data: string): string => {
  const [ano, mes] = data.split("-");

  return `${mes}/${ano}`;
};
