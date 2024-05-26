const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    place: { type: String, required: true },
    price: { type: Number, required: true },
    area: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    nearbyHospitals: { type: String, required: true },
    nearbyColleges: { type: String, required: true },
});

module.exports = mongoose.model('Property', propertySchema);
