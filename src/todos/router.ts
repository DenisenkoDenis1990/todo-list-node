import express from "express";
import {
  getTodos,
  getTodoById,
  addTodo,
  editTodo,
  deleteTodo,
} from "./controller";
import { validateTodo } from "./middleware";
import { authMiddleware } from "../auth/middleware";

export const todosRouter = express.Router();

todosRouter.use(authMiddleware);

// GET all todos
todosRouter.get("/", getTodos);

// GET todo by id
todosRouter.get("/:id", getTodoById);

// POST todo
todosRouter.post("/", validateTodo, addTodo);

// PUT todo by id
todosRouter.put("/:id", editTodo);

// DELETE todo by id
todosRouter.delete("/:id", deleteTodo);
