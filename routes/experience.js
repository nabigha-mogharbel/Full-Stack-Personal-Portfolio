import express from "express";
const router = express.Router();
import experienceController from "../controllers/experienceController.js";
import auth from "../midleware/token-auth.js";

router.get("/", auth, experienceController.getAllExperience);
router.post("/create", auth, experienceController.addExperience);
router.get("/:id", auth, experienceController.getExperience);
router.patch("/update/:id", auth, experienceController.putExperience);
router.delete("/delete/:id", auth, experienceController.deleteExperience);
export default router;