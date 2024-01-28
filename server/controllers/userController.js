import User from "../models/User.js";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

export const verifyUser = async (req, res) => {
  const { token } = req.body;
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    res
      .status(200)
      .send({ success: true, message: "Token verified successfully." });
  } catch (error) {
    res.status(401).send({ success: false, message: "Invalid token." });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.login(email, password);
    const token = createToken(user._id);
    const { _id } = user;

    return res.status(200).json({ _id, token });
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};

export const signup = async (req, res) => {
  const {
    email,
    password,
    firstName,
    secondName,
    address,
    phone,
    dateOfBirth,
    gender,
  } = req.body;

  try {
    const user = await User.signup(
      email,
      password,
      firstName,
      secondName,
      address,
      phone,
      dateOfBirth,
      gender
    );
    const token = createToken(user._id);
    console.log(token);
    const { _id } = user;

    return res.status(201).json({ _id, token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error });
  }
};

export const getUser = async (req, res) => {
  try {
    console.log(req.params.userId);
    const user = await User.findOne({ _id: req.params.userId });
    console.log(user)
    res.status(200).send({ user });
  } catch (error) {
    res.status(400).send({ message: "Not possible to find" });
  }
};
