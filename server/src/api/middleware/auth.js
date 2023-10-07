//To handle role based access control
import express from 'express'
import bcrypt from 'bcrypt'
import Users from '../../models/users.js';
const router = express.Router();

// router.post('/register', async (req, res) => {
//    
//     const user = new Users({ firstName, lastName, email, role, department, employeeStudentId, phoneNumber, registrationDate, govtId, password: hashedPassword, timeStamp });
//     await user.save();
//     res.sendStatus(201);
// });



export const register = async (req, res, next) => {
    const { firstName, lastName, email, role, department, employeeStudentId, phoneNumber, registrationDate, govtId,  password, timeStamp  } = req.body;
    if(password.length < 8) {
        return res.status(400).json({ message: "Password should be greater than 8 letters" })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        await Users.create({
            message: "User successfully created",
            email, 
            hashedPassword,
            firstName,
            lastName,
            role,
            department,
            employeeStudentId,
            phoneNumber,
            registrationDate,
            timeStamp
        }).then(user => 
            res.status(200).json({
                message: "User successfully Created!",
                user }));
    }catch (err) {
        res.status(401).json({
            message: "User not created!",
            error: err.message,
        })
    }
}


export const login = async (req, res, next) => {
    const { email, password } = req.body;

    
}
