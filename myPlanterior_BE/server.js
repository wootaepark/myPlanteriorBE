const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
//const https = require('https');
//const fs = require('fs');

require('dotenv').config();

require("./passport/index")()
// require('./passport/googleStrategy')();
// require("./passport/kakaoStrategy")();

const {sequelize} = require('./models');

// 라우터
const googleAuthRouter = require('./routes/googleAuth/login');
const kakaoAuthRouter = require('./routes/kakaoAuth/kakaoLogin')
const naverStoreRouter = require("./routes/naverStoreAPI/naverStoreAPI");
const recommendRouter = require('./routes/api/recommendation');



const server = express();
const port = 3000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({extended : true}));
// server.use(express.static(path.join(__dirname,'public')));
// server.use('/img',express.static(path.join(__dirname,'uploads')));


server.use(session({
    secret: "myplanterrior",
    resave: false,
    saveUninitialized: false, // 세션이 새로 생성되면 저장하도록 설정
    cookie: { secure: true } // 개발 환경에서는 false로 설정 (production 환경에서는 true로 설정)
}));

server.use(passport.initialize());
server.use(passport.session());


sequelize.sync({force : false})
.then(()=>{
    console.log('마리아 디비 연결 성공 (연결 포트 : 3306)');
})
.catch((err=>{
    console.error(err);
}));



server.use('/api/kakao',kakaoAuthRouter);
server.use('/api/naver',naverStoreRouter);

server.get('/', (req, res, next) =>{
    res.send(
        `<p>google 로그인 </p>
        <a href='api/auth/google'>구글로그인</a>
        `
    )
})



server.use('/api/auth',googleAuthRouter);
server.use('/api/send-data', recommendRouter); // 식물 추천 라우터



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
    res.send(`
        <h1>Error ${err.status || 500}</h1>
        <p>${res.locals.message}</p>
    `);
})






server.listen(port, ()=>{
    console.log(port, '번 에서 서버 실행중');
})