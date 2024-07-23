const express = require('express');
const morgan = require('morgan');
const session = require("express-session")
const {sequelize} = require('./models');
const googleAuthRouter = require('./routes/googleAuth/login');

// 라우터
const recommandRouter = require('./routes/api/recommendation');

const server = express();
const port = 3000;

server.use(session({
    secret: "myplanterrior",
    resave: true,
    secure: false,
    saveUninitialized: false,
}))

server.use(morgan('dev'));
server.use("/", require("./Controllers/kakaoLoginController"))
server.use(express.json());
server.use(express.urlencoded({extended : false}));

sequelize.sync({force : false})
.then(()=>{
    console.log('마리아 디비 연결 성공 (연결 포트 : 3306)');
})
.catch((err=>{
    console.error(err);
}));



server.get('/', (req, res)=>{
    res.send(`
        <h1>OAuth</h1>
        <a href="/login">Log in</a>
        `)
});

server.get('/login', (req, res) =>{
    let url = 'https://accounts.google.com/o/oauth2/v2/auth';
    url += `?client_id=${process.env.GOOGLE_CLIENT_ID}`;
    url += `&redirect_uri=http://localhost:3000/auth/google`;
    url += '&response_type=code'
  	// 구글에 등록된 유저 정보 email, profile을 가져오겠다 명시
    url += '&scope=email profile'    
  	// 완성된 url로 이동
  	// 이 url이 위에서 본 구글 계정을 선택하는 화면임.
	res.redirect(url);

});
server.use('/auth/google',googleAuthRouter);

server.use('/api/recommand' , recommandRouter); // 식물 추천 라우터

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