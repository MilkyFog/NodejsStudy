const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = 8080;

app.use(cookieParser()),
  app.get("/", (req, res) => {
    //获取方式
    if (req.cookies.is_old_user) {
        res.send("欢迎回来，心悦VIP3");
    } else {
      //设置方式
      //如果没设置过期时间，则默认会话期间有效
      res.cookie("is_old_user", 1, { maxAge: 86400 * 1000 }); //一天的秒数86400
      res.send("欢迎成为我们的会员");
    }
  });

app.listen(port, () =>
  console.log(`Example app listening on port http://127.0.0.1:8080`)
);
