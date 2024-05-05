export function checkValidateData(email, password) {
  const isValidEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email);
  const isValidPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
      password
    );

  if (!isValidEmail) return "Email ID not valid";
  if (!isValidPassword)
    return "Password requires uppercase, lowercase, number, and special character";

  return null;
}

export function checkValidateName(name) {
  const isValidName = /[a-zA-Z\\s]+/.test(name);

  if (!isValidName) return "Name not valid";

  return null;
}
