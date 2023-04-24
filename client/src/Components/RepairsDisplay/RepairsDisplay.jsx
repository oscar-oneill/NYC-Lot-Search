import React from 'react'

const RepairsDisplay = ({ buildingID, registrationID, vacateNumber, reason, type, effectiveDate, rescindDate, units, community, council }) => {
    return (
        <div className="violations_display">
            <span>Building ID: {buildingID}</span>
            <br/>
            <span>Registration ID: {registrationID}</span>
            <br/>
            <span>Community Board: {community}</span>
            <br/>
            <span>Council District: {council}</span>
            <br/>
            <span>Vacate Order Number: {vacateNumber}</span>
            <br/>
            <span>Primary Vacate Reason: {reason}</span>
            <br/>
            <span>Vacate Type: {type}</span>
            <br/>
            <span>Vacate Effective Date: {new Date(effectiveDate).toLocaleDateString()}</span>
            <br/>
            <span>Actual Rescind Date: {(new Date(rescindDate).toLocaleDateString())}</span>
            <br/>
            <span>Vacated Units: {units}</span>
            <br/>
        </div>
    )
}

export default RepairsDisplay