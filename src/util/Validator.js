export const isPhoneNumber = (value) => {
  const regex = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/;
  return regex.test(value);
};
