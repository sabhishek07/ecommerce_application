import express from "express";
import {registercontroller,loginController} from "../Controllers/authController.js";

const router =express.Router();

router.post("/register",registercontroller);
router.post("/login",loginController);

export default router;