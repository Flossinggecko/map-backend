import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    title: String,
    description: String
});

const locationImageSchema = new mongoose.Schema({
    locationId: { type: Number, required: true, unique: true },
    images: [imageSchema]
});

const LocationImage = mongoose.model('LocationImage', locationImageSchema);

export default LocationImage;
