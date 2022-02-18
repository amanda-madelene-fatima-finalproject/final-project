const Todo = require('../models/Todo'); //Connects to the model
const User = require('../models/User.js'); //Connects to the model

// ----- Task Endpoints --------//

// 1- Endpoint to add a task
export const addTask = async (req, res) => {
  const { task, userId, category } = req.body;

  try {
    const queriedId = await User.findById(userId);
    const newTask = await new Todo({ task, user: queriedId, category }).save();

    if (newTask) {
      res.status(201).json({
        response: {
          task: newTask.task,
          creationDay: newTask.createdAt,
          done: newTask.done,
          author: newTask.user.username,
          category: newTask.category,
        },
        success: true,
      });
    } else {
      res.status(404).json({
        message: 'Could not find task',
        success: false,
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Invalid request', response: error, success: false });
  }
};

// 2 - Endpoint to get all the tasks
export const getTask = async (req, res) => {
  const { userId } = req.params;

  try {
    const queriedTasks = await Todo.find({
      user: userId,
    });

    if (queriedTasks) {
      res
        .status(200)
        .json({ response: queriedTasks, user: userId, success: true });
    } else {
      res.status(404).json({
        message: 'Could not find tasks',
        success: false,
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ messe: 'Invalid request', response: error, success: false });
  }
};

// 3 - Endpoint to edit a task
export const editTask = async (req, res) => {
  const { taskId } = req.params;
  const { task } = req.body;

  try {
    const updatedTask = await Todo.findByIdAndUpdate(
      taskId,
      { task },
      { new: true }
    );
    if (updatedTask) {
      res.status(200).json({ response: updatedTask, success: true });
    } else {
      res.status(404).json({
        message: 'Could not find task',
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Invalid request',
      error: error,
      success: false,
    });
  }
};

// 4 - Endpoint to delete todo tasks
export const deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const deleteTask = await Todo.findOneAndDelete({ _id: taskId });
    if (deleteTask) {
      res.status(200).json({ response: deleteTask, success: true });
    } else {
      res.status(404).json({ response: 'Could not find task', success: false });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Invalid request', response: error, success: false });
  }
};

// 5 - Endpoint to toggle a task
export const toggleTask = async (req, res) => {
  const { taskId } = req.params;
  const { done } = req.body;

  try {
    const updatedDone = await Todo.findByIdAndUpdate(
      taskId,
      { done },
      { new: true }
    );
    res.status(200).json({ response: updatedDone, success: true });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Invalid request', response: error, success: false });
  }
};
