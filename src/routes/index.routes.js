import { Router } from "express";
import TaskController from "../controllers/task.controller.js";
import { ta } from "zod/locales";

const taskController = new TaskController();
const routerApp = Router()

routerApp.get("/",taskController.getAllTasks);
routerApp.post("/task/add",taskController.addTask);
routerApp.get('/task/edit/:id',taskController.getTaskById);
routerApp.post('/task/edit/:id',taskController.editTask);
routerApp.get('/task/toggleDone/:id',taskController.toggleTaskDone);
routerApp.get('/task/delete/:id',taskController.deleteTask);
export default routerApp