import { Todos } from "./model";
export const getTodos = async (req, res) => {
  const todos = await Todos.find({});
  res.json({ todos });
};

export const getTodoById = async (req, res) => {
  const id = req.params.id;
  const todo = await Todos.findById(id);
  if (todo._id != id) {
    res.status(400).json({ message: `There is no todo with id ${id}` });
  }
  res.json({ todo });
};

export const addTodo = async (req, res) => {
  const todo = new Todos({
    title: req.body.title,
    text: req.body.text,
  });
  await todo.save();
  res.json({ status: "success" });
};

export const editTodo = async (req, res) => {
  const { id } = req.params.id;
  await Todos.findByIdAndUpdate(id, {
    $set: { title: req.body.title, text: req.body.text },
  });

  res.json({ message: "success" });
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params.id;
  await Todos.findByIdAndDelete(id);
  res.json({ message: "success" });
};
