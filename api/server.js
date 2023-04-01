require('dotenv').config();

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const logger = require('morgan')
const mongoose = require('mongoose')
const connectDB = require('./config/dbCon')


//connect to database
connectDB();

//import routes
const productRoute = require("./routes/api/productRoutes")

//morgan logger
app.use(logger('dev'));


//pages route
app.use("/products", productRoute);


app.use("/",(request, res) =>{
    res.json("hello world")
})

mongoose.connection.once('open', () => {
    console.log("Connected to mongoDB")
    app.listen(PORT, () => { console.log("Server is running on port "+PORT)})
})


