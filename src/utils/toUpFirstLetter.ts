export const toUpFirstLetter = (str: string) => {
  const firstLetter = str.slice(0, 1);
  return firstLetter.toUpperCase() + str.slice(1);
};
