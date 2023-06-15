const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productVariantSchema = new mongoose.Schema({
    size: {type: String,required: true},
    stock:{type: Number, required: true},
    sold: {type: Number, required: true, default: 0}
})

const productSchema = new Schema({
    id: {type: mongoose.SchemaTypes.ObjectId},
    name: {type: String,required: true},
    description: {type: String,required: true},
    price: {type: Number,required: true},
    color: {type: String,required: true},

    category: [
        {type: String,required: true}
    ],

    productVariant: [
        productVariantSchema
    ],

    images: [
        {
            url:{type:String,required:true},
            alt: {type:String,required:true}
        }
    ],

    reviews: [{type: String,required: true, default: ""}],
    rating: {type: Number, required: true, default: 0}
});

module.exports = mongoose.model('Product', productSchema);