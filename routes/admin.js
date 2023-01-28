import express from "express";
const router = express.Router();
import adminController from "../controllers/adminController.js";
import logOut from "../midleware/logOut.js";
import auth from "../midleware/token-auth.js";

router.post("/login", adminController.login);
router.post("/create", auth, adminController.createAdmin);
router.get("/", auth, adminController.getAdmin);
router.put("/update/:id", auth, adminController.updateAdmin);
router.get("/logout", logOut);
export default router;