require('dotenv').config();

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConfigs')

//connect to database
connectDB();

//import routes
const productRoute = require("./routes/api/productRoutes");
const userAuthenticationRoute = require("./routes/api/userAuthenticationRoutes");
const corsOptions = require('./config/corsOption');

//middleware
app.use(logger('dev'));
app.use(cors(corsOptions))

// parse json (Without this, server will not be able to handle json data in the body, thus will cause error)
app.use(express.json());

//ROUTE
app.use("/products", productRoute);
app.use("/auth",userAuthenticationRoute );

app.use("/",(request, res) =>{
    res.status(404)
})

mongoose.connection.once('open', () => {
    console.log("Connected to mongoDB")
    app.listen(PORT, () => { console.log("Server is running on port "+PORT)})
})


