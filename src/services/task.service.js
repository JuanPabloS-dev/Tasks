import AppError from "../errors/error.js";
import Task from "../models/Task.js";

class TaskService {


    async getAllTasks() {
    return Task.find().lean();
    }

    async getTaskById(id) {
            if (!id) throw new AppError("ID is required", 400);
            return await Task.findById(id).lean();

    }
    async addTask(title,description) {
            if (!title || !description) throw new AppError("Title and Description are required", 400);
            const newTask = new Task({ title, description });
            await newTask.save();
    }
    
    async editTask(id, title, description) {
        const task = await Task.findByIdAndUpdate(id,{title,description})
        if (!task) throw new AppError("Task not found", 404);
        return task;
    }

    async toggleTaskDone(id) {

        if (!id) throw new AppError("ID is required", 400);
        const task = await Task.findByIdAndUpdate(id,
        [
          { $set: { done: { $not: "$done" } } }
        ])
        if (!task) throw new AppError("Task not found", 404);
        return task;
        
    }

    async deleteTask(id) {
        if (!id) throw new AppError("ID is required", 400);
        return Task.findByIdAndDelete(id)
    }
}
export default TaskService;