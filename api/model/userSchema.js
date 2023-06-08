const mongoose  = require('mongoose');  
const Schema = mongoose.Schema;


//user
const userSchema = new Schema({
    email:{type:String, required:true},
    password:{ type:String,required:true },
    
    refreshToken: [
        {type:String}
    ]
})







//methods
userSchema.statics.isDuplicateEmail = async function (email){
    try{
        const emailFound = await this.findOne({"email": email})

        if (emailFound) return true

        return false
    }
    catch(err){
        console.log('error in isDuplicateEmail', err.message)
    }
}

//take in the unique email to find the user and update the data accordingly
userSchema.statics.addRefreshToken = async function (email, refreshTokenIn){
    try{
        const userFound = await this.findOne({"email": email})

        if (!userFound) return false

        userFound.refreshToken = [...userFound.refreshToken, refreshTokenIn]

        await userFound.save()

        return true
    }
    catch(err){
        console.log('error in isDuplicateEmail', err.message)
    }
}
module.exports = mongoose.model('User', userSchema); 