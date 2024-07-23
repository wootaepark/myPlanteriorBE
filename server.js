const express = require('express');
const morgan = require('morgan');
const session = require("express-session")
const nunjucks = require("nunjucks")

const server = express();
const port = 3000;

server.set("view engine", "html")
nunjucks.configure('views',{
    express: server,
})

server.use(session({
    secret: "myplanterrior",
    resave: true,
    secure: false,
    saveUninitialized: false,
}))

server.use(morgan('dev'));
server.use("/", require("./Controllers/kakaoLoginController"))

server.listen(port, ()=>{
    console.log(port, '번 에서 서버 실행중');
})