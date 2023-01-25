import express from 'express'
const router = express.Router();
import adminController from "../controllers/adminControllers.js";

router.post("/create", adminController.createAdmin);
router.get("/", adminController.getAdmin);
router.put("/:id", adminController.updateAdmin);

export default router;