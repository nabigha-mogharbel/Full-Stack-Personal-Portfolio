import express from 'express'
const router = express.Router();
import aboutControllers from "../controllers/aboutControllers.js";
import auth from "../midleware/token-auth.js";


router.post("/", auth,aboutControllers.createAbout);
router.get("/",auth, aboutControllers.getAllAbout);
router.get("/:id",auth, aboutControllers.getAbout);
router.put("/:id",auth, aboutControllers.updateAbout);
router.delete("/:id",auth, aboutControllers.deleteAbout);

export default router;