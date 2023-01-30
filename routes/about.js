import express from "express";
const router = express.Router();
import aboutControllers from "../controllers/aboutControllers.js";
import auth from "../midleware/token-auth.js";
import image from "../midleware/imageController.js";

router.post("/create", auth, image, aboutControllers.createAbout);
router.get("/", auth, aboutControllers.getAllAbout);
router.get("/:id", auth, aboutControllers.getAbout);
router.put("/update/:id", auth, aboutControllers.updateAbout);
router.put("/update/img/:id", auth, image, aboutControllers.updateByIdWithImageAbout);
router.delete("/delete/:id", auth, aboutControllers.deleteAbout);
router.delete("/delete/img/:id", auth, aboutControllers.deleteAboutWithImg);
export default router;