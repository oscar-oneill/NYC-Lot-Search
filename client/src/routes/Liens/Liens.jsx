import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import '../../styles/Violations.css'
import Info from '../../Components/Info/Info'
import LiensDisplay from '../../Components/LiensDisplay/LiensDisplay'
import Description from '../../Components/Description/Description'

const Liens = () => {
    const { liens, parcel } = useContext(AppContext)

    if (!parcel.data || !liens || parcel.data.error) {
        return (
            <div className='body_container'>
                <Info message='Nothing to display.'/>
            </div>
        )} 
    else {
        if (liens.length === 0) {
            return (
                <div className='body_container'>
                    <Info message='No liens recorded for this property.'/>
                    <Description/>
                </div>
            )} 
    else {
        return (
            <div className="body_container" style={{ paddingTop: '0px' }}>
                <Info message={`Tax Lien Results for ${ parcel.data.houseNumber } ${ parcel.data.firstStreetNameNormalized } in ${ parcel.data.uspsPreferredCityName }, NY`}/>
                <Description/>

                <div className="violations_results">
                    {liens && liens.map((lien, i) => (
                        <LiensDisplay
                            key={i}
                            month={lien.month}
                            waterDebtOnly={lien.water_debt_only}
                            taxClass={lien.tax_class_code}
                            cycle={lien.cycle}
                        />
                    ))}
                </div>
            </div>
        )}
    }
}

export default Liens