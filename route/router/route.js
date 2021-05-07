//导入
const express =require("express");

// 创建实例
const app=express();

// 定义路由
// 导入已经模块化的路由
const backend =require("./backend");
const frontend=require("./frontend");

app.use("/backend",backend);
app.use("/frontend",frontend);


// 启动服务
app.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
});