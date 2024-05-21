import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import PropertyFilter from './PropertyFilter';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            // const response = {data : []};
            try {
                const response = await api?.get('/properties');
                setProperties(response.data);
                setFilteredProperties(response.data);

            } catch (error) {
                console.log('error', error)
            }
        };

        fetchProperties();
    }, []);

    const handleFilter = (filters) => {
        const filtered = properties.filter((property) => {
            // Implement filter logic based on provided filters
            return Object.keys(filters).every((key) => {
                if (!filters[key]) return true;
                return property[key].toString().toLowerCase().includes(filters[key].toLowerCase());
            });
        });
        setFilteredProperties(filtered);
    };

    return (
        <div>
            <h2>Available Properties</h2>
            <PropertyFilter onFilter={handleFilter} />
            <ul style={{ display: 'flex', gap: "20px" }}>
                {filteredProperties.map((property) => (
                    <li key={property.id} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap:'20px',
                        minHeight: '100px',
                        minWidth: "200px",
                        padding: '20px',
                        borderRadius:"10px",
                        boxShadow:'1px 2px 5px 1px',
                        alignItems:'center',
                        background:'#fff'
                    }}>
                        <div>
                            <img src='assets/homeIcon.png'/>
                        </div>
                        <div>
                            {property.place} - {property.area}
                        </div>
                        <button>I'm Interested</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;
