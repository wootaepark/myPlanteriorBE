const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;
const User = require("../models/user")
require("dotenv").config()

module.exports = () => {
    passport.use(new KakaoStrategy({
            clientID: process.env.KAKAO_REST_API,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
            callbackURL: process.env.KAKAO_REDIRECT_URI
        },
        async(accessToken, refreshToken, profile, done) => {
            try {
                console.log(profile)
                let user = await User.findOne({ where: { user_id: profile.id } });
            if (user) {
                return done(null, user);
            }
            user = await User.create({
                user_id : profile.id,
                name: profile.displayName,
                email: profile._json.kakao_account.email,
                source: "kakao",
            });
            return done(null, user);
            } catch (error) {
                return done(error, null)
            }
        }
    ))
}