export interface FormValues {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
}

export enum FormErrorTypes {
  username = "USERNAME",
  password = "PASSWORD",
  confirmPassword = "CONFIRMPASSWORD",
  email = "EMAIL",
  phone = "PHONE",
}

export interface RegistrationPayload {
  username: string;
  password: string;
  email: string;
  phone: string;
}

export interface RegistrationResult {
  success: boolean;
  error: string | null;
}
