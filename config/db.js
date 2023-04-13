const mongoose = require('mongoose');
module.exports = {
    connectDB: async(app) => {
        try {
            // let mongoUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`;
            let mongoUrl = process.env.MONGO_URI;
            return await mongoose.connect(mongoUrl);
        } catch (error) {
            throw error;
        }
    }
}