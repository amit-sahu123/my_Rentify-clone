import React, { useState } from 'react';

const PropertyFilter = ({ onFilter }) => {
    const [filters, setFilters] = useState({
        place: '',
        area: '',
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
        <form onSubmit={handleSubmit}>
            <input type="text" name="place" value={filters.place} onChange={handleChange} placeholder="Place" />
            <input type="text" name="area" value={filters.area} onChange={handleChange} placeholder="Area" />
            <input type="number" name="bedrooms" value={filters.bedrooms} onChange={handleChange} placeholder="Bedrooms" />
            <input type="number" name="bathrooms" value={filters.bathrooms} onChange={handleChange} placeholder="Bathrooms" />
            <input type="text" name="nearbyHospitals" value={filters.nearbyHospitals} onChange={handleChange} placeholder="Nearby Hospitals" />
            <input type="text" name="nearbyColleges" value={filters.nearbyColleges} onChange={handleChange} placeholder="Nearby Colleges" />
            <button type="submit">Apply Filters</button>
        </form>
    );
};

export default PropertyFilter;
