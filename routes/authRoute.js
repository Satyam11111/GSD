import express from "express";
import {
  registerController,
  loginController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

//routing
//register - method post
router.post("/register", registerController);

//login
router.post("/login", loginController);

//protected route - auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
