import express from "express";
import { setItem, getItems, getItem } from "../controllers/itemController.js";

const router = express.Router();
router.post("/", setItem);
router.get("/", getItems);
router.get("/:id", getItem);

export default router;
