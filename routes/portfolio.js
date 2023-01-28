import express from "express";
const router = express.Router();
import portfolioController from "../controllers/portfolioController.js";
import auth from "../midleware/token-auth.js";

router.post("/create", auth, portfolioController.createPortfolio);
router.get("/", portfolioController.getPortfolio);
export default router;