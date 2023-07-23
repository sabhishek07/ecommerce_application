import express from "express";
import {registercontroller,loginController, testcontroller} from "../Controllers/authController.js";
import { isadmin, requiresign } from "../Middlewares/authmiddleware.js";

const router =express.Router();

router.post("/register",registercontroller);
router.post("/login",loginController);
router.get("/admin",requiresign ,isadmin,testcontroller);

export default router;