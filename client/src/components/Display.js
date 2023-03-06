import React from 'react';

const Display = ({ipAddress, location}) => {
    
    return (
        <div>
            <div>IP Address: {ipAddress}</div>
        
            <div>City: {location.city}</div>
            <div>Country: {location.country}</div>
            <div>Latitude: {location.latitude}</div>
            <div>Longitude: {location.longitude}</div>
        </div>)
}

export default Display;