import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../utils/api';
import PropertyFilter from '../Buyer/PropertyFilter';

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
        const token = localStorage.getItem('token');
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };
            await api.delete(`/properties/${propertyId}`, config);
            setProperties(properties?.filter((property) => property?._id !== propertyId));
        } catch (error) {
            console.log('error', error)
        }
    };
    // const [filteredProperties, setFilteredProperties] = useState([]);

    const handleFilter = (filters) => {
        const filtered = properties.filter((property) => {
            // Implement filter logic based on provided filters
            return Object.keys(filters).every((key) => {
                if (!filters[key]) return true;
                return property[key].toString().toLowerCase().includes(filters[key].toLowerCase());
            });
        });
        setProperties(filtered);
    };
    return (
        <div>
            <h2>My Properties</h2>
            <PropertyFilter onFilter={handleFilter} />
            <ul style={{ display: 'flex', gap: "20px" }}>
                {properties.map((property) => {
                    console.log('properties', property._id)
                    return (
                        <li key={property._id} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            minHeight: '100px',
                            minWidth: "200px",
                            padding: '20px',
                            borderRadius: "10px",
                            boxShadow: '1px 2px 5px 1px',
                            alignItems: 'center',
                            background: '#fff'
                        }}>
                            <div>
                                <img src='assets/homeIcon.png' />
                            </div>
                            <div>
                                {property.place} - {property.area}
                            </div>
                            <button>I'm Interested</button>
                            <button onClick={() => handleDelete(property._id)}>Delete</button>
                        </li>
                    )
                }
                )}
            </ul>
            {/* <ul>
                {properties?.map((property) => (
                    <li key={property.id}>
                        {property.place} - {property.area}
                        <button onClick={() => handleDelete(property.id)}>Delete</button>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default MyPropertiesComponent;
