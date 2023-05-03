const mongoose  = require('mongoose');  
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{type:String, required:true},
    roles:{
        User: {type: String, default: "guest"},
        Editor:{ type: String },
        Admin:{ type: String }
    },
    password:{ type:String,required:true },
    refreshToken: String
})

module.exports = mongoose.model('User', userSchema); 