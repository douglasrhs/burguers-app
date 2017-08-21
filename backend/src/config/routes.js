const express = require('express')


module.exports = function(server){

    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rota Inicial http://localhost:3000/
    
    // Rotas Orders
    const Orders = require('../api/users/userServices')
    Orders.register(router, '/users')

    // Rotas Products
    const Products = require('../api/products/productServices')
    Products.register(router, '/products')
    

}