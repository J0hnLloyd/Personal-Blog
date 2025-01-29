import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 4500;  

app.use(cors());  // Enable cross-origin requests
app.use(express.json());  

app.use('/api/user', userRoutes);  // User API routes

// Default route to confirm the server is running
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Connect to MongoDB
const dbURI = process.env.DB_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);  // Attempt MongoDB connection
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};

connectDB();  // Initialize database connection

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
