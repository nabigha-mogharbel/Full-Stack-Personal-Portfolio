import express from 'express'
const router = express.Router();
import aboutControllers from "../controllers/aboutControllers.js";
import auth from "../midleware/token-auth.js";
import image from '../controllers/imageController.js'


router.post("/",image,aboutControllers.createAbout);
router.get("/", aboutControllers.getAllAbout);
router.get("/:id", aboutControllers.getAbout);
router.put("/:id", aboutControllers.updateAbout);
router.put("/img/:id",image,aboutControllers.updateByIdWithImageAbout);
router.delete("/:id", aboutControllers.deleteAbout);
router.delete("/withimg/:id", aboutControllers.deleteAboutWithImg);

export default router;