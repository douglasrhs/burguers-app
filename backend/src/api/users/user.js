const restful = require('node-restful')
const mongoose = restful.mongoose

const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true},
    password: { type: String, required: true},
    type: { type: String, required: true, 
        enum:['PRESENCIAL','DELIVERY']},
    address: {
        street: {type: String},
        number: {type: Number}, 
        complement: {type: String},
        district: {type: String},
        city: {type: String},
        state: {type: String},
        country: {type: String}
    },
    orders: [
        {
            products: [
                {
                    product: { type: Schema.Types.ObjectId, ref: 'Product'},
                    quantity: { type: Number, min: 1}
                }
            ]
        }
    ]
})

module.exports = restful.model('Users', UserSchema)