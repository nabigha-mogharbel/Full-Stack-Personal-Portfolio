import express from "express";
const router = express.Router();
import educationController from "../controllers/educationController.js";
import auth from "../midleware/token-auth.js";

router.get("/", educationController.getAllEducation);
router.get("/:id", educationController.getEducation);
router.post("/create", educationController.addEducation);
router.put("/update/:id", educationController.putEducation);
router.delete("/delete/:id",educationController.deleteEducation);
export default router;