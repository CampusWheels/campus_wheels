import express from 'express'
import bcrypt from 'bcrypt'
import Users from '../../models/users.js'; // import your User model
import Visitor from '../../models/visitors.js';
// import { register } from '../middleware/auth.js';
import Vehicles from '../../models/vehicle.js';

const router = express.Router();

router.post('/visitor', async (req, res) => {
    console.log("Insde /visitor post function");
    const visitor = new Visitor(req.body.visitor);
    const vehicle = new Vehicles({ ...req.body.vehicle, visitor: visitor._id});

    try{
        await visitor.save();
        await vehicle.save();
        console.log("user with data ", visitor, " is successfully Registered!");
        res.status(201).send({visitor, vehicle});
        
    }catch(error){
        res.status(400).send(error);
    }
});

export default router