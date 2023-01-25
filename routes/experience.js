import express from 'express';
const router = express.Router();
import experienceController from "../controllers/experienceController.js";

router.get('/', experienceController.getAllExperience);
router.post('/', experienceController.addExperience);
router.get('/:id', experienceController.getExperience);
router.patch('/:id', experienceController.putExperience);
router.delete('/:id', experienceController.deleteExperience);


export default router;  