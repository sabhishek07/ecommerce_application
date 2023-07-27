import express from 'express';
import { isadmin, requiresign } from '../Middlewares/authmiddleware';
import { createCategoryController } from '../Controllers/categoryController';

const router =express.Router()

//router.
router.post('create-category',requiresign,isadmin,createCategoryController)

export default router;