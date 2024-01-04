import { Router } from "express";
import { login, register } from "../controller/auth.controller.js";


const authRouter = Router();

authRouter.post('/',register);
authRouter.post('/login',login);

export default authRouter;