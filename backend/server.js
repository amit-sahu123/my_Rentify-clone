const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
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

// Remove the mongoose.connect call as it is handled in connectDB


// const express = require('express');
// const dotenv = require('dotenv');
// // const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const connectDB = require('./config/db.js');

// connectDB();

// // Other setup and configurations for your application

// dotenv.config();

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Create Express app once MongoDB connection is established
//     const app = express();

//     // Middleware to parse JSON requests
//     app.use(express.json());

//     // Enable CORS for cross-origin requests
//     app.use(cors());

//     // Define routes
//     app.use('/api/auth', require('./routes/authRoutes'));
//     app.use('/api/properties', require('./routes/propertyRoutes'));

//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error.message);
//   });














// // server.js
// const express = require('express');
// const app = express();
// const cors = require('cors'); 
// const PORT = process.env.PORT || 3000;
// const { Pool } = require('pg');

// let tasks = []; 

// const pool = new Pool({
//     user: 'postgres',
//     password: 'shubham0191',
//     host: 'localhost',
//     port: 5432,
//     database: 'postgres'
// });
// app.use(cors());
// app.options('*', cors());
// app.use(express.json());

// app.get('/api/tasks', (req, res) => {
//     pool.query('SELECT * FROM tasks', (error, results) => {
//         if (error) {
//             console.error('Error fetching tasks:', error);
//             res.status(500).json({ error: 'Error fetching tasks' });
//         } else {
//             res.json(results.rows);
//         }
//     });
// });

// app.post('/api/tasks', async (req, res) => {
//     const { title, description } = req.body;
//     try {
//         const result = await pool.query('INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *', [title, description]);
//         console.log('result when adding post', result)
//         res.status(201).json(result.rows[0]);
//     } catch (error) {
//         console.error('Error adding task:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });
// // Update a task
// app.put('/api/tasks/:id', async (req, res) => {
//     const { id } = req.params;
//     const { title, description } = req.body;
//     try {
//         const result = await pool.query('UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id]);
//         if (result.rowCount === 0) {
//             res.status(404).json({ message: 'Task not found' });
//         } else {
//             res.json(result.rows[0]);
//         }
//     } catch (error) {
//         console.error('Error updating task:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// // Delete a task
// app.delete('/api/tasks/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
//         if (result.rowCount === 0) {
//             res.status(404).json({ message: 'Task not found' });
//         } else {
//             res.sendStatus(204);
//         }
//     } catch (error) {
//         console.error('Error deleting task:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// pool.query('SELECT * FROM tasks', (error, results) => {
//     if (error) {
//         console.error('Error executing query:', error);
//     } else {
//         console.log('Tasks:', results.rows);
//     }
// });

// process.on('SIGINT', () => {
//     console.log('Closing pool');
//     pool.end(() => {
//         console.log('Pool has been closed');
//         process.exit(0);
//     });
// });

