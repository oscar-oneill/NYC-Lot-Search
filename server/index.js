const dotenv = require("dotenv").config()
global.fetch = require("node-fetch")
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { json } = require("body-parser")
const app = express()
global.fetch = fetch

const port = process.env.PORT || 9000

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "*")
  res.setHeader("Access-Control-Allow-Headers", "*")
  next()
})

app.use(cors({ origin: "*" }));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/search", require("./routes/search"))
app.use("/return", require("./routes/additional"))

app.get('/', async (req, res) => {
  res.send(`<div style="font-family: monospace;">You are connected to the server</div>`)
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})