const express = require('express')
const app = express()
const port = 8080
const cookieSession=require("cookie-session");
let count;

app.use(cookieSession({
    name:"sessionId",
    //sesionId加密处理
    secret:"slajdowqjidjw",
    maxAge:20*60*1000,
    //让时间滚动刷新
    rolling:true, 
}))

app.get("/",(req,res)=>{
    if(req.session["count"]){
        req.session["count"]++;
        res.send(`你是本网站的第${req.session[count]}位访客`);
    }else{
        req.session["count"]=1;
        res.send(`你是访问本网站的第一位访客`);
    }
})
app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:8080`))