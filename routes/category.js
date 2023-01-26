import express, { application } from 'express';
const router = express.Router();
import categoryController from '../controllers/categoryController.js'

router.get("/categories", categoryController.getCategories )
router.get("/category/:id", categoryController.getCategoryById)
router.post("/categories/add/", categoryController.addCategory)
router.put("/categories/update/:id", categoryController.editCategoryById)
router.delete("/categories/delete/:id", categoryController.deleteCategoryById)

export default router