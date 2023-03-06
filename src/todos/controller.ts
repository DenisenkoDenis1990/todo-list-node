let todos = [
  {
    id: "1",
    title: "test",
    text: "test text",
    resolved: false,
  },
  {
    id: "2",
    title: "test",
    text: "test text",
    resolved: false,
  },
  {
    id: "3",
    title: "test",
    text: "test text",
    resolved: false,
  },
];

export const getTodos = (req, res) => {
  res.json(todos);
};

export const getTodoById = (req, res) => {
  const [todo] = todos.filter((item) => item.id === req.params.id);
  if (!todo) {
    res.json({ message: `There is no todo with id: ${req.params.id}` });
  }
  res.json(todo);
};

export const addTodo = (req, res) => {
  const { title, text } = req.body;

  todos.push({
    id: new Date().getTime().toString(),
    title: req.body.title,
    text: req.body.text,
    resolved: false,
  });
  res.json({ status: res.statusCode });
};

export const editTodo = (req, res) => {
  const { title, text } = req.body;

  todos.forEach((todo) => {
    if (todo.id === req.params.id) {
      todo.title = title;
      todo.text = text;
    }

    res.json({ status: res.statusCode });
  });
};

export const deleteTodo = (req, res) => {
  todos = todos.filter((todo) => todo.id !== req.params.id);

  res.json({ status: res.statusCode });
};
