import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
