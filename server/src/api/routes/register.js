import express from 'express'
import bcrypt from 'bcrypt'
import Users from '../../models/users.js'; // import your User model
import { register } from '../middleware/auth.js';

const router = express.Router();

router.route('/register').post(register);

router.get('/register', async (req, res) => {
    res.send("Inside get register router for a user");
})


export default router