import express from "express";
import { addTask, deleteTask, getTasks, updateTask } from "../controller/task.controller.js";
import { verifyToken } from "../middleware/verify.middleware.js";
// initialize a new router

const router = express.Router();
router.use(verifyToken);
router.get("/",getTasks);
router.post("/", addTask);
router.put("/",updateTask);
router.delete("/:id",deleteTask);

export default router;
// export the path and the router
