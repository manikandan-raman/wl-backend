const User = require('../models/user_model');
const {Types} = require('mongoose');

const findUserById = async(req, res, next) => {
    // return res.status(200).json({msg: 'success'});
    try {
        const user = await User.findById(new Types.ObjectId(req.params.id)).select('-password');
        return res.status(200).json({msg: 'success', user});
    } catch (error) {
        next(error);
    } 
}

const findAllUsers = (req, res, next) => { 
    return res.status(200).json({msg: 'success'});
}

const updateUserById = (req, res, next) => { 
    return res.status(200).json({msg: 'success'});
}

const deleteUserById = (req, res, next) => { 
    return res.json({msg: 'success'});
}

module.exports = {findUserById, findAllUsers, updateUserById, deleteUserById}
