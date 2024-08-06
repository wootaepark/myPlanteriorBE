require("dotenv").config()
const express = require("express")
const router = express.Router()
const User = require("../../models/user")
const passport = require("passport");


router.get("/oauth/kakao", passport.authenticate("kakao"))

router.get("/oauth/kakao/callback", async(req, res, next) => {
    passport.authenticate("kakao", async(err, user) => {
        if (err) {
            console.log(err)
        } 
        if (!user) {
            console.log("no user info")
        }

        // 토큰과 함께 응답
        try {
            // 사용자 정보를 데이터베이스에서 다시 조회하여 accessToken을 가져옴
            const updatedUser = await User.findOne({ where: { user_id: user.user_id } });
            
            if (updatedUser) {
            const token = updatedUser.accessToken; // 저장된 accessToken 가져오기
            // 클라이언트에 accessToken을 포함하여 리다이렉션
                return res.redirect(`https://gyural.github.io/My-Planterior-FE/?token=${token}`);
            }
        } catch (error) {
            console.log(error)
        }
    })(req, res, next)
})

module.exports = router