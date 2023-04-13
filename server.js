require('dotenv').config();
const express = require("express")
const cors = require('cors');
const userRoutes = require('./routes/user_route');
const authRoutes = require('./routes/auth_route');
const errorHandler = require('./middlewares/error-handler');
const jwtMiddleware = require('./middlewares/jwt_middleware');
const morgan = require('morgan');

function createServer() {
	const app = express();
    app.use(express.json());
    // app.use(cors());
    // app.use((req,res,next) => {
    //     res.header("Access-Control-Allow-Origin","*");
    //     res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS");
    //     res.header("Access-Control-Allow-Headers","*");
    //     next();
    // })
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
    app.use('/auth', authRoutes);
    app.use('/users', jwtMiddleware, userRoutes);
    app.use(errorHandler);
    return app;
}

module.exports = createServer;