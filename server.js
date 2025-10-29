import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import buildingImagesRoutes from './routes/buildingImages.js';
import locationImagesRoutes from './routes/locationImages.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*' // Allow all origins, or set your frontend URL for security
}));

// Routes
app.use('/api/building-images', buildingImagesRoutes);  // dynamic building images
app.use('/api/location-images', locationImagesRoutes);  // dynamic location images

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
