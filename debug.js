const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('get请求');
})

app.post('/',(req,res)=>{
    console.log("收到请求体：",req.body);
    res.status(201).send("post请求呀")
    
})
app.put('/',(req,res)=>{
    res.send("put请求")
})
app.delete('/',(req,res)=>{
    res.send("delete请求")
})
app.listen(port, () => console.log(`Example app listening on port port!`))