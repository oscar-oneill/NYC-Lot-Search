import React, { useContext } from 'react'
import RepairsDisplay from '../Components/RepairsDisplay'
import { AppContext } from '../Context/AppContext'
import '../styles/Violations.css'

const Repairs = () => {
    const { repairs, parcel, isActive } = useContext(AppContext)

    if (!parcel.data || !repairs) {
        return (
            <div className="violations_container">
                <div className={`violations_header ${ isActive ? 'active' : 'inactive' }`}>
                    <span>Nothing to display.</span>
                </div>
            </div>
        )} 
    else {
        if (repairs.length === 0) {
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
                        <span>Vacate & Repair Orders for {parcel.data.houseNumber} {parcel.data.firstStreetNameNormalized}, {parcel.data.uspsPreferredCityName}</span>
                    </div>
                    <div className="violations_results">
                        {repairs && repairs.map(repair => (
                            <RepairsDisplay
                                key={repair.registration_id}
                                buildingID={repair.building_id}
                                registrationID={repair.registration_id}
                                vacateNumber={repair.vacate_order_number}
                                reason={repair.primary_vacate_reason}
                                type={repair.vacate_type}
                                effectiveDate={repair.vacate_effective_date}
                                rescindDate={repair.actual_rescind_date}
                                units={repair.number_of_vacated_units}
                                community={repair.community_board}
                                council={repair.council_district}
                            />
                        ))}
                    </div>
                </div>
            )}
        }
    }

export default Repairs