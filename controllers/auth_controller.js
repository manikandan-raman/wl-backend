const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SALT_ROUNDS } = require('../utils/constants');
const { JWT_SECRET_KEY } = require('../utils/constants');



const registerUser = async(req, res, next) => {
    try {
        let password = await bcrypt.hash(req.body.password, SALT_ROUNDS);
         let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password
        })
        user = await user.save();
        return res.status(201).json({msg: 'success', user});
    } catch (error) {
        next(error);
    }
}

const loginUser = async(req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(user) {
        if(bcrypt.compareSync(password, user.password)) {
            delete user.password;
            const token = jwt.sign({
                id: user._id, 
                name: user.name, 
                email: user.email
            }, JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRY });
            return res.status(201).json({msg: 'success', user, token});
        } else {
            return res.status(400).json({error: { message: 'Invalid Password'}});
        }
    } else {
        return res.status(400).json({error: { message: 'Email does not exist'}});
    }
}

module.exports = { registerUser, loginUser }