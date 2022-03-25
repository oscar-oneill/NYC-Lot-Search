import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Form.css'
import SearchError from '../Components/SearchError'
import { AppContext } from '../Context/AppContext'
import loadingGIF from '../images/loading.gif'

const Form = () => {
    const { parcel, storeParcel, setBblData } = useContext(AppContext)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const [input, setInput] = useState({
        borough: "",
        house: "",
        street: "",
        zip: "",
    })

    useEffect(() => {
        if (parcel.data) {
            setError(parcel.data.error)
        }
    }, [parcel])


    const handleChange = (e) => {
        setInput({ 
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let borough = input.borough;
        let house = input.house;
        let street = input.street;
        let zip = input.zip;

        setLoading(true)

        try {
            axios.post("https://nycbuildings.herokuapp.com/search/address", {
                borough, house, street, zip
            })
            .then(res => {
                storeParcel(res.data)
                setBblData({
                    bbl: res.data.bbl,
                    buildingId: res.data.buildingIdentificationNumber
                })
                setLoading(false)
            })

            setInput({
                borough: "",
                house: "",
                street: "",
                zip: "",
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className="form">
            <select 
                onChange={handleChange} 
                value={input.borough}
                name="borough"
            >
                <option disabled value="">Borough</option>
                <option value="Manhattan">Manhattan</option>
                <option value="Bronx">The Bronx</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Queens">Queens</option>
                <option value="Staten Island">Staten Island</option>
            </select>
            <input 
                onChange={handleChange}
                value={input.house} 
                type="text" 
                name="house"
                placeholder="House Number" 
                required={true}
            />
            <input 
                onChange={handleChange} 
                value={input.street} 
                type="text" 
                name="street"
                placeholder="Street" 
                required={true}
            />
            <input 
                onChange={handleChange} 
                value={input.zip} 
                type="text" 
                name="zip"
                placeholder="Zip Code (Optional)" 
            />

            <button onClick={handleSubmit}>
                Search
            </button>

            {error ? <SearchError error={error}/> : ""}
            {loading ? <img className="loadingGIF" src={loadingGIF} alt="loadingGIF"/> : ""}

        </form>
    )
}

export default Form
