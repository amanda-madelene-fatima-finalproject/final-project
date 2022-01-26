import mongoose from 'mongoose';

// ------- ROLE Schema ------------//

const RoleSchema = mongoose.Schema({
  description: String,
});

const Role = mongoose.model('Role', RoleSchema);
module.exports = Role;
