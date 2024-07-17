const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const {sequelize} = require('./models');


// 라우터
const recommandRouter = require('./routes/api/recommendation');


const server = express();
const port = 3000;
server.use(morgan('dev'));

sequelize.sync({force : false})
.then(()=>{
    console.log('마리아 디비 연결 성공 (연결 포트 : 3306)');
})
.catch((err=>{
    console.error(err);
}));




server.use('/api/recommand' , recommandRouter);



// 404 NOT FOUND 에러 처리

server.use((req, res, next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`); // 404 not found 에러 처리 미들웨어
    error.status = 404;
    next(error);
})

// 500 Internal Server 에러 처리

server.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; // 환경에 따른 에러 표시 유무 조건문
    res.status(err.status || 500);
    res.render('error');
})






server.listen(port, ()=>{
    console.log(port, '번 에서 서버 실행중');
})