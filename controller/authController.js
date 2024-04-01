import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    //validation
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).send({ message: "Please fill in all fields" });
    }

    //check user
    const user = await userModel.findOne({ email });
    //exisiting user
    if (user) {
      return res.status(200).send({
        message: "User already exists",
        success: false,
      });
    }

    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const userSave = new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });
    await userSave.save();

    //response
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in registration process" });
  }
};

//login logic
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    //check user
    const user = await userModel.findOne({ email });

    //no user
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    //create token
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    //response
    res.status(200).send({
      token,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in login process" });
  }
};
