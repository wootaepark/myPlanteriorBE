const express = require("express")
const router = express.Router()
const axios = require("axios")
const asyncHandler = require("express-async-handler")

const search_keyword = "스킨답서스"

router.get("/temp", asyncHandler(async(req, res) => {
    const response = await axios({
        method: "get",
        url: "https://openapi.naver.com/v1/search/shop.json",
        header: {
            "content-type": "application/json",
            "X-Naver-Client-Id": "49FAdpFCj6aJlZE0wGQZ",
            "X-Naver-Client-Secret": "cLVMKCBTvr"
        },
        data: {
            query: search_keyword,
            display: 10,
            sort: "sim",
        }
    })
    res.send(response)
}))

module.exports = router