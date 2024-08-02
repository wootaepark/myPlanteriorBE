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
        `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Login</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        .container {
            text-align: center;
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        h1 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        .login-btn {
            display: inline-block;
            background-color: #4285F4;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            text-decoration: none;
            font-size: 1rem;
            font-weight: bold;
            transition: background-color 0.3s;
        }
        .login-btn:hover {
            background-color: #357ae8;
        }
        .login-btn img {
            vertical-align: middle;
            margin-right: 0.5rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Google로 로그인</h1>
        <a href="https://mpserver.shop/api/auth/google" class="login-btn">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReH1nivRV_9yG4wz04xIz1EEh-J69U_2JRaA&s" alt="Google logo" width="20" height="20">
            구글 로그인
        </a>
    </div>
</body>
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