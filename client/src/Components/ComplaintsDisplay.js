import React from 'react';

const ComplaintsDisplay = ({ buildingID, community, entry, inspection, disposition, code, category, status }) => {
    return (
        <div className="violations_display">
            <span>Building ID: {buildingID}</span>
            <br/>
            <span>Community Board: {community}</span>
            <br/>
            <span>Status: {status}</span>
            <br/>
            <span>Date Entered: {entry}</span>
            <br/>
            <span>Date Inspected: {inspection}</span>
            <br/>
            <span>Disposition Date: {disposition}</span>
            <br/>
            <span>Disposition Code: {code}</span>
            <br/>
            <span>Category: {category}</span>
            <br/>
        </div>
    )
}

export default ComplaintsDisplay