//To create a database User Schema from mongoose

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  role: String,
  vehicleNumber: String,

  // ...other fields
});

// Define the model for the User collection
const User = mongoose.model('User', userSchema);

module.exports = User
