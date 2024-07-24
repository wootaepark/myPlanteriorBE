const express = require('express');
const axios = require('axios');
require('dotenv').config;

const User = require("../../models/user")

const googleAuthRouter = express.Router();

googleAuthRouter.get('/', async (req, res, next)=>{
    const { code } = req.query;
    console.log(`code: ${code}`);
    let resp;

    // access_token, refresh_token 등의 구글 토큰 정보 가져오기
    try{
        resp = await axios.post(process.env.GOOGLE_TOKEN_URL, {
        // x-www-form-urlencoded(body)
        code,
        client_id : process.env.GOOGLE_CLIENT_ID,
        client_secret :process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        grant_type : 'authorization_code',
    });
    //console.log(resp.data);

    }
    catch(error){
        console.error('Error during save token:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.response ? error.response.data : error.message });
    } 
    
    try{
        const resp2 = await axios.get(process.env.GOOGLE_USERINFO_URL, {
        headers: {
            Authorization: `Bearer ${resp.data.access_token}`,
            
        },
        });
        console.log(resp2.data);
        res.send('로그인 성공');



        // user DB 저장

        const result = await User.create({
            name: resp2.data.name,
            email: resp2.data.email,
            source: "google"
        })



        console.log(result)
    }
    catch(error){
        console.error('Error during get user info:', error.response ? error.response.data : error.message);
        res.status(500).json({message : 'Internal Server Error', error : error.response ? error.response.data : error.message});
    }
        
})




module.exports = googleAuthRouter;