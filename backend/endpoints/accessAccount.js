const Dashboard = require('../models/Dashboard.js');
const User = require('../models/User.js');

// ----- Dashboard Endpoints --------//

// Endpoint to show the task overviews
export const accessDashboard = async (req, res) => {
  const dashboard = await Dashboard.find({});
  res.status(200).json({ response: dashboard, success: true });
};

//Endpoint to get the user's info
export const accessUserProfile = async (req, res) => {
  const { userId } = req.params;
  // in order to return a document and not only an id we need to populate, it takes one argument with what property needs to be populated
  // under the hood populate performs another query, findById, looks through roles collection to find one particular role with that id
  const user = await User.findById(userId).populate('role');
  res.status(201).json({ response: user, success: true });
};
