const express = require('express')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// in order to use req.body, we need the parsed data
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)

// app.use((req, res, next)=>{
//     console.log('this always runs!')
//     next();
// })

app.get('/',(req, res, next)=>{
    res.send('<h1>Hello from Express Home</h1>')
})
app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)
