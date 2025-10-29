import express from 'express';
import LocationImage from '../models/LocationImage.js';

const router = express.Router();

// GET all location images
router.get('/', async (req, res) => {
    try {
        const images = await LocationImage.find();
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET images by locationId
router.get('/:locationId', async (req, res) => {
    try {
        const location = await LocationImage.findOne({ locationId: req.params.locationId });
        if (!location) return res.status(404).json({ message: 'Location not found' });
        res.json(location);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
