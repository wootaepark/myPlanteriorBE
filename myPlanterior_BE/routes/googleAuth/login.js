const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const secretKey = process.env.SESSION_SECRET;
// Google OAuth 인증 요청
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', (err, user, info) => {
    if (err) {
      console.error('Authentication Error:', err); 
      return res.status(500).json({ message: '서버 오류' });
    }
    if (!user) {
      return res.status(400).json({ message: '로그인 중단' });
    }

    req.logIn(user, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: '로그인 실패' });
      }

      const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '5' });
      // 인증 성공 시 클라이언트에 성공 메시지 전송
      res.redirect(`https://gyural.github.io/My-Planterior-FE/?token=${token}`)
    });
  })(req, res, next);
});



// 로그아웃
router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: '로그아웃 성공' });
});

// 사용자 프로필 페이지 (미구현)
router.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: '인증 필요' });
  }
  res.status(200).json({ message: `Hello ${req.user.displayName}`, user: req.user });
});

module.exports = router;
