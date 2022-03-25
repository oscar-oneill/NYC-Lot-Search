import React, { useContext } from 'react'
import ComplaintsDisplay from '../Components/ComplaintsDisplay'
import { AppContext } from '../Context/AppContext'
import '../styles/Violations.css'

const Complaints = () => {
    const { complaints, parcel, isActive } = useContext(AppContext)

    if (!parcel.data || !complaints) {
        return (
            <div className="violations_container">
                <div className={`violations_header ${ isActive ? 'active' : 'inactive' }`}>
                    <span>Nothing to display.</span>
                </div>
            </div>
        )} 
    else {
        if (complaints.length === 0) {
            return (
                <div className="violations_container">
                    <div className={`violations_header ${ isActive ? 'active' : 'inactive' }`}>
                        <span>No orders recommended for this property.</span>
                    </div>
                </div>
            )} 
    else {
        return (
            <div className="violations_container">
                <div className={`violations_header ${ isActive ? 'active' : 'inactive' }`}>
                    <span>Complaints for {parcel.data.houseNumber} {parcel.data.firstStreetNameNormalized}, {parcel.data.uspsPreferredCityName}</span>
                </div>
                <div className="violations_results">
                    {complaints && complaints.map((complaint, i) => (
                        <ComplaintsDisplay
                            key={i}
                            buildingID={complaint.bin}
                            community={complaint.community_board}
                            entry={complaint.date_entered}
                            inspection={complaint.inspection_date}
                            disposition={complaint.disposition_date}
                            code={complaint.disposition_code}
                            category={complaint.complaint_category}
                            status={complaint.status}
                        />
                    ))}
                </div>
            </div>
        )}
    }
}

export default Complaints