const mongoose = require("mongoose");
require("dotenv").config()

const mongodbConnector = () => {
    console.log(process.env.DB_USERNAME)
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.yfo5lts.mongodb.net/eventBooking`)
        .then(res=>console.log("Mongodb is connected successfully!"))
        .catch(err => console.log(`Here is the error, ${err}`))
}

module.exports = { mongodbConnector }
