import express from `express`;
const router = express.Route();
import experienceController from `../controllers/experienceController.js`;

router.get(`/`, experienceController.getAllExperiences);
router.get(`/:id`, experienceController.getExperience);
router.post(`/`, experienceController.postExperience);
// router.put(`/:id`, experienceController.putExperience);
// router.delete(`/:id`, experienceController.deleteExperience);


export default router;