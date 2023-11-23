import jwt from 'jsonwebtoken'
import express from 'express'

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        const payload = { userId: user._id, role: user.role };
        const token = jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Invalid email or password');
    }
});

router.get('/login', async (req, res) => {
    res.send("Accessing get method of Login router");
})

export default router