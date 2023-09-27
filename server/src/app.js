import connectDB from './config/db.js'
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import vehicleDetailRoute from './api/routes/vehicleDetailsRoute.js'
import vehicleRecieveRoute from './api/routes/vehicleRecieveRoute.js'
import usersDetail from './api/routes/usersDetail.js'

// Load environment variables from .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

//Middleware
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
connectDB();

// Define a route that responds with a message
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send a simple message as the response
});

app.use('/', usersDetail)

app.use('/', vehicleDetailRoute);

//To recieve Vehicle Event from the python server
app.use('/', vehicleRecieveRoute);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});

function converToUtc(utc){
  let dateObj = new Date(utc*1000);
  let utcString = dateObj.toUTCString();
  let time = utcString.slice(-11, -4);
  return time;
}