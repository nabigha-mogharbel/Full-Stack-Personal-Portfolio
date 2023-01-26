import express from 'express';
const router = express.Router();
import projectController from '../controllers/projectController.js'
import imageController from '../controllers/imageController.js';
import auth from "../midleware/token-auth.js";


router.get("/projects",auth, projectController.getProjects )
router.post('/projects/add',auth, imageController, projectController.addProject)
router.put("/projects/update/:id",auth,projectController.updateProjectById)
router.put("/projects/update/withimage/:id",auth, imageController,projectController.updateProjectById)
router.delete("/projects/delete/:id",auth, projectController.deleteProjectById)



export default router