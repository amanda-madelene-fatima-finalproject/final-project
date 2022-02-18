import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import listEndpoints from 'express-list-endpoints';

//Import the endpoint functions
import {
  addTask,
  editTask,
  getTask,
  deleteTask,
  toggleTask,
} from './endpoints/Tasks.js';
import { assignRole, signIn, signUp } from './endpoints/createAccount.js';
import {
  accessDashboard,
  accessUserProfile,
} from './endpoints/accessAccount.js';
import authenticateUser from './authorization/authenticateUser.js'; //import authenticate user

// Madelene and Amanda
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/finalProject';

// Fatima
//const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1/finalProject";

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const User = require('./models/User.js');

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
// Cors allow all domains
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello World, Welcome to our Debug Todo app 🐞!');
});

// Get all the endpoints
app.get('/endpoints', (req, res) => res.send(listEndpoints(app)));

// ----- Task Endpoints --------//
app.post('/tasks/addtask', authenticateUser, addTask);
app.get('/tasks/:userId', authenticateUser, getTask);
app.patch('/tasks/:taskId/edit', authenticateUser, editTask);
app.delete('/tasks/:taskId/delete', authenticateUser, deleteTask);
app.post('/tasks/:taskId/done', authenticateUser, toggleTask);

// ----- Access Account Endpoints --------//
app.get('/dashboard', authenticateUser, accessDashboard);
app.get('/user/:userId/profile', authenticateUser, accessUserProfile);

// ----- Create Account Endpoints --------//
app.post('/signup', signUp);
app.post('/signin', signIn);
app.post('/role', assignRole);

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
