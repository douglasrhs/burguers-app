const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    price: { type: Number, min:0, required: true},
    description: { type: String, default: 'No description'},
    available: { type: Boolean, default: true},
    category: { type: String, required: true, enum:['LANCHES','BEBIDAS','PIZZAS']}
})

const itemOrderSchema = new mongoose.Schema({
    products: productSchema,
    amount: { type: Number, min:0, default: 1, required: true},
    note: { type: String , default: 'Observação: ?'}    
})

const clientSchema = new mongoose.Schema({
    type: { type: String, required: true, 
        enum:['PRESENCIAL','DELIVERY']},
    end: { type: String, required: true }
})

const orderSchema = new mongoose.Schema({
    itensOrder: [itemOrderSchema],
    client: clientSchema, 
    timeOrder: { type: Date, required:true, default: Date.now },
    rateDelivery: { type: Number, min: 0},
    status: { type: String, required: true, 
        enum:['INICIADO', 'AGUARDANDO', 'A CAMINHO', 'FINALIZADO']},
    orderPay: { type: String, required: true,
        enum:['PAGO', 'NÃO PAGO']}
})

module.exports = restful.model('Order', orderSchema)