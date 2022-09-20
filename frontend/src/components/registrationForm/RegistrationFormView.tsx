import React from "react";
import styled from "styled-components";
import { FormValues, FormErrorTypes } from "../../utils/types";
import SuccessMessage from "./SuccessMessage";

interface Props {
  formErrors: FormErrorTypes[];
  formValues: FormValues;
  handleChange: (e: React.SyntheticEvent<Element, Event>) => void;
  handleSubmit: (e: React.SyntheticEvent<Element, Event>) => void;
  submissionSuccess: boolean;
  submissionErrorMessage: string | null;
}

function RegistrationFormView(props: Props) {
  const {
    formErrors,
    formValues,
    handleChange,
    handleSubmit,
    submissionSuccess,
    submissionErrorMessage,
  } = props;

  if (submissionSuccess) {
    return <SuccessMessage username={formValues.username} />;
  }

  const errorSet = new Set(formErrors);

  return (
    <RegistrationForm>
      {submissionErrorMessage && (
        <ErrorMessage>{submissionErrorMessage}</ErrorMessage>
      )}
      <StyledLabel htmlFor="username">
        Username:
        {errorSet.has(FormErrorTypes.username) && (
          <FieldErrorMessage>{usernameErrorMessage}</FieldErrorMessage>
        )}
      </StyledLabel>
      <StyledInput
        id="username"
        name="username"
        type="text"
        value={formValues.username}
        onChange={handleChange}
      />
      <StyledLabel htmlFor="password">
        Password:
        {errorSet.has(FormErrorTypes.password) && (
          <FieldErrorMessage>{passwordErrorMessage}</FieldErrorMessage>
        )}
      </StyledLabel>
      <StyledInput
        id="password"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleChange}
      />
      <StyledLabel htmlFor="confirmPassword">
        Confirm Password:
        {errorSet.has(FormErrorTypes.confirmPassword) && (
          <FieldErrorMessage>{confirmPasswordErrorMessage}</FieldErrorMessage>
        )}
      </StyledLabel>
      <StyledInput
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={formValues.confirmPassword}
        onChange={handleChange}
      />
      <StyledLabel htmlFor="email">
        Email:
        {errorSet.has(FormErrorTypes.email) && (
          <FieldErrorMessage>{emailErrorMessage}</FieldErrorMessage>
        )}
      </StyledLabel>
      <StyledInput
        id="email"
        name="email"
        type="text"
        value={formValues.email}
        onChange={handleChange}
      />
      <StyledLabel htmlFor="phone">
        Phone Number:
        {errorSet.has(FormErrorTypes.phone) && (
          <FieldErrorMessage>{phoneErrorMessage}</FieldErrorMessage>
        )}
      </StyledLabel>
      <StyledInput
        id="phone"
        name="phone"
        type="text"
        value={formValues.phone}
        onChange={handleChange}
      />
      <ButtonWrapper>
        <SubmitButton type="submit" onClick={handleSubmit}>
          Submit
        </SubmitButton>
      </ButtonWrapper>
    </RegistrationForm>
  );
}

const RegistrationForm = styled.form`
  align-items: flex-start;
  background-color: White;
  border: black 1px solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-between;
  margin-top: 150px;
  padding: 5px;
  width: 500px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const FieldErrorMessage = styled.span`
  color: red;
  font-size: 10px;
  margin-left: 10px;
`;

const StyledLabel = styled.label`
  align-items: center;
  display: flex;
  justify-content: flext-start;
`;

const StyledInput = styled.input`
  background-color: WhiteSmoke;
  border: 1px black solid;
  border-radius: 5px;
  height: 20px;
  width: calc(100% - 10px);
`;

const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 75px;
  justify-content: center;
  width: calc(100% - 10px);
`;

const SubmitButton = styled.button`
  align-items: center;
  background-color: #689689;
  border: none;
  border-radius: 25px;
  display: flex;
  font-size: 16px;
  heigh: 100px;
  justify-content: center;
  text-decoration: none;
  width: 150px;
`;

const usernameErrorMessage =
  "Please enter a username that is at least 4 characters";
const passwordErrorMessage =
  "Password must be 8 characters long and use upper case, lower case, a number, and a special character.";
const confirmPasswordErrorMessage = "Passwords do not match.";
const emailErrorMessage = "Please enter a valid email.";
const phoneErrorMessage = "Please enter a valid phone number.";

export default RegistrationFormView;
