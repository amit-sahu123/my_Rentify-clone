import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const PropertyForm = ({ onSubmit }) => {
    const [property, setProperty] = useState({
        place: '',
        area: '',
        bedrooms: '',
        bathrooms: '',
        nearbyHospitals: '',
        nearbyColleges: '',
    });
    const { user } = useAuth();

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
        <div style={{ minHeight: '70vh', alignItems: 'center', display: "flex", justifyContent: 'center' }}>
            <form
                style={{ minHeight: "300px", minWidth: '500px', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", gap: "20px", border: '1px solid gray', borderRadius: '10px', boxShadow: "1px 5px 10px 4px gray", padding:"20px" }}
                onSubmit={handleSubmit}>
                <h2>Add your Property Here !</h2>
                <input type="text" name="place" value={property.place} onChange={handleChange} placeholder="Place" required />
                <input type="text" name="area" value={property.area} onChange={handleChange} placeholder="Area" required />
                <input type="number" name="bedrooms" value={property.bedrooms} onChange={handleChange} placeholder="Bedrooms" required />
                <input type="number" name="bathrooms" value={property.bathrooms} onChange={handleChange} placeholder="Bathrooms" required />
                <input type="text" name="nearbyHospitals" value={property.nearbyHospitals} onChange={handleChange} placeholder="Nearby Hospitals" required />
                <input type="text" name="nearbyColleges" value={property.nearbyColleges} onChange={handleChange} placeholder="Nearby Colleges" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PropertyForm;
