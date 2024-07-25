const express = require('express');
//const Plant = require('../../models/plantDetail');
const axios = require('axios');

const recommendation = express.Router();

recommendation.post('/', async (req, res, next) =>{

    const data = {
        height: 150,
        scent: 50,
        level: 100,
        water_need: 20,
        leaf_shape: 1,
        purpose_avg: 30,
        leaf_color_avg: 30
      };
    
    try {
        const response = await axios.post('http://127.0.0.1:8000/cluster', data);
        // 도커 배포시 아래와 같이 수정필수
        // const response = await axios.post('http://r-server:8000/cluster', data);\
        
        if(Object.keys(response.data).length === 0){
            return res.status(404).json({message : "data not found"});
        }

        return res.status(200).json(response.data);
      } 
    catch(error){
        console.error(error);
        res.status(500).send('Error communicating with R server');
    }
   


});





module.exports = recommendation;