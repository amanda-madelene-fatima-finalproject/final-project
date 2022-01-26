import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import bcrypt from "bcrypt"; // It generates a very long random string, like a second id
import crypto from "crypto"; // To hash and unhash the password

import { addTask, editTask, getTask, deleteTask } from "./endpoints/Tasks.js";

const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1/finalProject"; // SWITCH TO LOCALHOST when not Fatima
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const Dashboard = require('./models/Dashboard.js');
const User = require('./models/User.js');
// const Todo = require('./models/Todo.js');
const Role = require('./models/Role.js');

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
  res.send("Hello World!");
});

// Get all the endpoints
app.get("/endpoints", (req, res) => {
  res.send(listEndpoints(app));
});

// ----- Task Endpoints --------//
app.post("/tasks/addtask", authenticateUser);
app.post("/tasks/addtask", addTask)
app.get("/tasks/:userId", authenticateUser); //userId here
app.get("/tasks/:userId", getTask)
app.patch("/tasks/:taskId/edit", authenticateUser);
app.patch("/tasks/:taskId/edit", editTask)
app.delete("/tasks/:taskId/delete", authenticateUser);
app.delete("/tasks/:taskId/delete", deleteTask);


// ----- Dashboard Endpoints --------//

// Endpoint to show the task overviews
app.get("/dashboard", authenticateUser);

app.get("/dashboard", async (req, res) => {
  const dashboard = await Dashboard.find({});
  res.status(200).json({ response: dashboard, success: true });
});



// ----- Create Role Endpoint --------//

app.post("/role", async (req, res) => {
  // destructuring description from the body(RoleSchema)
  const { description } = req.body;
  try {
    // We create a new role by passing on object (description) that comes from the body
    // The role schema consists of only one property, the description
    const newRole = await new Role({ description }).save();
    res.status(201).json({ response: newRole, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// ----- Create Profile Endpoints --------//

// Endpoint to sign up
app.post("/signup", async (req, res) => {
  const { username, password, roleId } = req.body;

  try {
    // To randomize password
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw "password and must be at least 5 characters long";
    }
    const queriedRole = await Role.findById(roleId);
    // Creating a new user and generating an _id: "shshj5k4773sddf"
    const newUser = await new User({
      username,
      password: bcrypt.hashSync(password, salt),
      role: queriedRole,
    }).save();

    if (newUser) {
      res.status(201).json({
        // Instead of sending the whole newUser model, we refer to them by key value as to leave out the password for security reasons.
        response: {
          userId: newUser._id,
          username: newUser.username,
          role: newUser.role,
          accessToken: newUser.accessToken,

        },
        success: true,
      });
    } else {
      res.status(404).json({
        response: "Can not register user",
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Invalid request",
      response: error,
      message: "error",
      success: false,
    });
  }
});

//Endpoint to get the user's info
app.get("/user/:userId/profile", async (req, res) => {
  const { userId } = req.params;
  // in order to return a document and not only an id we need to populate, it takes one argument with what property needs to be populated
  // under the hood populate performs another query, findById, looks through roles collection to find one particular role with that id
  const user = await User.findById(userId).populate("role");
  res.status(201).json({ response: user, success: true });
});


// Endpoint to sign in: Here we see if the user model exist in database above.
app.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    // const user = await User.findOne({ username }).populate("role"); // shall we populate here aswell? if so, when a user signs is, can see his/her role 

    // Checking if user and password already exist
    // Comparing if password (normal) sent in the body is the same as the password(hashed) saved in the database
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        response: {
          userId: user._id,
          username: user.username,
          accessToken: user.accessToken,
          role: user.role,
        },
        success: true,
      });
    } else {
      res.status(404).json({
        response: "User or password does not match",
        success: false,
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Invalid request", response: error, success: false });
  }
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
