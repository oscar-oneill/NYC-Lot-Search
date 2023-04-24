import React from 'react'
import { formatDate } from '../../utilities/functions'
const InfestationsDisplay = ({ filingDate, filingStart, filingEnd, eradicatedUnits, infestedUnits, totalUnits, reinfestedUnits, registrationID }) => {

    return (
        <div className='violations_display'>
            <span>Total Units In Building: {totalUnits}</span>
            <br/>
            <span>Infested Units: {infestedUnits}</span>
            <br/>
            <span>Eradicated Units: {eradicatedUnits}</span>
            <br/>
            <span>Re-infested Units: {reinfestedUnits}</span>
            <br/>
            <span>Filing Date: {formatDate(filingDate)}</span>
            <br/>
            <span>Filing Start Period: {formatDate(filingStart)}</span>
            <br/>
            <span>Filing End Period: {formatDate(filingEnd)}</span>
            <br/>
            <span>Registration ID: {registrationID}</span>
            <br/>
        </div>
    )
}

export default InfestationsDisplay