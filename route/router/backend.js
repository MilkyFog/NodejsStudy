const express = require("express");

const router=express.Router();

// 后台用户添加操作
router.post('/user/:id',(req,res)=>{
    res.send("后台用户添加操作")
})
// 后台用户删除操作
router.delete('/user/:id',(req,res)=>{
    res.send("后台用户删除操作")
})
// 后台用户修改操作
router.put('/user/:id',(req,res)=>{
    res.send("后台用户修改操作")
})
// 后台用户列表操作
router.get('/user/:id',(req,res)=>{
    res.send("后台用户列表操作")
})

// 导出
module.exports=router;