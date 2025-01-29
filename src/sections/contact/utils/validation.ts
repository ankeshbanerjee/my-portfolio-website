export const validateName = (val: string) =>
  val.trim().length > 0 ? undefined : "Please enter a valid name";

export const validateEmail = (email: string) => {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    return undefined;
  } else {
    return "Please enter a valid email";
  }
};

export const validateMessage = (val: string) =>
  val.trim().length > 0 ? undefined : "Please enter a valid message";
