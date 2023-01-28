import express from 'express';
const router = express.Router();
import categoryController from '../controllers/categoryController.js'
import auth from "../midleware/token-auth.js";

router.get("/",auth, categoryController.getCategories )
router.get("/:id",auth, categoryController.getCategoryById)
router.post("/create",auth, categoryController.addCategory)
router.put("/update/:id",auth, categoryController.editCategoryById)
router.delete("/delete/:id",auth, categoryController.deleteCategoryById)
export default router