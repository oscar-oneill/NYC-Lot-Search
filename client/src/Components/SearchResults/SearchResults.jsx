import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
// import PropertyButton from '../PropertyButton/PropertyButton'

const SearchResults = ({ borough, block, lot, classification, city, zip, houseNumber, streetName, bin  }) => {
    const { mobile } = useContext(AppContext)

    return (
        <div className="search_results">
            <span>Address: <br /> {houseNumber} {streetName}</span>
            <br />
            <span>City: <br /> {city}</span>
            <br />
            <span>Zip Code: <br /> {zip}</span>
            <br />
            <span>Block: <br/> {block}</span>
            <br/>
            <span>Lot: <br/> {lot}</span>
            <br/>
            <span>Building Identification Number: <br/> {bin}</span>
            <br />
            <span>Building Classification: <br/> {classification}</span>
            <br/>
            { mobile ? '' : '' }
            {/* <div className="property_btn_container">            
                <PropertyButton
                    borough={borough}
                    block={block}
                    lot={lot}
                />
            </div> */}
        </div>
    )
}

export default SearchResults