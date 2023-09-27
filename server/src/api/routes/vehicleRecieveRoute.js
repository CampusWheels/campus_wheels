import express from 'express'
import VehicleEvent from '../../models/vehicleEvent.js'
import Vehicles from '../../models/vehicle.js'

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
      console.log(vehicleType, typeof(vehicleType));
      const matchedLP = data.event.matched_lp;
      const dbMatch = data.event.db_match;
      const images = data.base64_images;

      // Creating a new object with the extracted data
      const vehicleData = {
        type: vehicleType,
        time_stamp: formattedTime,
        direction: eventDirection,
        matchedLp: matchedLP,
        dbMatch: dbMatch.toString(), // Convert the array to a string
        images: images
      };

      console.log(vehicleData);

      //Create a new instance of the VechicleEvent model and save it to the database
      const vehicleEvent = new VehicleEvent(vehicleEventData);
      await vehicleEvent.save();

      //Create a new instance of vehicle model and save it to the database
      const vehicles = new Vehicles(vehicleData)
      await vehicles.save()

      res.send("Got the Vehicle Data").status(200).json({ message: 'Data stored successfully!' });
    }catch(error){
        console.error(error);
        res.status(202).json({ error: error.toString() });
    }
});

router.get('/receive-vehicle-event', async (req, res) =>{
  res.send("You are in the recieve-vehicle-event Route");
});

export default router