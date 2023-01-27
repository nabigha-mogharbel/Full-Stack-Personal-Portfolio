import express from "express";
const router = express.Router();
import educationController from "../controllers/educationController.js";
import auth from "../midleware/token-auth.js";

router.get("/",auth, educationController.getAllEducation);
router.get("/:id",auth, educationController.getEducation);
router.post("/",auth, educationController.addEducation);
router.put("/:id",auth, educationController.putEducation);
router.delete("/:id",auth, educationController.deleteEducation);

export default router;
