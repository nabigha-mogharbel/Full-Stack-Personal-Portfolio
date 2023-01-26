import express from 'express';
const router = express.Router();
import experienceController from "../controllers/experienceController.js";
import auth from "../midleware/token-auth.js";

router.get('/',auth, experienceController.getAllExperience);
router.post('/',auth, experienceController.addExperience);
router.get('/:id',auth, experienceController.getExperience);
router.patch('/:id',auth, experienceController.putExperience);
router.delete('/:id',auth, experienceController.deleteExperience);


export default router;  