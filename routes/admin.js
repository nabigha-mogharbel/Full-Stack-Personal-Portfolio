import express from "express";
import cookieParser from "cookie-parser";

const router = express.Router();
import adminController from "../controllers/adminController.js";
import login from "../midleware/logIn.js";
import logOut from "../midleware/logOut.js";
import auth from "../midleware/token-auth.js";


router.use("/login", login);
router.post("/", adminController.createAdmin);
router.get("/", auth, adminController.getAdmin);
router.put("/:id", auth, adminController.updateAdmin);
router.get("/logout", logOut);
export default router;
