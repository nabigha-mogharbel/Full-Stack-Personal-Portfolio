import express from "express";
const router = express.Router();
import experienceController from "../controllers/experienceController.js";
import auth from "../midleware/token-auth.js";

router.get("/", experienceController.getAllExperience);
router.post("/create",  experienceController.addExperience);
router.get("/:id", auth, experienceController.getExperience);
router.put("/update/:id",  experienceController.putExperience);
router.delete("/delete/:id", experienceController.deleteExperience);
export default router;