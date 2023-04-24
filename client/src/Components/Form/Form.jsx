import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import './Form.css'
import SearchError from '../SearchError/SearchError'
import { AppContext } from '../../Context/AppContext'
import LoadingGif from '../LoadingGIF/LoadingGif'

const Form = () => {
    const { parcel, storeParcel, setBblData, MAIN_URL, setCoordinates, setLoaded } = useContext(AppContext)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [selectedBorough, setSelectedBorough] = useState('')
    const [choiceMade, setChoiceMade] = useState(false)
    const boroughs = ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island']

    const [input, setInput] = useState({
        house: "",
        street: ""
    })

    useEffect(() => {
        if (parcel.data) {
            setError(parcel.data.error)
        }
    }, [parcel])

    const selectStyle = {
        background: '#7fffd4',
        color: '#000' 
    }

    const handleChange = (e) => {
        setInput({ 
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let borough = selectedBorough;
        let house = input.house;
        let street = input.street;

        setLoading(true)

        try {
            axios.post(`${MAIN_URL}/search/address`, {
                borough, house, street
            })
            .then(res => {
                storeParcel(res.data)
                setBblData({
                    bbl: res.data.bbl,
                    buildingId: res.data.buildingIdentificationNumber
                })
                setCoordinates({
                    lat: res.data.latitude, long: res.data.longitude 
                })
                setLoading(false)
            })

            setInput({
                house: "",
                street: "",
            })

            setLoaded(true)
            setSelectedBorough('')
            setChoiceMade(false)

            
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='form'>
            <div className="selection-container">
                <div className='selection-header'>
                    <h3>Select A Borough</h3>
                </div>

                <div className='selections'>
                    { boroughs.map((boro, i) => {
                        return (
                            <button key={i} onClick={() => {setSelectedBorough(boro); setChoiceMade(true)}} className='boro-button' style={ boro === selectedBorough ? selectStyle : null }>{boro}</button>
                        )
                    })}
                </div>
            </div>

            <input type="text" placeholder='House Number' name='house' value={input.house} onChange={handleChange} autoComplete="off"/>
            <input type="text" placeholder='Street Name' name='street' value={input.street} onChange={handleChange} autoComplete="off"/>

            <div className='submit-button' onClick={handleSubmit}>Search</div>

            { error ? <SearchError error={error}/> : "" }
            { loading ? <LoadingGif/> : "" }
        </div>
    )
}

export default Form