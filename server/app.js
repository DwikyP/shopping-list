const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const env = require('dotenv').config(); 
require('./Item')

const Item = mongoose.model("item")

app.use(bodyParser.json())

const mongoUri = "mongodb://"+process.env.COSMOSDB_HOST+":"+process.env.COSMOSDB_PORT+"/"+"?ssl=true&replicaSet=globaldb"

mongoose.connect(mongoUri, {
    auth: {
    user: process.env.COSMOSDB_USER,
    password: process.env.COSMOSDB_PASSWORD
  },
useNewUrlParser: true,
useUnifiedTopology: true})

mongoose.connection.on("connected",()=>{
    console.log("Connected to CosmosDb")
})

mongoose.connection.on("error",(err)=>{
    console.log("error", err)
})

app.get('/',(req,res)=>{
    Item.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/send-data',(req,res)=>{
    const item = new Item({
        text: req.body.text
    })
    item.save()
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/delete',(req,res)=>{
    Item.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log("server running")
})