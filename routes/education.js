import express from "express";
const router = express.Router();
import educationController from "../controllers/educationController.js";
import auth from "../midleware/token-auth.js";

router.get("/",auth, educationController.getAllEducation);
router.get("/:id",auth, educationController.getEducation);
router.post("/create",auth, educationController.addEducation);
router.put("/update/:id",auth, educationController.putEducation);
router.delete("/delete/:id",auth, educationController.deleteEducation);
export default router;