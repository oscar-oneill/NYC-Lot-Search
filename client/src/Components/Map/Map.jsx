import React, { useContext, useMemo } from 'react'
import { AppContext } from '../../Context/AppContext';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const { coordinates } = useContext(AppContext)
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })
    
    const mapCoordinates = useMemo(() => ({ lat: coordinates.lat, lng: coordinates.long }), [coordinates])
    const options = {
        disableDefaultUI: true,
    }

    const style = {
        height: '400px',
        width: '100%',
        borderRadius: '10px',
        fontWeight: 700,
        letterSpacing: '-.5px',
    }

    if (!isLoaded) return <div className='mapbox'>Loading...</div>
    
    return (
        <GoogleMap
            zoom={16}
            center={mapCoordinates}
            mapContainerClassName='mapbox'
            options={options}
            mapContainerStyle={style}
        >
            <Marker
                position={mapCoordinates}
            />
        </GoogleMap>
    )
}

export default Map