import express from 'express'
import Vehicles from '../../models/vehicle.js'
import UnregisteredVehicle from '../../models/unregisteredVehicle.js';

const router = express.Router();
console.log("Inside vehicleDetailsRoute.js")

router.get('/vehicles', async (req, res) => {
    try{
        const vehicles = await Vehicles.find();
        console.log("\nFetching the registered Vehicles data");
        const total_registered = await Vehicles.countDocuments();
        console.log("Total number of Registered Vehicles are: ", total_registered);
        res.json(vehicles)
    }catch(error){
        res.status(500).json({ message: error.message});
    }
});

router.get('/unregistered-vehicles', async (req, res) => {
    try{
        const unregistered = await UnregisteredVehicle.find();
        console.log("\nFetching the Unregistered Vehicles");
        const total_unregistered = await UnregisteredVehicle.countDocuments();
        console.log("Total number of Unregistered Vehicles are:", total_unregistered);
        res.json(unregistered)
    }catch(error){
        res.status(500).json({ message: error.message });
    }
});

export default router;