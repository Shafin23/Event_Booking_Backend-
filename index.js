const express = require("express");
const { mongodbConnector } = require("./utilityFunction/mongodbConnector");
const app = express()
require("dotenv").config()
const port = process.env.PORT

// Connecting to mongodb
mongodbConnector()
// ---------------------


// checking is the server is running or not
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Server is running"
    })
})

app.listen(port, () => {
    console.log(`Server is listening to the port ${port}`)
})