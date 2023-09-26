import connectDB from './config/db.js'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import VehicleEvent from './models/vehicleEvent.js'
import users from './models/users.js'
import vehicles from './models/vehicle.js'

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

//To recieve Vehicle Event from the python server

app.get('/users', async (req, res) => {
  try{
    const users = new users(req.body);
    await users.save();
    res.status(200).json({ message: 'User Retrieved'});
  }catch(error) {
    console.error(error);
    res.status(500).json({ error: error.toString() });
  }
});



app.post('/receive-vehicle-event', async (req, res) => {
  try {

      const data = req.body;
      const vehicleEventData = req.body;
      console.log(vehicleEventData);

      const eventTimestamp = data.info.event_timestamp;
      const formattedTime = converToUtc(eventTimestamp)
      console.log(formattedTime);

      const eventDirection = data.event.direction;
      const vehicleType = data.event.vehicle_category.type;
      const matchedLP = data.event.matched_lp;
      const dbMatch = data.event.db_match;
      const images = data.base64_images;

      // Creating a new object with the extracted data
      const vehicleData = {
        num: matchedLP,
        type: vehicleType,
        // ownerRole: "", // Assign the appropriate value here
        // validity: "", // Assign the appropriate value here
        time_stamp: formattedTime,
        direction: eventDirection,
        matchedLp: matchedLP,
        dbMatch: dbMatch.toString(), // Convert the array to a string
        images: images
      };

      //Create a new instance of the VechicleEvent model and save it to the database
      const vehicleEvent = new VehicleEvent(vehicleEventData);
      await vehicleEvent.save();

      //Create a new instance of vehicle model and save it to the database
      const vehicle = new vehicles(vehicleData)
      await vehicle.save()

      res.status(200).json({ message: 'Data stored successfully!' });

  } catch (error) {
      console.error(error);
      res.status(202).json({ error: error.toString() });
  }
});

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