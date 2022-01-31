import mongoose from 'mongoose';

// ------- ROLE Schema ------------//

const RoleSchema = mongoose.Schema({
  description: String,
  enum: ['user', 'admin'],
});

const Role = mongoose.model('Role', RoleSchema);
module.exports = Role;
