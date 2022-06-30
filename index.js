const express = require("express");
const bodyParser = require('body-parser')

const userRote = require("./routes/userRoute");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({entended: false}))

userRote(app);

app.get("/", (req, res) => res.send("olá mundo pelo Express!"));

app.listen(port, () => console.log("Api rodando na porta 3000"));
