import express from "express";
const router = express.Router();
import aboutControllers from "../controllers/aboutControllers.js";
import auth from "../midleware/token-auth.js";
import image from "../midleware/imageController.js";

router.post("/create",  image, aboutControllers.createAbout);
router.get("/", auth, aboutControllers.getAllAbout);
router.get("/:id", auth, aboutControllers.getAbout);
router.put("/update/:id", aboutControllers.updateAbout);
router.put("/img/:id", image, aboutControllers.updateByIdWithImageAbout);
router.delete("/delete/:id", auth, aboutControllers.deleteAbout);
router.delete("/delete/img/:id", auth, aboutControllers.deleteAboutWithImg);
export default router;