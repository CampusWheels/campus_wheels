import express from 'express'
import bcrypt from 'bcrypt'
import Users from '../../models/users.js'; // import your User model
import { register } from '../middleware/auth.js';
import Vehicles from '../../models/vehicle.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    const user = new Users(req.body.user);
    const vehicle = new Vehicles({ ...req.body.vehicle, user: user._id});

    try{
        await user.save();
        await vehicle.save();
        res.status(201).send({user, vehicle});
    }catch(error){
        res.status(400).send(error);
    }
});


router.get('/register', async (req, res) => {
    res.send("Inside get register router for a user");
})


export default router