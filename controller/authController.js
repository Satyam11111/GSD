import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    //validation
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    //check user
    const user = await userModel.findOne({ email });
    //exisiting user
    if (user) {
      return res.status(400).json({ message: "User already exists" });
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

// export default { registerController };
