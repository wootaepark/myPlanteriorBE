const express = require("express")
const router = express.Router()
const axios = require("axios")



router.get("/plantList", async(req, res) => {
    try {
        const keyword = req.query.keyword;

        if(!keyword){
            res.status(400).json({error : '쿼리파라미터가 없습니다.'});
        }

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
        res.status(200).json(response.data.items)
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router