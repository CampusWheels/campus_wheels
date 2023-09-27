import express from 'express'
import Vehicles from '../../models/vehicle.js'

const router = express.Router();
console.log("Inside vehicleDetailsRoute.js")

router.get('/vehicles', async (req, res) => {
    try{
        const vehicles = await Vehicles.find();
        console.log(vehicles)
        res.json(vehicles)
    }catch(error){
        res.status(500).json({ message: error.message});
    }
});

export default router;