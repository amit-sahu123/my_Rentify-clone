const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        // console.log('MONGO_URI:', uri);
        if (!uri) {
            throw new Error('MONGO_URI is not defined in .env file');
        }

        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
