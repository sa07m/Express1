const express = require('express')
const path = require('path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
//const rootDir = require('util/path')
// in order to use req.body, we need the parsed data
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes)
app.use(shopRoutes)

// app.use((req, res, next)=>{
//     console.log('this always runs!')
//     next();
// })

app.get('/',(req, res, next)=>{
    res.send('<h1>Hello from Express Home</h1>')
})
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
  // res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

app.listen(3000)
