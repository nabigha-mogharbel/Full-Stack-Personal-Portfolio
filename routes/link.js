import  express  from "express";
import links from "../controllers/linkController.js";
const router = express.Router()



router.get("/", links.getlink)
router.post("/addlink",links.addlink)
router.put("/update:id" , links.deletelink)
router.delete("/delete:id",links.deletelink)

export default router