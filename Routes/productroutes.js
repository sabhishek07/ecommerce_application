import express from "express";
import { isadmin, requiresign } from "../Middlewares/authmiddleware";
import { createproductController, getallproductController } from "../Controllers/ProductController";
import formidable from 'express-formidable'


const router =express.Router()

router.post('/create-product',requiresign,isadmin,formidable(),createproductController)
router.get('/get-product',getallproductController)


export default router;