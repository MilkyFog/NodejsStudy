const express = require('express')
const app = express()
const port = 8080

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.post("/post",(req,res)=>{
    console.log(req.body);
})

app.listen(port, () => console.log(`Example app listening on http://127.0.0.1:8080/post`))