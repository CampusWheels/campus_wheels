import express from 'express'
import vehicles from '../../models/vehicle.js'

const router = express.Router();
console.log("Inside vehicleDetailsRoute.js")
router.get('/vehicles', async (req, res) => {
    try{
        const vehicle = await vehicles.find();
        console.log(vehicle)
        res.json(vehicle)
    }catch(error){
        res.status(500).json({ message: error.message});
    }
});

export default router;