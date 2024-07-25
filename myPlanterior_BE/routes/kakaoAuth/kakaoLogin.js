require("dotenv").config()
const express = require("express")
const router = express.Router()
const axios = require("axios")
const qs = require("qs")
const User = require("../../models/user")
const passport = require("passport");

// const kakao_config = {
//     client_id: process.env.KAKAO_REST_API,
//     client_secret: process.env.KAKAO_CLIENT_SECRET,
//     redirect_uri: process.env.KAKAO_REDIRECT_URI
// }

router.get("/oauth/kakao", passport.authenticate("kakao"))

router.get("/oauth/kakao/callback", async(req, res, next) => {
    passport.authenticate("kakao", (err, user) => {
        if (err) {
            console.log(err)
        } 
        if (!user) {
            console.log("no user info")
        }

        console.log(user)
        res.send(user)
    })(req, res, next)


    // let token
    // try {
    //     console.log("token")
    //     token = await axios({
    //         method: "post",
    //         url: "https://kauth.kakao.com/oauth/token",
    //         headers: {
    //             "content-type": "application/x-www-form-urlencoded"
    //         },
    //         data:qs.stringify({
    //             grant_type: "authorization_code",
    //             client_id: kakao_config.client_id,
    //             client_secret: kakao_config.client_secret,
    //             redirect_uri: kakao_config.redirect_uri,
    //             code: req.query.code
    //         })
    //     })
    //     console.log(token.data)
    // } catch (error) {
    //     // console.log(error)
    // }

    // let user
    // try {
    //     console.log("user")
    //     user = await axios({
    //         method: "get",
    //         url: "https://kapi.kakao.com/v2/user/me",
    //         headers: {
    //             "Authorization": `Bearer ${token.data.access_token}`,
    //         },
    //     })

    //     const userData = user.data.kakao_account

    //     console.log(userData)

        // user DB 저장


        // const result = await User.create({
        //     name: userData.profile.nickname,
        //     email: userData.email,
        //     source: "kakao"
        // });

    //     console.log(result)

    // } catch (error) {
        // console.log(error)
    // }
})

module.exports = router