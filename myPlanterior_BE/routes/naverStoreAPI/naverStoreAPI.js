const express = require("express")
const router = express.Router()
const axios = require("axios")

router.get("/plantList", async(req, res) => {
    try {
        const keyword = "스킨답서스"

        const response = await axios({
            method: "get",
            url: process.env.NAVER_SHOP_URL,
            headers: {
                "X-Naver-Client-Id": process.env.NAVER_CLI_ID,
                "X-Naver-Client-Secret": process.env.NAVER_CLI_SECRET
            },
            params: {
                "query": keyword,
                "display": 5
            }
        })
        res.send(response.data.items)
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router