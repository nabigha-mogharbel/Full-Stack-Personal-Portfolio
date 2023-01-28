import express from "express";
const router = express.Router();
import projectController from "../controllers/projectController.js";
import imageController from "../midleware/imageController.js";
import auth from "../midleware/token-auth.js";

router.get("/", auth, projectController.getProjects);
router.post(
  "/create",
  auth,
  imageController,
  projectController.addProject
);
router.put("/update/:id", auth, projectController.updateProjectById);
router.put(
  "/update/withimg/:id",
  auth,
  imageController,
  projectController.updateProjectById
);
router.delete(
  "/delete/:id",
  auth,
  projectController.deleteProjectById
);
export default router;