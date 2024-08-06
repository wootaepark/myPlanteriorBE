const express = require('express');
const passport = require('passport');
const router = express.Router();
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
            return res.redirect(`https://gyural.github.io/My-Planterior-FE/?token=${token}`);
          
          
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


module.exports = router;
