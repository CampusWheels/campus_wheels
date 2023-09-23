const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")

// Load environment variables from .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

//Middleware
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });

// Define a route that responds with a message
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send a simple message as the response
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});