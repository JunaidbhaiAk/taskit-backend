import bcrypt from "bcryptjs";
import User from "../models/user.modal.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email.length === 0 || password.length === 0) {
      res.send(500).json({ msg: "Enter Data" });
      return;
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).json({ msg: "Email Alredy Exisit" });
      return;
    }
    const hashedPassword = bcrypt.hashSync(String(password), 8);
    const user = new User({
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    res.json({
      message: "User registered successfully",
      userId: savedUser._id,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
   
    if (!user) return res.status(400).send("Invalid username or password.");

    const validPassword = bcrypt.compareSync(String(password), user.password);
    if (!validPassword) return res.status(400).send("Invalid username or password.");

    const token = jwt.sign({ userId: user._id }, process.env.JWT_TOKEN);
    res.send({ token });
  } catch (error) {
    res.status(500).json(error);
  }
};
