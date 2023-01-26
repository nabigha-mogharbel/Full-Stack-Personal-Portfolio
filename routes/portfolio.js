import express from 'express';
const router = express.Router();
import portfolioController from '../controllers/portfolioController.js'
import auth from "../midleware/token-auth.js";

router.post("/add",auth, portfolioController.createPortfolio)
router.get("/",auth, portfolioController.getPortfolio)
export default router