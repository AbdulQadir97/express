const express = require('express')
const route = express.Router()  
const path  = require('path')


route.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../", "views", "index.html"))
})
route.post('/', (req, res)=>{
    res.send(req.body)
})


module.exports = route