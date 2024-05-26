import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const PropertyFilter = ({ onFilter }) => {
    const [filters, setFilters] = useState({
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
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter(filters);
    };

    return (
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            <TextField type="text" name="place" value={filters.place} onChange={handleChange} id="outlined-basic1" label="Place" variant="outlined" />
            <TextField type="text" name="area" value={filters.area} onChange={handleChange} label="Area" variant="outlined" />
            <TextField type="number" name="bedrooms" value={filters.bedrooms} onChange={handleChange} label="Bedrooms" variant="outlined" />
            <TextField type="number" name="bathrooms" value={filters.bathrooms} onChange={handleChange} label="Bathrooms" variant="outlined" />
            <TextField type="text" name="nearbyHospitals" value={filters.nearbyHospitals} onChange={handleChange} label="Nearby Hospitals" variant="outlined" />
            <TextField type="text" name="nearbyColleges" value={filters.nearbyColleges} onChange={handleChange} label="Nearby Colleges" variant="outlined" />
            <TextField type="Number" name="price" value={filters.price} onChange={handleChange} label="Price" variant="outlined" />
            <Button type="submit" variant='contained'>Apply Filters</Button>
        </form>
    );
};

export default PropertyFilter;
