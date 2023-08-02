import express from "express";
import { isadmin, requiresign } from "../Middlewares/authmiddleware.js";
import { PhotoProductController, UpdateproductController, createproductController, deleteProductController, getallproductController, singleProductController } from "../Controllers/ProductController.js";
import formidable from 'express-formidable'


const router =express.Router()

router.post('/create-product',requiresign,isadmin,formidable(),createproductController)
router.post('/update-product/:pid',requiresign,isadmin,formidable(),UpdateproductController)
router.get('/get-product',getallproductController)
router.get('/get-product-single/:id',singleProductController)
router.get('/get-photo/:pid',PhotoProductController)
router.delete('/delete-product/:pid',deleteProductController)
export default router;