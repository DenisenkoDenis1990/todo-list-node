import express from "express";
import { registrationController, loginController } from "./controller";

export const authRouter = express.Router();

// GET all todos
authRouter.post("/registaration", registrationController);

// GET todo by id
authRouter.post("/login", loginController);
