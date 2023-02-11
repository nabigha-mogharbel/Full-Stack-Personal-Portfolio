import skillController from "../controllers/skillControllers.js";
const router = express.Router();
import express from "express";
import auth from "../midleware/token-auth.js";

router.get("/", skillController.getskill);
router.post("/create",  skillController.addskill);
router.put("/update/:id",  skillController.updateskill);
router.delete("/delete/:id",  skillController.deleteskill);
export default router;