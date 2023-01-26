import express, { application } from 'express';
const router = express.Router();
import categoryController from '../controllers/categoryController.js'
import auth from "../midleware/token-auth.js";

router.get("/categories",auth, categoryController.getCategories )
router.get("/category/:id",auth, categoryController.getCategoryById)
router.post("/categories/add/",auth, categoryController.addCategory)
router.put("/categories/update/:id",auth, categoryController.editCategoryById)
router.delete("/categories/delete/:id",auth, categoryController.deleteCategoryById)

export default router