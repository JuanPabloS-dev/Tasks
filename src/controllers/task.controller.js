import TaskService from "../services/task.service.js";

class TaskController {
  constructor() {
    this.taskService = new TaskService();
    this.getAllTasks = this.getAllTasks.bind(this);
    this.getTaskById = this.getTaskById.bind(this);
    this.editTask = this.editTask.bind(this);
    this.toggleTaskDone = this.toggleTaskDone.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  async getAllTasks(req, res, next) {
    try {
      const tasks = await this.taskService.getAllTasks();
      res.render("index", { tasks });
    } catch (error) {
      next(error);
    }
  }

  async getTaskById(req, res, next) {
    const { id } = req.params;
    try {
      const task = await this.taskService.getTaskById(id);
      res.render("edit", { task });
    } catch (error) {
      next(error);
    }
  }

  async editTask(req, res, next) {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
      await this.taskService.editTask(id, title, description);
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  }

  async toggleTaskDone(req, res, next) {
    const { id } = req.params;
    try {
      await this.taskService.toggleTaskDone(id);
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  }

  async deleteTask(req, res, next) {
    const { id } = req.params;
    try {
      await this.taskService.deleteTask(id);
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  }
}
export default TaskController;
