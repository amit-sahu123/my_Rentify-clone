import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../utils/api';

const MyPropertiesComponent = () => {
    const [properties, setProperties] = useState([]);
    console.log('properties', properties)
    const { user } = useAuth();
    console.log('sellerId', user)
    useEffect(() => {
        const fetchProperties = async () => {
            const response = await api.get(`/properties?sellerId=${user?._id}`);
            setProperties(response.data);
        };

        fetchProperties();
    }, [user]);

    const handleDelete = async (propertyId) => {
        await api.delete(`/properties/${propertyId}`);
        setProperties(properties?.filter((property) => property?._id !== propertyId));
    };

    return (
        <div>
            <h2>My Properties</h2>
            <ul>
                {properties?.map((property) => (
                    <li key={property.id}>
                        {property.place} - {property.area}
                        <button onClick={() => handleDelete(property.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyPropertiesComponent;
