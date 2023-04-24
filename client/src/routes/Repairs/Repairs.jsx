import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import '../../styles/Violations.css'
import Info from '../../Components/Info/Info'
import RepairsDisplay from '../../Components/RepairsDisplay/RepairsDisplay'
import Description from '../../Components/Description/Description'

const Repairs = () => {
    const { repairs, parcel } = useContext(AppContext)

    if (!parcel.data || !repairs || parcel.data.error) {
        return (
            <div className='body_container'>
                <Info message='Nothing to display.'/>
            </div>
        )
    } else {
        if (repairs.length === 0) {
            return (
                <div className='body_container'>
                    <Info message='No vacate or repairs orders recorded for this property.'/>
                    <Description/>
                </div>
            )
        } else {
            return (
                <div className="body_container" style={{ paddingTop: '0px' }}>
                    <Info message={`Vacate & Repair Results for ${ parcel.data.houseNumber } ${ parcel.data.firstStreetNameNormalized } in ${ parcel.data.uspsPreferredCityName }, NY`}/>
                    <Description/>

                    <div className="violations_results">
                        {repairs && repairs.map((repair, i) => (
                            <RepairsDisplay
                                key={i}
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