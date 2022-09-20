import React, { useState } from "react";
import {
  FormValues,
  FormErrorTypes,
  RegistrationPayload,
  RegistrationResult,
} from "../../utils/types";
import {
  formatValues,
  makeFormErrors,
  makeRegistrationPayload,
} from "../../utils/formFields";
import { submitUserRegistration } from "../../utils/api";
import RegistrationView from "./RegistrationFormView";

const blankForm: FormValues = {
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
  phone: "",
};

const unregisteredResult: RegistrationResult = {
  success: false,
  error: null,
};

function RegistrationFormContainer() {
  const [formErrors, setFormErrors] = useState<FormErrorTypes[]>([]);
  const [formValues, setFormValues] = useState<FormValues>(blankForm);
  const [registrationResult, setRegistrationResult] =
    useState<RegistrationResult>(unregisteredResult);

  function handleChange(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const formattedFormValues = formatValues(formValues);
    const formErrorsList = makeFormErrors(formattedFormValues);

    setFormValues(formattedFormValues);
    setFormErrors(formErrorsList);

    if (!formErrorsList.length) {
      const payload: RegistrationPayload =
        makeRegistrationPayload(formattedFormValues);
      const apiResult = await submitUserRegistration(payload);
      setRegistrationResult(apiResult);
    }
  }

  return (
    <RegistrationView
      formErrors={formErrors}
      formValues={formValues}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      submissionSuccess={registrationResult.success}
      submissionErrorMessage={registrationResult.error}
    />
  );
}

export default RegistrationFormContainer;
