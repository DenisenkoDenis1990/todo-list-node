import { Todos } from "./model";
export const getTodos = async (req, res) => {
  try {
    console.log(req.user);
    const todos = await Todos.find({ userId: req.user._id });
    res.json({ todos });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getTodoById = async (req, res) => {
  const id = req.params.id;
  const todo = await Todos.findOne({ _id: id, userId: req.user._id });
  console.log(todo);
  if (!todo) {
    res.status(400).json({ message: `There is no todo with id ${id}` });
  }

  res.json({ todo });
};

export const addTodo = async (req, res) => {
  try {
    const todo = new Todos({
      title: req.body.title,
      text: req.body.text,
      listId: req.body.listId,
      userId: req.user._id,
    });
    await todo.save();
    console.log(req.body.listId);
    res.json({ status: "success" });
  } catch (error) {
    res.json(req.body);
  }
};

export const editTodo = async (req, res) => {
  const id = req.params.id;
  const todo = await Todos.findByIdAndUpdate(id, {
    title: req.body.title,
    text: req.body.text,
  });
  console.log(todo);
  res.json({ message: "success" });
};

export const deleteTodo = async (req, res) => {
  const id = req.params.id;
  await Todos.findByIdAndDelete(id);
  res.json({ message: "success" });
};
