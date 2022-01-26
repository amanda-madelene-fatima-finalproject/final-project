import mongoose from 'mongoose';

// ----- DashboardSchema --------//
const DashboardSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
  },
});

// Dashboard model that uses the DashboardSchema
const Dashboard = mongoose.model('Dashboard', DashboardSchema);
module.exports = Dashboard;
