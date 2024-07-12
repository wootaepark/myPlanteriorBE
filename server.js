const express = require('express');
const morgan = require('morgan');


const server = express();
const port = 3000;


server.use(morgan('dev'));


server.listen(port, ()=>{
    console.log(port, '번 에서 서버 실행중');
})