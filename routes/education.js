import express from "express";
const router = express.Router();
import educationController from "../controllers/educationController.js";

router.get("/", educationController.getAllEducation);
router.get("/:id", educationController.getEducation);
router.post("/", educationController.addEducation);
router.put("/:id", educationController.putEducation);
router.delete("/:id", educationController.deleteEducation);

export default router;
