import React from 'react'

const SearchResults = ({ block, lot, neighborhood, classification, city, zip  }) => {
    return (
        <div className="search_results">
            <span>Block: <br/> {block}</span>
            <br/>
            <span>Lot: <br/> {lot}</span>
            <br/>
            <span>Building Classification: <br/> {classification}</span>
            <br/>
            <span>Area: <br/> {neighborhood}</span>
            <br/>
            <span>City: <br/> {city}</span>
            <br/>
            <span>Zip Code: <br/> {zip}</span>
            <br/>
        </div>
    )
}

export default SearchResults