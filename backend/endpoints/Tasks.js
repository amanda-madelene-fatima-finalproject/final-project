import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Todo } = require('../models/Todo');



// ----- Task Endpoints --------//

// Endpoint to add todo tasks
export const addTask = async (req, res) => {
  const { task, userId} = req.body;

  try {
    const queriedId = await User.findById(userId);
    const newTask = await new Todo({ task, user: queriedId}).save();

    if (newTask) {
      res.status(201).json({ response: {
        task:newTask.task,
        creationDay: newTask.createdAt,
        done:newTask.done,
        author:newTask.user.username,

      }, success: true });

    } else {
      res.status(404).json({
        message: "Could not find task",
        success: false,
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid request", response: error, success: false });
  }
};


// Endpoint to get all the tasks
export const getTask = async (req, res) => {
const { userId } = req.params;


  try {
    const queriedUser = await User.findOne({ user: userId }); 

    const queriedTasks = await Todo.find({
      // user: mongoose.Types.ObjectId(userId),
      user: userId,
      
    });
    // const tasks = await Todo.find({ user: userId, completed: false });//here need to find the userId
    if (queriedTasks) {
      res.status(200).json({ response: queriedTasks  , user: userId, success: true });
    } else {
      res.status(404).json({
        message: "Could not find tasks",
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid request", response: error, success: false });
  }
};


// Endpoint to edit todo tasks
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
        message: "Could not find task",
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Invalid request",
      error: error,
      success: false,
    });
  }
};

// Endpoint to delete todo tasks
export const deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const deleteTask = await Todo.findOneAndDelete({ _id: taskId });
    if (deleteTask) {
      res.status(200).json({ response: deleteTask, success: true });
    } else {
      res.status(404).json({ response: "Could not find task", success: false });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid request", response: error, success: false });
  }
};

