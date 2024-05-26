const Property = require('../models/Property');

exports.getProperties = async (req, res) => {
    // const { page = 1, limit = 10 } = req.query;
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req?.query?.limit) ;
        const skip = (page - 1) * limit;

        const properties = await Property.find().skip(skip).limit(limit);
        const totalProperties = await Property.countDocuments();
        res.status(200).json({
            properties,
            totalPages: Math.ceil(totalProperties / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
    
};


exports.getPropertyDetails = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (err) {
        console.error('Error fetching property:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createProperty = async (req, res) => {
    const { place, area,price, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = req.body;
    try {
        const property = new Property({
            userId: req.user.id,
            place,
            area,
            price,
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
    const { place, area,price, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = req.body;
    try {
        const property = await Property.findById(id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        property.place = place;
        property.area = area;
        property.price = price;
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

        // Optional: Ensure only the owner can delete the property
        if (property.owner.toString() !== req.user._id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        await property.remove();
        res.json({ message: 'Property removed' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


