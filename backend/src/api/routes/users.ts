import { Router } from "express";
import usersController from "../controllers/users";

const router = Router();

router.post("/", usersController.createOne);

export default router;
