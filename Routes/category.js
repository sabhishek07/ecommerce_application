import express from 'express';
import { isadmin, requiresign } from '../Middlewares/authmiddleware';
import { createCategoryController, deletecategroyController, getSinglecategoryController, getallcategoryController, updatecategroyController } from '../Controllers/categoryController';

const router =express.Router()

//router.
router.post('/create-category',requiresign,isadmin,createCategoryController)
router.put('/updtae-category/:id',requiresign,isadmin,updatecategroyController)
router.get('/get-categories',getallcategoryController)
router.get('category-single/:id',getSinglecategoryController)
router.delete('/delete-category:id',requiresign,isadmin,deletecategroyController)

export default router;