// setup for .env variables
import dotenv from "dotenv";
dotenv.config();

// imports
import express, { Express, Request, Response } from "express";
import cors from "cors";
import usersRouter from "./api/routes/users";

// server setup
const server: Express = express();
server.use(express.json());
server.use(cors());

// assign routers
server.use("/api/users", usersRouter);

// catch-all endpoint
server.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is up!!!" });
});

// export default server;
module.exports = server;
