import React, { useEffect, useState } from 'react';
// import { useAuth } from '../../context/AuthContext';
import api from '../../utils/api';
import PropertyFilter from '../Buyer/PropertyFilter';
import { Button, Pagination } from '@mui/material';
import SideDrawer from '../common/SideDrower';
import Link from 'next/link';
import PropertyCard from '../common/PropertyCard';
import { useRouter } from 'next/router';
import axios from 'axios';

const MyPropertiesComponent = () => {
    let user;
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);
    const router = useRouter();

    useEffect(() => {
        user = JSON.parse(localStorage.getItem("userInfo"));
        user = JSON.parse(user);
        console.log('user', user)
        if (!user) {
            router.push('/login');
            return;
        }

        axios.get(`http://localhost:5000/api/properties`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                setProperties(res.data.properties);
                console.log('res.data.properties', res.data.properties)
                const userProperties = filterPropertiesByUserId(res.data.properties, user._id);
                setFilteredProperties(userProperties);
                // setTotalPages(res.data.totalPages);
            })
            .catch(err => {
                console.error('Error fetching user properties:', err);
            });
    }, [user, router]);


    const filterPropertiesByUserId = (properties, userId) => {
        return properties.filter(property => property.userId === userId);
    };

    const handleDelete = async (e, propertyId) => {
        if (e.stopPropagation) e.stopPropagation();
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
    // const handlePageChange = (event, value) => {
    //     setCurrentPage(value);
    // };
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
    console.log('filteredProperties', filteredProperties, properties)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: "20px", justifyContent: 'center', alignItems: 'center', }}>
            <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", width: '95%', padding: "20px 50px" }}>
                <h1 style={{ fontSize: '30px' }}>My Properties</h1>
                <Button onClick={handleFilterOpen} variant='outlined' sx={{ height: "45px" }}>Filter Properties</Button>
            </div>
            {filteredProperties.length > 0 ?
                <>
                    <ul style={{ display: 'flex', gap: "20px", flexWrap: 'wrap' }}>
                        {filteredProperties?.map((property, i) => (
                            <Link href={`/property/${property._id}`}>
                                <PropertyCard property={property} i={i} isSelerPage={true} handleDelete={handleDelete} />
                            </Link>
                        ))}
                    </ul>
                    {/* <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    /> */}
                </>
                :
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

export default MyPropertiesComponent;
