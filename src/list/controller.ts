import { Lists } from "./model";

export const getLists = async (req, res) => {
  try {
    const lists = await Lists.find({ userId: req.user._id });
    res.json({ lists });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getListById = async (req, res) => {
  try {
    const id = req.params.id;
    const list = await Lists.findOne({ _id: id, userId: req.user._id });
    console.log(list);
    if (!list) {
      res.status(400).json({ message: `There is no list with id ${id}` });
    }

    res.json({ list });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addList = async (req, res) => {
  try {
    const list = new Lists({
      title: req.body.title,
      userId: req.user._id,
    });
    await list.save();
    console.log(list);
    res.json({ status: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const editList = async (req, res) => {
  try {
    const id = req.params.id;
    const list = await Lists.findByIdAndUpdate(id, {
      title: req.body.title,
    });
    console.log(list);
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const deleteList = async (req, res) => {
  try {
    const id = req.params.id;
    await Lists.findByIdAndDelete(id);
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
