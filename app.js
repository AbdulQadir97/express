const express = require('express')
const app = express()
const port = '3001'
const productsRoutes = require('./routes/products')
const bodyParser = require('body-parser')
const {connectedDB} = require('./dbConnection')

// const globleMiddleware = ((req, res, next)=>{
//     console.log("Global Middleware");
//     next()
// })

// app.use(globleMiddleware)

// run().catch(console.dir)

app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.set ('views', 'views')
app.use('/products', productsRoutes)

app.use('/', (req, res)=>{
    res.send("HOME")

})







app.listen(port)