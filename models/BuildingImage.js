import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String },
  description: { type: String }
});

const buildingImageSchema = new mongoose.Schema({
  buildingId: { type: Number, required: true, unique: true },
  images: [imageSchema]
});

const BuildingImage = mongoose.model('BuildingImage', buildingImageSchema);
export default BuildingImage;
