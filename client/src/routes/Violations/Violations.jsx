import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import '../../styles/Violations.css'
import Info from '../../Components/Info/Info'
import ViolationsDisplay from '../../Components/ViolationsDisplay/ViolationsDisplay'
import Description from '../../Components/Description/Description'

const Violations = () => {
    const { violations, parcel } = useContext(AppContext)

    if (!parcel.data || !violations || parcel.data.error) {
        return (
            <div className='body_container'>
                <Info message='Nothing to display.'/>

            </div>
        )
    } else {
        if (violations.length === 0) {
            return (
                <div className='body_container'>
                    <Info message='No violations recorded for this property.'/>
                    <Description/>
                </div>
            )
        }
        else {
            return (
                <div className="body_container" style={{ paddingTop: '0px' }}>
                    <Info message={`Violation Results for ${ parcel.data.houseNumber } ${ parcel.data.firstStreetNameNormalized } in ${ parcel.data.uspsPreferredCityName }, NY`}/>
                    
                    <Description/>

                    <div className="violations_results">
                        {violations && violations.map((violation, i) => (
                            <ViolationsDisplay
                                key={i}
                                description={violation.description}
                                comments={violation.disposition_comments}
                                date={violation.disposition_date}
                                issueDate={violation.issue_date}
                                number={violation.number}
                                vioNumber={violation.violation_number}
                                ecbNumber={violation.ecb_number}
                                category={violation.violation_category}
                                type={violation.violation_type}
                            />
                        ))}
                    </div>
                </div>
            )
        }
    }
}

export default Violations