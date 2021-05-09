const express = require("express");
const fs = require("fs");

const app = express();
const port = 8080;


app.get("/",(req,res)=>{
    let url="kjsdlajs";
    try{
        let data=fs.readFileSync(url);
        res.send(data);
    }catch(error){
        throw new Error("你要找的文件失踪了");
    }
})

app.use((err,req,res,next)=>{
    res.send("你的错误是"+err.message);
    next();
})

app.use((req,res,next)=>{
    res.status(404).send("404");
})

app.listen(port, () =>
  console.log(`Example app listening on port http://127.0.0.1:8080`)
);
