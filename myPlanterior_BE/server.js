const express = require('express');
const morgan = require('morgan');
const {sequelize} = require('./models');


const server = express();
const port = 3000;


sequelize.sync({force : false})
.then(()=>{
    console.log('마리아 디비 연결 성공 (연결 포트 : 3306)');
})
.catch((err=>{
    console.error(err);
}));



server.use(morgan('dev'));

server.get('/', (req, res)=>{
    res.send('hello');
})


server.listen(port, ()=>{
    console.log(port, '번 에서 서버 실행중');
})