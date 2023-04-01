const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String,required: true},
    description: {type: String,required: true},
    price: {type: Number,required: true},
    color: {type: String,required: true},
    size: {type: String,required: true},
    catagory: {type: String,required: true},
    images: [
        {
            url:{type:String,required:true},
            alt: {type:String,required:true}
        }
    ],

    stock:{type: Number, required: true},
    sold: {type: Number, required: true, default: 0},
    reviews: [{type: String,required: true, default: ""}],
    rating: {type: Number, required: true, default: 0}
});

module.exports = mongoose.model('Product', productSchema);