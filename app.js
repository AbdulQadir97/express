const express = require('express')
const app = express()
const port = '3001'
const formRoutes = require('./routes/form')
const bodyParser = require('body-parser')

// const globleMiddleware = ((req, res, next)=>{
//     console.log("Global Middleware");
//     next()
// })

// app.use(globleMiddleware)

app.use(bodyParser.urlencoded({extended:false}))

app.use('/form', formRoutes)

app.use('/', (req, res, next)=>{
    res.send("HOME")

})







app.listen(port)