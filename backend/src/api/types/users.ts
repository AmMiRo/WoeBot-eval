export type User = {
  id: string;
  username: string;
  email: string;
  phone: string;
};

export type CreateUserPayload = {
  id: string;
  username: string;
  password: string;
  email: string;
  phone: string;
};
