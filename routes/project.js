import express from 'express';
const router = express.Router();
import projectController from '../controllers/projectController.js'
import imageController from '../controllers/imageController.js';


router.get("/projects", projectController.getProjects )
router.post('/projects/add', imageController, projectController.addProject)
router.put("/projects/update/:id",projectController.updateProjectById)
router.put("/projects/update/withimage/:id", imageController,projectController.updateProjectById)
router.delete("/projects/delete/:id", projectController.deleteProjectById)



export default router