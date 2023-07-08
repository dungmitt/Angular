import express from "express";
import { Signin, Signup } from "../controler/auth";
const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
export default router;
