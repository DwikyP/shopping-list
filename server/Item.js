const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    text: String,
    price: Number
})

mongoose.model("item", ItemSchema)