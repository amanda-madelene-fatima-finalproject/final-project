import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import listEndpoints from 'express-list-endpoints';
import bcrypt from "bcrypt"; // It generates a very long random string, like a second id
import crypto from "crypto"; // To hash and unhash the password

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/finalProject";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

//----- UserSchema ------//
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  // Unique identifier for authentication when signing in
  accessToken: {
    type: String,
    // creates the accessToken by randomizing a string (128 is the length), hex means letters (if removed it generates symbols).
    default: () => crypto.randomBytes(128).toString("hex"),
  },
});

// User model that uses the UserSchema
const User = mongoose.model("User", UserSchema);

// ----- DashboardSchema --------//
const DashboardSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
  },
});

// Dashboard model that uses the DashboardSchema
const Dashboard = mongoose.model("Dashboard", DashboardSchema);

// ----- TodoSchema --------//
const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  category: {
    type: String,
    enum: ["work", "home", "social", "health", "other"],
  },
  createdAt: {
    type: Number,
    default: () => Date.now(),
  },
});

// Todo model that uses the TodoSchema
const Todo = mongoose.model("Todo", TodoSchema);

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
    res.status(400).json({ response: error, success: false });
  }
};

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get all the endpoints
app.get('/endpoints', (req, res) => {
	res.send(listEndpoints(app));
});

// Endpoint to show the task overviews
app.get("/dashboard", authenticateUser);

app.get("/dashboard", async (req, res) => {
  const dashboard = await Dashboard.find({});
  res.status(200).json({ response: dashboard, success: true });
});

// Endpoint to sign up
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    // To randomize password
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw "password must be at least 5 characters long";
    }
    // Creating a new user and generating an _id: "shshj5k4773sddf"
    const newUser = await new User({
      username,
      password: bcrypt.hashSync(password, salt), // here we hash the password and randomize it before saving it to the database
    }).save();
    res.status(201).json({
      // Instead of sending the whole newUser model, we refer to them by key value as to leave out the password for security reasons.
      response: {
        userId: newUser._id,
        username: newUser.username,
        accessToken: newUser.accessToken,
      },
      success: true,
    });
  } catch (error) {
    res.status(400).json({ response: error, message: "error", success: false });
  }
});

// Endpoint to sign in: Here we see if the user model exist in database above.
app.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    // Checking if user and password already exist
    // Comparing if password (normal) sent in the body is the same as the password(hashed) saved in the database
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        response: {
          userId: user._id,
          username: user.username,
          accessToken: user.accessToken,
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
    res.status(400).json({ response: error, success: false });
  }
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
