import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'; // Ensure correct import path

dotenv.config(); 

const app = express();
const port = process.env.PORT || 4500;  // Use environment variable PORT

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes); // Ensure this is correct!

// Optional: Add a default route to prevent "Cannot GET /"
app.get('/', (req, res) => {
    res.send('API is running...');
});

const dbURI = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};

connectDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
