const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, min:0, required: true },
    description: { type: String, default: 'No description' },
    available: { type: Boolean, default: true },
    category: { type: String, required: true }
})

module.exports = restful.model('Product', productSchema)