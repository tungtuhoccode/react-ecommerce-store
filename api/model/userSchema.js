const mongoose  = require('mongoose');  
const Schema = mongoose.Schema;

const cartItemSchema = new mongoose.Schema({
    color: {type: String, required: true},
    id:  {type: String, required: true},
    imageSource:  {type: String, required: true},
    itemName:  {type: String, required: true},
    price:  {type: Number, required: true},
    quantity: {type: Number, required: true},
    size: {type: String, required: true}
})

//user
const userSchema = new Schema({
    email:{type:String, required:true},
    password:{ type:String,required:true },
    
    refreshToken: [
        {type:String}
    ],

    cart: {
        totalCartPrice: {type:Number},
        cartItems: [
            cartItemSchema
        ]
    }
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