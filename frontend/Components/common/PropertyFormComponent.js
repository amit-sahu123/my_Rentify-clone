import { Box, Button, TextField } from '@mui/material'
import React from 'react'

function PropertyFormComponent({ property, handleSubmit, handleChange, btxText,handeClosePopup }) {
    return (
        <form
            style={{ position:'absolute', top:'25vh', zIndex:"2", minHeight: "300px", minWidth: '540px', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", gap: "30px", border: '1px solid gray', background: 'rgb(201 234 255)', borderRadius: '20px', boxShadow: "1px 5px 10px 4px gray", padding: "20px 0px" }}
            onSubmit={handleSubmit}>
            <div>
                <h2>Add your Property Here !</h2>
                <img
                    src="/assets/close-circle.svg"
                    alt="close-circle"
                    onClick={() => handeClosePopup(false)}
                    style={{ cursor: "pointer", position:'absolute',top:'20px', right:'20px'}}
                />
            </div>
            <Box sx={{ gap: '20px', display: 'flex' }}>
                <TextField type="text" name="place" value={property.place} onChange={handleChange} variant="outlined" label="Place" required />
                <TextField type="text" name="area" value={property.area} onChange={handleChange} variant="outlined" label="Area" required />
            </Box>
            <Box sx={{ gap: '20px', display: 'flex' }}>
                <TextField type="number" name="bedrooms" value={property.bedrooms} onChange={handleChange} variant="outlined" label="Bedrooms" required />
                <TextField type="number" name="bathrooms" value={property.bathrooms} onChange={handleChange} variant="outlined" label="Bathrooms" required />
            </Box>
            <Box sx={{ gap: '20px', display: 'flex' }}>
                <TextField type="text" name="nearbyHospitals" value={property.nearbyHospitals} onChange={handleChange} variant="outlined" label="Nearby Hospitals" required />
                <TextField type="text" name="nearbyColleges" value={property.nearbyColleges} onChange={handleChange} variant="outlined" label="Nearby Colleges" required />
            </Box>
            <TextField type="text" name="price" value={property.price} onChange={handleChange} variant="outlined" label="Add Price" required />
            <Button type="submit" variant='contained' >{btxText}</Button>
        </form>
    )
}

export default PropertyFormComponent