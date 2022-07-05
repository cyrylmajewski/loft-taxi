const User = require("./models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { secret } = require('./config');

const generateAccessToken = (id) => {
    const payload = { 
        id
    }

    return jwt.sign(payload, secret, { expiresIn: "24h" })
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({ message: "Error in registration", errors })
            }

            const { username, password } = req.body;
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({ message: 'User exists' })
            }
            const hashPass = bcrypt.hashSync(password, 7);
            const user = new User({ username, password: hashPass })
            await user.save()
            return res.json({ message: 'Sign up is successful' })
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Registration error' })
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username })
            if(!user) {
                return res.status(400).json({ message: `User ${username} is not found` })
            }
            const validPassword = bcrypt.compareSync(password, user.password)

            if(!validPassword) {
                return res.status(400).json({ message: `Password is incorrect` })
            }

            const token = generateAccessToken(user._id)

            return res.json({ token })
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Login error' })
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {

        }
    }
}

module.exports = new authController();