import React, { useState, createContext } from 'react'

export const AppContext = createContext();

export const AppContextProvider = props => {
    const [parcel, setParcel] = useState({})
    const [bblData, setBblData] = useState({
        bbl: "",
        buildingId: ""
    })

    const [violations, setViolations] = useState({})
    const [repairs, setRepairs] = useState({})
    const [complaints, setComplaints] = useState({})

    const storeParcel = (data) => {
        setParcel({
            ...parcel,
            data
        })
    }

    const [isActive, setIsActive] = useState(false)

    return (
        <AppContext.Provider value={{ parcel, setParcel, storeParcel, bblData, setBblData, violations, setViolations, complaints, setComplaints, repairs, setRepairs, isActive, setIsActive }}>
            {props.children}
        </AppContext.Provider>
    )
}