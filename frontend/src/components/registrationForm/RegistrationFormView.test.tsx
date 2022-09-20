import React from "react";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import enzyme, { shallow } from "enzyme";
import RegistrationFormView, { RegistrationForm } from "./RegistrationFormView";
import SuccessMessage from "./SuccessMessage";

enzyme.configure({ adapter: new Adapter() });

describe("RegistrationFormView", () => {
  const defaultProps = {
    formErrors: [],
    formValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      phone: "",
    },
    handleChange: jest.fn,
    handleSubmit: jest.fn,
    submissionSuccess: false,
    submissionErrorMessage: null,
  };

  it("renders SuccessMessage if submissionSuccess", () => {
    const wrapper = shallow(
      <RegistrationFormView {...defaultProps} submissionSuccess={true} />
    );

    expect(wrapper.find(SuccessMessage).length).toBe(1);
    expect(wrapper.find(RegistrationForm).length).toBe(0);
  });

  it("doesn't render SuccessMessage if !submissionSuccess", () => {
    const wrapper = shallow(
      <RegistrationFormView {...defaultProps} submissionSuccess={false} />
    );

    expect(wrapper.find(SuccessMessage).length).toBe(0);
    expect(wrapper.find(RegistrationForm).length).toBe(1);
  });

  it("renders ErrorMessage if submissionErrorMessage is not null", () => {
    const wrapper = shallow(
      <RegistrationFormView {...defaultProps} submissionErrorMessage="error" />
    );

    expect(
      wrapper.find('[data-test-id="registration-form-error-message"]').length
    ).toBe(1);
  });

  it("doesn't render ErrorMessage if submissionErrorMessage is null", () => {
    const wrapper = shallow(
      <RegistrationFormView {...defaultProps} submissionErrorMessage={null} />
    );

    expect(
      wrapper.find('[data-test-id="registration-form-error-message"]').length
    ).toBe(0);
  });
});
