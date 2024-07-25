const passport = require('passport');
const google = require('./googleStrategy'); // 구글서버로 로그인할때
const kakao = require("./kakaoStrategy");

const User = require('../models/user');

module.exports = () => {

   passport.serializeUser((user, done) => {

      console.log('passport session save: ', user);
      done(null, user.user_id);
   });

   passport.deserializeUser((user_id, done) => {
      console.log('passport session get id: ', user_id);
      User.findOne({ where: { user_id} })

         .then(user => done(null, user))
         .catch(err => done(err));
   }); 

   google(); // 구글 전략 등록
   kakao();
};