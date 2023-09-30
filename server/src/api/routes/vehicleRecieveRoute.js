import express from 'express'
import VehicleEvent from '../../models/vehicleEvent.js'
import Vehicles from '../../models/vehicle.js'
import UnregisteredVehicle from '../../models/unregisteredVehicle.js';

const router = express.Router();
console.log("Inside Vehicle Recieve route");

router.post('/receive-vehicle-event', async (req, res) => {
    try {
      const data = req.body;
      const vehicleEventData = req.body;
      // console.log(vehicleEventData);

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
        vehicle_type: vehicleType,
        time_stamp: formattedTime,
        direction: eventDirection,
        matchedLp: matchedLP.trim(),
        dbMatch: dbMatch.toString(), // Convert the array to a string
        images: images,
        registered: null,
      };

      //Check if the vehicle is registered ie present in the vehicles collection
      const existingVehicles = await Vehicles.findOne({ matchedLp: vehicleData.matchedLp})

      if(!existingVehicles){
      //Create a new instance of vehicle model and save it to the database
      const unregistered = new UnregisteredVehicle(vehicleData)
      await unregistered.save()
      console.log("\n\nUnregistered Vehicle with vehicle number ", vehicleData.matchedLp, "Stored successfully!");
      
      return res.status(200).json({ message: 'Vehicle is Unregistered!' });
      }

      console.log("\n\nThe Vehicle", vehicleData.matchedLp, "is registered!");
      return res.status(200).json({ message: "Vehicle is Registered!"});


      //Create a new instance of the VechicleEvent model and save it to the database
      // const vehicleEvent = new VehicleEvent(vehicleEventData);
      // await vehicleEvent.save();
      
    }catch(error){
        console.error(error);
        res.status(202).json({ error: error.toString() });
    }
});

router.get('/receive-vehicle-event', async (req, res) =>{
  res.send("You are in the recieve-vehicle-event Route");
});


function converToUtc(utc){
  let dateObj = new Date(utc*1000);
  let utcString = dateObj.toUTCString();
  let time = utcString.slice(-11, -4);
  return time;
}


export default router