import skillController from "../controllers/skillControllers.js";
const router = express.Router()
import  express  from "express";

router.get("/",skillController.getskill)
router.post("/add",skillController.addskill)
router.put("/update:id",skillController.updateskill)
router.delete("/delete:id",skillController.deleteskill)

export default router