import express from 'express';
const router = express.Router();
import portfolioController from '../controllers/portfolioController.js'

router.post("/add", portfolioController.createPortfolio)
router.get("/", portfolioController.getPortfolio)
export default router