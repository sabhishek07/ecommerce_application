import express from "express";
import {registercontroller,loginController, testcontroller} from "../Controllers/authController.js";
import { requiresign } from "../Middlewares/authmiddleware.js";

const router =express.Router();

router.post("/register",registercontroller);
router.post("/login",loginController);
router.get("/test",requiresign ,testcontroller);

export default router;