import {Router} from "express";
import {signUp} from "../controllers/auth.controller.js";

const router = Router();

router.post('/auth/signup', signUp);

export default router;