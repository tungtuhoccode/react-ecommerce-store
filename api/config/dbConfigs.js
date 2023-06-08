const mongoose = require('mongoose');

const connectDB = async (err) => {

    try{
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }   
    catch{
        console.log("database URI: "+process.env.DATABASE_URI)
        console.log("Database connection error")
        console.log(err)
        console.log()
    }
}

module.exports = connectDB;