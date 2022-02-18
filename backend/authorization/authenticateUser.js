const User = require('../models/User.js');

// Authentication:  to check if you are a user
// When a user signs up, an accessToken is created and sent from the backend to the frontend so each user have their own tocken.

const authenticateUser = async (req, res, next) => {
  // Authorization: When signed in this authorizes what you have access to and can do
  const accessToken = req.header('Authorization');

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
          message: 'Please, login!',
        },
        success: false,
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Invalid request', response: error, success: false });
  }
};

export default authenticateUser;
