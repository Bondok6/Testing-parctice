const stringLength = (string) => {
  const length = string.length;
  if (length >= 1 && length <= 10) return length;
  throw new Error("Charcters must be between 1 and 10");
};

export default stringLength;
