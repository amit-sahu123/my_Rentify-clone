import React from 'react'

function PropertyCard({ property, i, isSelerPage, handleDelete, handleShowInterested}) {
    return (
        <li key={i} className='propertyCard'>
            <div>
                <img src='assets/homeIcon.png' height={100}/>
            </div>
            <div>
                <p>Place :  {property.place} </p>
                <p>Area :  {property.area} </p>
               {property.price && ( <p>Price :  {property?.price} </p>)}
            </div>

            {isSelerPage ?
                <div>
                    <button onClick={(e) => handleDelete(e, property._id)}>Delete</button>
                </div>
                :
                <button onClick={() => handleShowInterested(property._id)} >I'm Interested</button>
            }
        </li>
    )
}

export default PropertyCard