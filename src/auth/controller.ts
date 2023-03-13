import { User } from "./model";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


export const registrationController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Not authorized user");
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error("Wrong password");
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET
    );
    res.json({ message: "success", token });
  } catch (error) {
    res.json({ message: error.message });
  }
};
