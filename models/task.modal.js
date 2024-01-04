import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    taskTitle: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("task", taskSchema);
export default Task;
