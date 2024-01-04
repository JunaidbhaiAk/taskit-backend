import Task from "../models/task.modal.js";

export const addTask = async (req, res) => {
  try {
    const userId = req.userId;
    const { taskTitle } = req.body;
    if (taskTitle.length === 0) {
      return res.status(500).json({ msg: "Please Enter The Task" });
    }
    const newTask = new Task({ taskTitle, userId });
    const data = await newTask.save();
    const {ceeatedAt,_id} = data;
    res.status(200).json({ceeatedAt,_id,"taskTitle":data.taskTitle});
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const { taskId, taskTitle } = req.body;
    if (!taskId || taskTitle.length === 0) {
      res.status(500).json({ msg: "Please Provide All Details" });
      return;
    }
    const filterId = { _id: taskId };
    const updatedTaskTitle = { taskTitle: taskTitle };
    const updatedTask = await Task.findOneAndUpdate(filterId, updatedTaskTitle);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTasks = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);
    if (!userId) {
      res.status(500).json({ msg: "Please Provide User Id or Login" });
      return;
    }
    const tasks = await Task.find({ userId }).select({_id:1,taskTitle:1,createdAt:1});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    if (!taskId) {
      res.status(500).json({ msg: "Please Provide TaskId" });
      return;
    }
    const deletedTask = await Task.deleteOne({ _id: taskId });
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(500).json(error);
  }
};
