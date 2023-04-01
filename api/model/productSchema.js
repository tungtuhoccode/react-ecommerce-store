const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: ObjectId, 
    name: {type: String,required: true},
    description: {type: String,required: true},
    price: {type: Number,required: true},
    color: {type: String,required: true},
    size: {type: String,required: true},
    images: [
        {
            url:{type:String,required:true},
            alt: {type:String,required:true}
        }
    ],
    stock:{type: Number, required: true},

});

module.exports = mongoose.model('Product', productSchema);