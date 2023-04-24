const dotenv = require("dotenv").config()
global.fetch = require("node-fetch")
const router = require('express').Router()
global.fetch = fetch
const axios = require("axios")
const cors = require("cors")
router.use(cors({ origin: "*" }))

router.post('/address', async (req, res) => {
  const { borough, house, street } = req.body

     try {
        if (Object.keys(req.body).length < 3) {
            console.log('Error fetching Borough-Block-Lot info.')
            res.status(200).send({
                error: "The address number is out of range or the borough code may be invalid for this entry. Both the house number and street must entered in addition to the address' borough. Please make sure all fields are properly filled."
            })
        } else {
            axios.get(`https://api.nyc.gov/geo/geoclient/v1/address.json?houseNumber=${house}&street=${street}&borough=${borough}`, {
                headers: {
                "Ocp-Apim-Subscription-Key": process.env.PRIMARY_KEY
                }
            })
            .then(data => {
                if (!data.data.address.buildingIdentificationNumber) {
                    res.status(200).send({
                        error: "The address entered is invalid. You may have entered the wrong house number or misspelled the street name. Please make sure these entries are correct."
                    })
                } else {
                    res.status(200).send(data.data.address)
                }
            })
        }

    } catch(err) {
        console.log(err)
    }
})

router.post('/violations', async (req, res) => {
  let { borough, block, lot } = req.body

  try {
        if (Object.keys(req.body).length < 3) {
            console.log("Error fetching violation data.")
            res.status(200).send({
                error: "Error fetching violation data. Address entry incomplete."
            })
        } else {
            axios.get(`https://data.cityofnewyork.us/resource/3h2n-5cm9.json?boro=${borough}&block=${block}&lot=0${lot}`)
            .then(data => {
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

    let bin = bid

    try {
        if (bin === undefined) {
            console.log("Error fetching complaints.")
            res.status(200).send({
                error: "Please specify a valid address." 
            })
        } else {
            axios.get(`https://data.cityofnewyork.us/resource/eabe-havv.json?bin=${bin}`)
            .then(data => {
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

router.post('/infestations', async (req, res) => {
    const { bin } = req.body
    try {
        if (bin === undefined || null) {
            console.log("Error fetching infestation data.")
            res.status(200).send({
                error: "Please specify a valid address."
            })
        } else {
            axios.get(`https://data.cityofnewyork.us/resource/wz6d-d3jb.json?bin=${bin}`)
            .then(data => {
                res.status(200).send({
                    entries: data.data.length,
                    data: data.data
                })
            })
        }
    } catch (error) {
        console.log(err)
    }
})

router.post('/taxLien', async (req, res) => {
    const { borough, block, lot } = req.body

    try {
        if (Object.keys(req.body).length < 3) {
            console.log("Error fetching tax lien data.")
            res.status(200).send({
                error: "Error fetching tax lien data. Address entry incomplete."
            })

        } else {
            axios.get(`https://data.cityofnewyork.us/resource/9rz4-mjek.json?borough=${borough}&block=${block}&lot=${lot}`)
            .then(data => {
                res.status(200).send({
                    entries: data.data.length,
                    data: data.data
                })
            })
        }
    } catch (error) {
        console.log(err)
    }
})

router.post('/restaurant', async (req, res) => {
    const { bin } = req.body;

    try {
        if (bin === undefined || null) {
            console.log("Error fetching restaurant data.")
            res.status(200).send({
                error: "Error fetching restaurant data. Address entry incomplete."
            })
        } else {
            axios.get(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?bin=${bin}`)
            .then(data => {
                res.status(200).send({
                    entries: data.data.length,
                    data: data.data
                })
            })
        }
    } catch (error) {
        
    }
})

module.exports = router;