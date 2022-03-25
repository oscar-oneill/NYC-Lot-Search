import React, { useContext, useEffect, useState } from 'react'
import '../styles/Main.css'
import Form from '../Components/Form'
import SearchResults from '../Components/SearchResults'
import { AppContext } from '../Context/AppContext'

const Main = () => {
    const { parcel } = useContext(AppContext)
    const [data, setData] = useState("")

    useEffect(() => {
        if (parcel.data) {
            setData(parcel.data.bbl)
        }
    }, [parcel])

    return (
        <div className="main_container">
            <div className="form_container">
                <Form/>
            </div>
            <div className="results_container">
                {   
                    data ? 
                    <SearchResults 
                        block={parcel.data.bblTaxBlock} 
                        lot={parcel.data.bblTaxLot} 
                        neighborhood={parcel.data.ntaName}
                        classification={parcel.data.rpadBuildingClassificationCode}
                        city={parcel.data.uspsPreferredCityName} 
                        zip={parcel.data.zipCode}
                    /> 
                    : ""
                }
            </div>
        </div>
    )
}

export default Main
