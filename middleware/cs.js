const express = require("express");
const app = express();
const port = 8080;

app.use(require('./cs-body-parse'));

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:8080`);
});
