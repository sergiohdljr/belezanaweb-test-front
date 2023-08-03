export const formatName = (name: string): string => {
  const words = name.toLowerCase().split(" ");

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  const formattedName = capitalizedWords.join(" ");

  return formattedName;
};
