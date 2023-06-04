export default (input: string): string => {
  if (input.length === 0) {
    return input;
  }

  const firstLetter = input.charAt(0).toUpperCase();
  const restOfString = input.slice(1).toLowerCase();

  return firstLetter + restOfString;
};
