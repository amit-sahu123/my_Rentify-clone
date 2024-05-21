const Property = require('../models/Property');

exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createProperty = async (req, res) => {
    const { place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = req.body;
    try {
        const property = new Property({
            userId: req.user.id,
            place,
            area,
            bedrooms,
            bathrooms,
            nearbyHospitals,
            nearbyColleges,
        });
        await property.save();
        res.status(201).json(property);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateProperty = async (req, res) => {
    const { id } = req.params;
    const { place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = req.body;
    try {
        const property = await Property.findById(id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        property.place = place;
        property.area = area;
        property.bedrooms = bedrooms;
        property.bathrooms = bathrooms;
        property.nearbyHospitals = nearbyHospitals;
        property.nearbyColleges = nearbyColleges;
        await property.save();
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteProperty = async (req, res) => {
    const { id } = req.params;
    try {
        const property = await Property.findById(id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        await property.remove();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
