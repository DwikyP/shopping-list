const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    uid: String,
    items: [{
        item: String,
        qty: Number,
        price: String
    }],
    status: String,
    totalPrice: Number
})

mongoose.model("order", OrderSchema)