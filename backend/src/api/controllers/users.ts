import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import usersQueries from "../queries/users";
import { CreateUserPayload } from "../types/users";

async function createOne(req: Request, res: Response, next: NextFunction) {
  const userInfo: CreateUserPayload = {
    id: uuidv4(),
    username: req.body.username || "",
    password: req.body.password || "",
    email: req.body.email || "",
    phone: req.body.phone || "",
  };

  const userInfoHasErrors: boolean = makeIsUserInfoValid(userInfo);

  const hashedPassword = bcrypt.hashSync(req.body.password, 5);
  const updatedUserInfo: CreateUserPayload = {
    ...userInfo,
    password: hashedPassword,
  };

  if (!userInfoHasErrors) {
    try {
      const newUser = await usersQueries.createUser(updatedUserInfo);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({
        error: error,
        message: "Something went wront when creating this user.",
      });
    }
  } else {
    res.status(400).json({ message: "Please include valid user info." });
  }
}

const usersController = {
  createOne,
};

function makeIsUserInfoValid(userInfo: CreateUserPayload) {
  let hasErrors: boolean = false;

  if (userInfo.username.length <= 4) {
    hasErrors = true;
  }
  // must be at least 8 characters with upper case, lower case letter, a number, and a special character
  if (
    !userInfo.password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
  ) {
    hasErrors = true;
  }
  // email must be an email
  if (!userInfo.email.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
    hasErrors = true;
  }
  // phone number must be a string of 10 numbers
  if (!userInfo.phone.match(/^\d{10}$/)) {
    hasErrors = true;
  }

  return hasErrors;
}

export default usersController;
