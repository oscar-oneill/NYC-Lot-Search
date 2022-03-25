import React, { useContext } from 'react'
import ViolationsDisplay from '../Components/ViolationsDisplay'
import { AppContext } from '../Context/AppContext'
import '../styles/Violations.css'

const Violations = () => {
    const { violations, parcel, isActive } = useContext(AppContext)

    if (!parcel.data || !violations) {
        return (
            <div className="violations_container">
                <div className={`violations_header ${ isActive ? 'active' : 'inactive' }`}>
                    <span>Nothing to display.</span>
                </div>
            </div>
        )} 
        else {
            if (violations.length === 0) {
                return (
                    <div className="violations_container">
                        <div className={`violations_header ${ isActive ? 'active' : 'inactive' }`}>
                            <span>No violations recorded for this property.</span>
                        </div>
                    </div>
                )} 
            else {
                return (
                    <div className="violations_container">
                        <div className={`violations_header ${ isActive ? 'active' : 'inactive' }`}>
                            <span>Violation Results for {parcel.data.houseNumber} {parcel.data.firstStreetNameNormalized}, {parcel.data.uspsPreferredCityName}</span>
                        </div>
                        <div className="violations_results">
                            {violations && violations.map(violation => (
                                <ViolationsDisplay
                                    key={violation.number}
                                    description={violation.description}
                                    comments={violation.disposition_comments}
                                    date={violation.disposition_date}
                                    issueDate={violation.issue_date}
                                    number={violation.number}
                                    category={violation.violation_category}
                                    type={violation.violation_type}
                                />
                            ))}
                        </div>
                    </div>
                )}
            }
    }

export default Violations