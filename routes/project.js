import express from 'express';
const router = express.Router();
import projectController from '../controllers/projectController.js'
import imageController from '../controllers/imageController.js';


router.get("/projects", projectController.getProjects )
router.post('/projects/add', imageController, projectController.addProject)
router.put("/projects/update/", imageController,projectController.updateProjectById)
router.delete("projects/delete/", projectController.deleteProjectById)

export default router