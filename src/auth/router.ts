import express from "express";
import { registrationController, loginController } from "./controller";

export const authRouter = express.Router();

// POST for user registration
authRouter.post("/registaration", registrationController);

// POST for user log in
authRouter.post("/login", loginController);
