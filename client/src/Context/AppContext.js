import React, { useState, createContext } from 'react'

export const AppContext = createContext();

export const AppContextProvider = props => {
    const MAIN_URL = 'https://nycbuildings-server.vercel.app'
    const [parcel, setParcel] = useState({})
    const [bblData, setBblData] = useState({
        bbl: '',
        buildingId: ''
    })

    const storeParcel = (data) => {
        setParcel({
            ...parcel,
            data
        })
    }

    const [violations, setViolations] = useState({})
    const [repairs, setRepairs] = useState({})
    const [complaints, setComplaints] = useState({})
    const [infestations, setInfestations] = useState({})
    const [liens, setLiens] = useState({})
    const [restaurants, setRestaurants] = useState({})

    const [mobile, setMobile] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [isInvalid, setIsInvalid] = useState(false)

    const [coordinates, setCoordinates] = useState({ lat: 40.71328026775951, long: -74.01281988423656 }) // Default Coordinates, 1 World Trade Center
    
    return (
        <AppContext.Provider 
            value={{ 
                parcel,
                setParcel,
                storeParcel,
                bblData,
                setBblData,
                mobile,
                setMobile,
                loaded,
                setLoaded,
                MAIN_URL,
                violations, setViolations,
                repairs, setRepairs,
                complaints, setComplaints,
                infestations, setInfestations,
                liens, setLiens,
                restaurants, setRestaurants,
                coordinates, setCoordinates,
                isInvalid, setIsInvalid
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}