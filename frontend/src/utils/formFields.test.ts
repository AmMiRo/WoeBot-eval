import {
  formatValues,
  makeFormErrors,
  makeRegistrationPayload,
} from "./formFields";

describe("formatValues", () => {
  it("should return formatted values", () => {
    const initialValues = {
      username: "username",
      password: "Testpass1!",
      confirmPassword: "Testpass1!",
      email: "EmAIl@tEst.cOm",
      phone: "(012) 345-6789",
    };

    const formattedValues = formatValues(initialValues);

    const expectedValues = {
      username: "username",
      password: "Testpass1!",
      confirmPassword: "Testpass1!",
      email: "email@test.com",
      phone: "0123456789",
    };

    expect(formattedValues).toEqual(expectedValues);
  });
});

describe("makeRegistrationPayload", () => {
  it("should make a registration payload", () => {
    const initialValues = {
      username: "username",
      password: "Testpass1!",
      confirmPassword: "Testpass1!",
      email: "email@test.com",
      phone: "0123456789",
    };

    const payload = makeRegistrationPayload(initialValues);

    const expectedValues = {
      username: "username",
      password: "Testpass1!",
      email: "email@test.com",
      phone: "0123456789",
    };

    expect(payload).toEqual(expectedValues);
  });
});

describe("makeFormErrors", () => {
  it("should return an empty array if there are no errors", () => {
    const initialValues = {
      username: "username",
      password: "Testpass1!",
      confirmPassword: "Testpass1!",
      email: "email@test.com",
      phone: "0123456789",
    };

    const errors = makeFormErrors(initialValues);

    expect(errors.length).toBe(0);
  });

  it("should return an array listing all errors in the form fields", () => {
    const initialValues = {
      username: "us",
      password: "Testpass",
      confirmPassword: "Testpass1!",
      email: "not a email",
      phone: "not a phone number",
    };

    const errors = makeFormErrors(initialValues);

    expect(errors.length).toBe(5);
  });
});
