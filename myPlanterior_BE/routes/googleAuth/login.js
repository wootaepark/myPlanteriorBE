const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const secretKey = process.env.SESSION_SECRET;
const User = require('../../models/user');
require('dotenv').config();
// Google OAuth 인증 요청
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', async (err, user, info) => {
    if (err) {
      console.error('Authentication Error:', err);
      return res.status(500).json({ message: '서버 오류' });
    }
    
    if (!user) {
      return res.status(400).json({ message: '로그인 중단' });
    }

    req.logIn(user, async (err) => {
      if (err) {
        console.error('Login Error:', err);
        return res.status(500).json({ message: '로그인 실패' });
      }

      try {
        // 사용자 정보를 데이터베이스에서 다시 조회하여 accessToken을 가져옴
        const updatedUser = await User.findOne({ where: { user_id: user.user_id } });
        
        if (updatedUser) {
          const token = updatedUser.accessToken; // 저장된 accessToken 가져오기
          // 클라이언트에 accessToken을 포함하여 리다이렉션
            return res.redirect(`http://localhost:3000?token=${token}`);
          
          
        } else {
          return res.status(404).json({ message: '사용자 정보를 찾을 수 없습니다.' });
        }
      } catch (dbError) {
        console.error('Database Error:', dbError);
        return res.status(500).json({ message: '서버 오류' });
      }
    });
  })(req, res, next);
});


// 로그아웃
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: '로그아웃 성공' });
});

// 토큰 검증 미들웨어
/*const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // 'Bearer TOKEN' 형태에서 TOKEN만 추출

  if (token == null) return res.sendStatus(401); // 토큰이 없는 경우

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403); // 토큰 검증 실패
    req.user = user; // 유저 정보를 요청 객체에 추가
    next();
  });
};

// 사용자 프로필 페이지
router.get('/profile', authenticateJWT, async (req, res) => {
  try {
    // req.user는 authenticateJWT 미들웨어에서 설정된 유저 정보입니다.
    const user = await User.findOne({ where: { user_id: "101869584462684278572" } });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: '서버 오류' });
  }
});*/
module.exports = router;
