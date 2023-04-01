require('dotenv').config();

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')
const connectDB = require('./config/dbCon')
const bodyParserErrorHandler = require('express-body-parser-error-handler')

//connect to database
connectDB();

//import routes
const productRoute = require("./routes/api/productRoutes");
const corsOptions = require('./config/corsOption');

app.use(cors(corsOptions))
//morgan logger
app.use(logger('dev'));

// parse json otherwise body will be undefined
app.use(bodyParserErrorHandler());

app.use(express.json());

//pages route
app.use("/products", productRoute);


app.use("/",(request, res) =>{
    res.json("hello world")
})

mongoose.connection.once('open', () => {
    console.log("Connected to mongoDB")
    app.listen(PORT, () => { console.log("Server is running on port "+PORT)})
})


