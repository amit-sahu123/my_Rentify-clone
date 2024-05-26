import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import PropertyFilter from './PropertyFilter';
import Pagination from '@mui/material/Pagination';
import SideDrawer from '../common/SideDrower';
import { Button } from '@mui/material';
import Link from 'next/link';
import PropertyCard from '../common/PropertyCard';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:5000/api/properties?page=${currentPage}&limit=5`)
            .then(res => res.json())
            .then(data => {
                console.log('feting data', data)
                setProperties(data.properties);
                setFilteredProperties(data.properties);
                setTotalPages(data.totalPages);
            });
    }, [currentPage]);
    console.log('filteredProperties', filteredProperties)
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
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

    const [isFilterOpen, setisFilterOpen] = useState(false)

    const handleFilterOpen = () => {
        setisFilterOpen((prev) => !prev);
    }
    
    const handleShowInterested = () => {
        setisFilterOpen((prev) => !prev);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: "20px", justifyContent: 'center', alignItems: 'center', }}>
            <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", width: '95%', padding: "20px 50px" }}>
                <h1 style={{ fontSize: '30px' }}>Available Properties</h1>
                <Button onClick={handleFilterOpen} variant='outlined'>Filter</Button>
            </div>
            {properties.length > 0 ?
                <>
                    <ul style={{ display: 'flex', gap: "20px", flexWrap: 'wrap', minHeight: "210px" }}>
                        {filteredProperties?.map((property, i) => (
                            <Link href={`/property/${property._id}`}>
                               <PropertyCard property={property} i={i} handleShowInterested={handleShowInterested}/>
                            </Link>
                        ))}
                    </ul>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </> :
                <div
                    style={{
                        height: "20vh",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid',
                        padding: '30px',
                        gap: '20px',
                        borderRadius: ' 20px'
                    }}>
                    <h1>No Properties Listed Yet !</h1>
                    <Link href='sell-property'>
                        <Button variant='outlined'> Add Your Property</Button>
                    </Link>
                </div>
            }
            <SideDrawer
                open={isFilterOpen}
                title={'Filter properties'}
                subtitle="See the data in an organized manner by applying filters"
                apply="Apply"
                submit={handleFilter}
                cancel="Clear all"
                closeDrawer={handleFilterOpen}
            >
                <PropertyFilter onFilter={handleFilter} />
            </SideDrawer>
        </div>
    );
};

export default PropertyList;
