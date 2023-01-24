// const express = require("express");
import express from 'express'
const router = express.Router();
import adminController from "../controllers/adminController.js";

router.post("/create", adminController.createAdmin);
router.get("/", adminController.getAdmin);
router.put("/:id", adminController.updateAdmin);

export default router;