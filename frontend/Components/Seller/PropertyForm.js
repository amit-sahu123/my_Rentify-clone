import React, { useState } from 'react';
// import { useAuth } from '../../context/AuthContext';
import { Box, Button, TextField } from '@mui/material';
import PropertyFormComponent from '../common/PropertyFormComponent';

const PropertyForm = ({ onSubmit }) => {
    const [property, setProperty] = useState({
        place: '',
        area: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        nearbyHospitals: '',
        nearbyColleges: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty((prevProperty) => ({
            ...prevProperty,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(property);
    };

    return (
        <Box style={{ minHeight: '70vh', alignItems: 'center', display: "flex", justifyContent: 'center', flexDirection:'column' }}>
           <PropertyFormComponent
           property={property}
           handleSubmit={handleSubmit}
           handleChange={handleChange}
           btxText="Submit"
           />
        </Box>
    );
};

export default PropertyForm;
