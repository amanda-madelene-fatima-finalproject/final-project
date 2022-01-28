import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";

import { addTask, editTask, getTask, deleteTask } from "./endpoints/Tasks.js";
import { assignRole, signIn, signUp } from "./endpoints/CreateAccount.js";
import {
  accessDashboard,
  accessUserProfile,
} from "./endpoints/AccessAccount.js";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/finalProject"; // SWITCH TO 'mongodb://localhost/finalProject' when not Fatima
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const User = require("./models/User.js");

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
// Cors allow all domains
app.use(cors());
app.use(express.json());

// Authentication:  to check if you are a user
const authenticateUser = async (req, res, next) => {
  // Authorization: When signed in this authorizes what you have access to and can do
  const accessToken = req.header("Authorization");

  try {
    // Checks if user has an accessToken
    const user = await User.findOne({ accessToken });
    // If it does we can proceed with sign in
    if (user) {
      next();
      // If not, the user is prompted to sign in
    } else {
      res.status(401).json({
        response: {
          message: "Please, login!",
        },
        success: false,
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid request", response: error, success: false });
  }
};

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello World, Welcome to our Debug Todo app 🐞!");
});

// Get all the endpoints
app.get("/endpoints", (req, res) => {
  res.send(listEndpoints(app));
});

// ----- Task Endpoints --------//
app.post("/tasks/addtask", addTask);
app.get("/tasks/:userId", authenticateUser, getTask);
app.patch("/tasks/:taskId/edit", authenticateUser, editTask);
app.delete("/tasks/:taskId/delete", authenticateUser, deleteTask);

// ----- Access Account Endpoints --------//
app.get("/dashboard", authenticateUser, accessDashboard);
app.get("/user/:userId/profile", accessUserProfile);

// ----- Create Account Endpoints --------//
app.post("/signup", signUp);
app.post("/signin", signIn);
app.post("/role", assignRole);

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
