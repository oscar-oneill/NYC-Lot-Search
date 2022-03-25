const dotenv = require("dotenv").config()
global.fetch = require("node-fetch")
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { json } = require("body-parser")
const app = express()
global.fetch = fetch

const port = process.env.PORT || 9000
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/search", require("./routes/search"))

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})