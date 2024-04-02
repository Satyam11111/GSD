//protection of user

import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const verified = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = verified;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in authentication process" });
  }
};

//admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      console.log("not an admin: clg");
      return res.status(403).json({ message: "Access denied" });
    } else next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in authentication process" });
  }
};
