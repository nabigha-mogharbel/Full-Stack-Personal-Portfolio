import express from 'express';
const router = express.Router();
import categoryController from '../controllers/categoryController.js'
import auth from "../midleware/token-auth.js";

router.get("/", categoryController.getCategories )
router.get("/:id",categoryController.getCategoryById)
router.post("/create", categoryController.addCategory)
router.put("/update/:id",categoryController.editCategoryById)
router.delete("/delete/:id", categoryController.deleteCategoryById)
export default router