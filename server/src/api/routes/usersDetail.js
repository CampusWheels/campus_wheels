import express from 'express'
import Users from '../../models/users.js'

const router = express.Router()

router.get('/users', async (req, res) => {
    try{
        const users = await Users.find();
        console.log(users);
        res.json(users)

    }catch(error){
        console.log(error);
        res.status(500).json({ messgage: error.messgage})
    }
});

export default router



