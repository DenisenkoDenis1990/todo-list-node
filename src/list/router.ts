import express from "express";
import { authMiddleware } from "../auth/middleware";
import {
  getLists,
  getListById,
  addList,
  editList,
  deleteList,
} from "./controller";

export const listsRouter = express.Router();
listsRouter.use(authMiddleware);

listsRouter.get("/", getLists);

// GET list by id
listsRouter.get("/:id", getListById);

// POST list
listsRouter.post("/", addList);

// PUT list by id
listsRouter.put("/:id", editList);

// DELETE list by id
listsRouter.delete("/:id", deleteList);
