const express = require("express");
const querystring = require("querystring");
const csBodyParse = (req, res, next) => {
  let arr = [];
  req.on("data", (buffer) => {
    arr.push(buffer);
    console.log(arr);
  });
  req.on("end", () => {
    let buffer = Buffer.concat(arr);
    let post = querystring.parse(buffer.toString());
    req.body = post;
    next();
  });
};
module.exports=csBodyParse;
