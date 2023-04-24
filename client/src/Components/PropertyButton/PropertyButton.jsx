import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import '../styles/Main.css'

const PropertyButton = ({ borough, block, lot }) => {
    const { MAIN_URL } = useContext(AppContext)
    const getPropertyData = async () => {
        axios.post(`${MAIN_URL}/return/propertyRecords`, {
            borough, block, lot
        })
    }
    
    return (
        <div id="property_button" onClick={(e) => getPropertyData(e)}>
            Get Property Records
        </div>
    )
}

export default PropertyButton