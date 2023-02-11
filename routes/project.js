import express from "express";
const router = express.Router();
import projectController from "../controllers/projectController.js";
import imageController from "../midleware/imageController.js";
import auth from "../midleware/token-auth.js";

router.get("/", projectController.getProjects);
router.post("/create", imageController, projectController.addProject);
router.put("/update/:id", projectController.updateProjectById);
router.put(
  "/update/withimg/:id",

  imageController,
  projectController.updateProjectById
);
router.delete(
  "/delete/:id",

  projectController.deleteProjectById
);
export default router;
