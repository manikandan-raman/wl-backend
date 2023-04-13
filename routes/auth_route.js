const router = require('express').Router();
const { registerUser, loginUser } = require('../controllers/auth_controller');

router.post('/signup', registerUser);
router.post('/login', loginUser);

module.exports = router;