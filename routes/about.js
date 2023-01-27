import express from 'express'
const router = express.Router();
import aboutControllers from "../controllers/aboutControllers.js";
import auth from "../midleware/token-auth.js";
import image from '../controllers/imageController.js'


router.post("/",image,aboutControllers.createAbout);
router.get("/",auth, aboutControllers.getAllAbout);
router.get("/:id",auth, aboutControllers.getAbout);
router.put("/:id",auth, aboutControllers.updateAbout);
router.put("/img/:id",image,aboutControllers.updateByIdWithImageAbout);
router.delete("/:id",auth, aboutControllers.deleteAbout);

export default router;