const express =require("express");

const router=express.Router();

// 前台用户添加操作
router.get('/news/:id',(req,res)=>{
    res.send("前台用户添加操作")
});
// 后台用户添加操作
router.get('/news/:id',(req,res)=>{
    res.send("后台用户添加操作")
});
// 后台用户添加操作
router.get('/news/:id',(req,res)=>{
    res.send("后台用户添加操作")
});
// 后台用户添加操作
router.get('/news/:id',(req,res)=>{
    res.send("后台用户添加操作")
});

module.exports=router;