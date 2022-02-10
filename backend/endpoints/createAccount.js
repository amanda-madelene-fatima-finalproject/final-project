const Role = require('../models/Role.js');
const User = require('../models/User.js');

import bcrypt from 'bcrypt'; // It generates a very long random string, like a second id

// 1- Endpoint to sign up
export const signUp = async (req, res) => {
  const { name, username, password, roleId } = req.body;

  try {
    // To randomize password
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw 'password and must be at least 5 characters long';
    }
    const queriedRole = await Role.findById(roleId);
    // Creating a new user and generating an _id
    const newUser = await new User({
      name,
      username,
      password: bcrypt.hashSync(password, salt),
      role: queriedRole,
    }).save();

    if (newUser) {
      res.status(201).json({
        // Instead of sending the whole newUser model, we refer to them by key value as to leave out the password for security reasons.
        response: {
          userId: newUser._id,
          name: newUser.name,
          username: newUser.username,
          role: newUser.role,
          accessToken: newUser.accessToken,
        },
        success: true,
      });
    } else {
      res.status(404).json({
        response: 'Can not register user',
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Invalid request',
      response: error,
      message: 'error',
      success: false,
    });
  }
};

// 2- Endpoint to sign in: Here we check if the user model exist in the database
export const signIn = async (req, res) => {
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
          name: user.name,
          accessToken: user.accessToken,
          role: user.role,
        },
        success: true,
      });
    } else {
      res.status(404).json({
        response: 'User or password does not match',
        success: false,
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Invalid request', response: error, success: false });
  }
};

// 3- Endpoint to create a role
export const assignRole = async (req, res) => {
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
};
