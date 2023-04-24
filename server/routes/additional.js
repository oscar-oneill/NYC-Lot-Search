const dotenv = require("dotenv").config()
global.fetch = require("node-fetch")
const router = require('express').Router()
global.fetch = fetch
const cors = require("cors")
const puppeteer = require('puppeteer')

router.use(cors({ origin: "*"}))

const { BROWSERLESS_KEY } = process.env

router.post('/complaints', async (req, res) => {
    let { number } = req.body;

    try {
        if (number === undefined || null || "") {
            console.log("Error fetching complaints.")
            res.status(200).send({
                error: "Please specify a valid address."
            })
        } else {
            const browser = await puppeteer.connect({ browserWSEndpoint: `wss://chrome.browserless.io?token=${BROWSERLESS_KEY}` })
            const page = await browser.newPage()

            try {
                await page.goto(`https://a810-bisweb.nyc.gov/bisweb/OverviewForComplaintServlet?complaintno=${number}&go6=+GO+&requestid=0`)
                const content = await page.evaluate(() => {
                    const tag = document.querySelector("td.content")
                    if (!tag.innerHTML) return

                    return tag.innerHTML
                })

                res.status(200).send(content)

            } catch (error) {
                res.status(202).send(null)
                console.error("Error: ", error)
            }

            await browser.close()
        }
    } catch (err) {
        console.log(err)
    }
})

// router.post('/propertyRecords', async (req, res) => {
//     const { borough, block, lot } = req.body;
//     try {
//         if (!borough || !block || !lot) {
//             console.log('Both the block and lot numbers are required to view records of this property.')
//             res.status(200).send({
//                 error: 'Please enter a block number and a lot number to proceed.'
//             })
//         } else {

//             const browser = await chromium.puppeteer.launch({
//                 defaultViewport: null,
//                 headless: false,
//             })
//             const page = await browser.newPage()

//             try {
//                 await page.goto("https://a836-acris.nyc.gov/DS/DocumentSearch/BBL")
//                 await page.select('select[name=borough]', borough)
//                 await page.type('input[name=edt_block]', block)
//                 await page.type('input[name=edt_lot]', lot)
//                 await page.click('input[name=Submit2]')

//             } catch (error) {
//                 console.log(error)
//             }
//         }
        
//     } catch (error) {
//         console.log(error)
//     }

// })

module.exports = router;