import express from "express";
import { login, signup, verifyUser, getUser } from "../controllers/userController.js";

const router = express.Router();
router.post("/login", login);
router.post("/signup", signup);
router.post("/verify", verifyUser);
router.get("/get/:userId", getUser)

export default router;
