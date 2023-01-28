import express from "express";
import links from "../controllers/linkController.js";
const router = express.Router();
import auth from "../midleware/token-auth.js";

router.get("/", auth, links.getlink);
router.post("/create", auth, links.addlink);
router.put("/update/:id", auth, links.updatelink);
router.delete("/delete/:id", auth, links.deletelink);
export default router;