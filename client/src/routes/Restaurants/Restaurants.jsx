import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import '../styles/Violations.css'
import Info from '../../Components/Info/Info'
// import RestaurantsDisplay from '../../Components/RestaurantsDisplay'

const Restaurants = () => {
    const { restaurants, parcel } = useContext(AppContext)

    if (!parcel.data || !restaurants || parcel.data.error) {
        return (
            <div className='body_container'>
                <Info message='Nothing to display.'/>
            </div>
        )} 
    else {
        if (restaurants.length === 0) {
            return (
                <div className='body_container'>
                    <Info message='No restaurant data for this property.'/>
                </div>
            )} 
    else {
        return (
            <div className="body_container" style={{ paddingTop: '0px' }}>
                <Info message={`Restaurants Results for ${ parcel.data.houseNumber } ${ parcel.data.firstStreetNameNormalized } in ${ parcel.data.uspsPreferredCityName }, NY`}/>

                <div className="violations_results">
                    {/* {restaurants && restaurants.map((restaurant, i) => (
                        <RestaurantsDisplay
                            key={i}
                            filingDate={infestation.filing_date}
                            filingStart={infestation.filing_period_start_date}
                            filingEnd={infestation.filling_period_end_date}
                            eradicatedUnits={infestation.eradicated_unit_count}
                            infestedUnits={infestation.infested_dwelling_unit_count}
                            totalUnits={infestation.of_dwelling_units}
                            reinfestedUnits={infestation.re_infested_dwelling_unit}
                            registrationID={infestation.registration_id}
                        />
                    ))} */}
                </div>
            </div>
        )}
    }
}

export default Restaurants