import axios from "axios";
import { RegistrationPayload, RegistrationResult } from "./types";

const url = "http://localhost:5000/api/users/";

export async function submitUserRegistration(body: RegistrationPayload) {
  const result: RegistrationResult = {
    success: false,
    error: null,
  };

  await axios
    .post(url, body)
    .then((res) => {
      result.success = true;
    })
    .catch((err) => {
      result.error = err;
    });

  return result;
}
