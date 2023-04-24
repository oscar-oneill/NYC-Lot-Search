import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import '../../styles/Violations.css'
import Info from '../../Components/Info/Info'
import ComplaintsDisplay from '../../Components/ComplaintsDisplay/ComplaintsDisplay'
import Description from '../../Components/Description/Description'

const Complaints = () => {
    const { complaints, parcel } = useContext(AppContext)

    if (!parcel.data || !complaints || parcel.data.error) {
        return (
            <div className='body_container'>
                <Info message='Nothing to display.'/>
            </div>
        )} 
    else {
        if (complaints.length === 0) {
            return (
                <div className='body_container'>
                    <Info message='No complaints recorded for this property.'/>
                    <Description/>
                </div>
            )} 
    else {
        return (
            <div className="body_container" style={{ paddingTop: '0px' }}>
                <Info message={`Complaint Results for ${ parcel.data.houseNumber } ${ parcel.data.firstStreetNameNormalized } in ${ parcel.data.uspsPreferredCityName }, NY`}/>
                <Description/>

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
                            number={complaint.complaint_number}
                        />
                    ))}
                </div>
            </div>
        )}
    }
}

export default Complaints