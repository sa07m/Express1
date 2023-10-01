const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()

router.get('/add-product',(req, res, next)=>{   
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})
// now we have to add a MW for /product

router.get('/product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/shop')
})

module.exports = router
