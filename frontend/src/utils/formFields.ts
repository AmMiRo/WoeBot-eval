import { FormValues, FormErrorTypes } from "./types";

export function formatValues(formValues: FormValues) {
  return {
    ...formValues,
    // removes all non noumbers
    phone: formValues.phone.replace(/\D+/g, ""),
    email: formValues.email.toLowerCase(),
  };
}

export function makeFormErrors(formValues: FormValues) {
  const errors: FormErrorTypes[] = [];

  if (formValues.username.length <= 4) {
    errors.push(FormErrorTypes.username);
  }
  // password must be at least 8 characters with at least 1 upper case and 1 lower case letter, a number, and a special character
  if (
    !formValues.password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
  ) {
    errors.push(FormErrorTypes.password);
  }
  if (formValues.confirmPassword !== formValues.password) {
    errors.push(FormErrorTypes.confirmPassword);
  }
  // email must be an email
  if (!formValues.email.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
    errors.push(FormErrorTypes.email);
  }
  // phone number must be a string of 10 numbers
  if (!formValues.phone.match(/^\d{10}$/)) {
    errors.push(FormErrorTypes.phone);
  }

  return errors;
}

export function makeRegistrationPayload(formValues: FormValues) {
  return {
    username: formValues.username,
    password: formValues.password,
    email: formValues.email,
    phone: formValues.phone,
  };
}
