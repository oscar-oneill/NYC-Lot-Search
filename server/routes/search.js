const dotenv = require("dotenv").config()
global.fetch = require("node-fetch")
const router = require('express').Router()
global.fetch = fetch
const axios = require("axios")

router.post('/address', async (req, res) => {
  const { borough, house, street, zip } = req.body

  try {
        axios.get(`https://api.nyc.gov/geo/geoclient/v1/address.json?houseNumber=${house}&street=${street}&borough=${borough}&zip=${zip}`, {
            headers: {
            "Ocp-Apim-Subscription-Key": process.env.PRIMARY_KEY
            }
        })
        .then(data => {
            if (!data.data.address.bbl) {
                console.log('Error fetching BBL')
                res.status(200).send({
                    error: "The address number is out of range or the borough code may be invalid for this entry. Both the house number and street must entered in addition to the address' borough or zip code. Please make sure those fields are correct."
                })
            } else {
                console.log('Success fetching BBL.')
                res.status(200).send(data.data.address)
            }
        })

    } catch(err) {
      console.log(err)
    }
})

router.post('/violations', async (req, res) => {
  let { borough, block, lot } = req.body
  
  try {
        axios.get(`https://data.cityofnewyork.us/resource/3h2n-5cm9.json?boro=${borough}&block=${block}&lot=0${lot}`)
        .then(data => {
            if (data.data.length === 0) {
                console.log("Violations Data:", data.data)
                res.status(200).send({
                    error: "Error fetching violation data. Address entry incomplete."
                })
            } else {
                console.log("Success fetching violation data for address.")
                res.status(200).send({
                    entries: data.data.length,
                    data: data.data
                })
            }
        })

    } catch(err) {
      console.log(err)
    }
})

router.post('/vacate-repair', async (req, res) => {
  let { bbl } = req.body

  try {
        if (bbl === undefined) {
            console.log("Error fetching vacate & repair data.")
            res.status(200).send({ 
                error: "Please specify a valid address."
            })
        } else {
            axios.get(`https://data.cityofnewyork.us/resource/tb8q-a3ar.json?bbl=${bbl}`)
            .then(data => {
                console.log("Success fetching vacate/repair data for address.")
                res.status(200).send({
                    entries: data.data.length,
                    data: data.data
                })
            })
        }
    } catch(err) {
      console.log(err) 
    } 
})


router.post('/complaints', async (req, res) => {
    let { bid } = req.body

    try {
        if (bid === undefined) {
            console.log("Error fetching complaints.")
            res.status(200).send({
                error: "Please specify a valid address." 
            })
        } else {
            axios.get(`https://data.cityofnewyork.us/resource/eabe-havv.json?bin=${bid}`)
            .then(data => {
                console.log("Success fetching complaints for address.")
                res.status(200).send({
                    entries: data.data.length,
                    data: data.data
                })
            })
        } 
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;