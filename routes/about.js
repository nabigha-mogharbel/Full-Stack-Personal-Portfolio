import express from 'express'
const router = express.Router();
import aboutControllers from "../controllers/aboutControllers.js";


router.post("/", aboutControllers.createAbout);
router.get("/", aboutControllers.getAllAbout);
router.get("/:id", aboutControllers.getAbout);
router.patch("/:id", aboutControllers.updateAbout);
router.delete("/:id", aboutControllers.deleteAbout);

export default router;