const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    text: String
})

mongoose.model("item", ItemSchema)