require("dotenv").config()
const express = require("express")
const router = express.Router()
const axios = require("axios")
const qs = require("qs")

const kakao_config = {
    client_id: process.env.KAKAO_REST_API,
    client_secret: process.env.KAKAO_CLIENT_SECRET,
    redirect_uri: process.env.KAKAO_REDIRECT_URI
}

router.get("/oauth/kakao", (req, res) => {
    const kakao_login_url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakao_config.client_id}&redirect_uri=${kakao_config.redirect_uri}`
    res.redirect(kakao_login_url)
})

router.get("/oauth/kakao/callback", async(req, res) => {
    let token
    try {
        token = await axios({
            method: "post",
            url: "https://kauth.kakao.com/oauth/token",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data:qs.stringify({
                grant_type: "authorization_code",
                client_id: kakao_config.client_id,
                client_secret: kakao_config.client_secret,
                redirect_uri: kakao_config.redirect_uri,
                code: req.query.code
            })
        })
        console.log(token)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router