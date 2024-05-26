const express = require('express');
const dotenv = require('dotenv');
// const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db.js');

// Load environment variables from .env file
dotenv.config();

// Ensure environment variables are loaded before using them
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    throw new Error('MONGO_URI is not defined in .env file');
}

// Connect to MongoDB using the connectDB function
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for cross-origin requests
app.use(cors());

// Define routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/properties', require('./routes/propertyRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
