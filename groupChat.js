const express = require('express')
const app = express()
const fs = require('fs')

const parsedBody = require('body-parser')
app.use(parsedBody.urlencoded({extended:false}))

app.get('/login',(req, res, next)=>{
   console.log('entered /login')
   res.send(`<form action="/" onsubmit="localStorage.setItem('username',document.getElementById('user').value)" 
method="POST"><input type="text" id="user" name="username"></input><button type="submit"> Login</button></form>`)

})


app.get('/',(req, res, next)=>{
   fs.readFile('text.txt',(err,data)=>{
       
       if(err){
           //console.log(err)
           data='no chat exists'
           console.log(data)
       } 
   
   res.send(
       `${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
       <input type="text" name="message" id="message">
       <input type="hidden" name="username" id="username">
       <button type="submit">send</button>
       </form>`
   )
   })
})
app.post('/',(req, res, next)=>{
   console.log('entered /post')
   console.log(req.body.username)
   //console.log(req.body.message)
   if(!req.body.message){
       console.log('msg is not there')
       res.redirect('/')
   }
   else{
   fs.writeFile('text.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
      (err)?console.log(err):res.redirect('/')
   })
}
})



app.listen(3000)