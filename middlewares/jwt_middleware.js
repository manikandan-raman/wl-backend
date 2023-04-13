
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../utils/constants');

const auth = (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer', '').trim();
        if (!token) {
            res.status(401).json({  error: { message: 'Invalid access token'} });
        }
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        res.locals.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({  error: { message: 'Invalid access token'} });
    }
}

module.exports = auth;