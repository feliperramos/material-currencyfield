const getDigits = (value = "") =>
  value.replace(/(-(?!\d))|[^0-9|-]/g, "") || "";

const padDigits = (digits) => {
  const desiredLength = 3;
  const actualLength = digits.length;

  if (actualLength >= desiredLength) {
    return digits;
  }

  const amountToAdd = desiredLength - actualLength;
  const padding = "0".repeat(amountToAdd);

  return padding + digits;
};

const removeLeadingZeros = (number) => number.replace(/^0+([0-9]+)/, "$1");

const addDecimal = (number, separator) => {
  const centsStartingPosition = number.length - 2;
  const currency = removeLeadingZeros(
    number.substring(0, centsStartingPosition)
  );
  const cents = number.substring(centsStartingPosition);
  return currency + separator + cents;
};

export const useCurrency = (value, separator) => {
  const digits = getDigits(value);
  const digitsWithPadding = padDigits(digits);
  return addDecimal(digitsWithPadding, separator);
};
