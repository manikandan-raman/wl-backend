const mongoose = require('mongoose');
module.exports = {
    connectDB: async(app) => {
        try {
            // let mongoUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`;
            let mongoUrl = 'mongodb+srv://wl_user:Admin_123@cluster0.zktz49w.mongodb.net/?retryWrites=true&w=majority';
            return await mongoose.connect(mongoUrl);
        } catch (error) {
            throw error;
        }
    }
}