const router = require('express').Router();
const {findUserById} = require('../controllers/user_controller');

router.get('/:id', findUserById);

module.exports = router;