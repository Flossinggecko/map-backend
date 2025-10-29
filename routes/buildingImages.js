import express from 'express';
import BuildingImage from '../models/BuildingImage.js';

const router = express.Router();

// GET all building images
router.get('/', async (req, res) => {
  try {
    const images = await BuildingImage.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET images by buildingId
router.get('/:buildingId', async (req, res) => {
  try {
    const building = await BuildingImage.findOne({ buildingId: req.params.buildingId });
    if (!building) return res.status(404).json({ message: 'Building not found' });
    res.json(building);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add or update images for a building
router.put('/:buildingId', async (req, res) => {
  try {
    const { images } = req.body;
    if (!images || !Array.isArray(images)) return res.status(400).json({ message: 'Images array required' });

    const updated = await BuildingImage.findOneAndUpdate(
      { buildingId: req.params.buildingId },
      { images },
      { new: true, upsert: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
