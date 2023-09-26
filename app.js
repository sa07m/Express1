const express = require('express')
// in order to use req.body, we need the parsed data
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))

// app.use((req, res, next)=>{
//     console.log('this always runs!')
//     next();
// })

app.use('/add-product',(req, res, next)=>{   
    res.send('<form action = "/product" method = "POST"><input type="text" name="title"><input type="text" name="size" placeholder="size"><button type="submit">Add product</button></form>')
})
// now we have to add a MW for /product
app.use('/product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req, res, next)=>{
    res.send('<h1>Hello from Express</h1>')
})

app.listen(3000)