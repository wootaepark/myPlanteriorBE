const express = require('express');
//const Plant = require('../../models/plantDetail');
const axios = require('axios');
const Plant = require('../../models/plantDetail');
const PlantImg = require('../../models/plantImage');

const recommendation = express.Router();

recommendation.post('/', async (req, res, next) =>{


  const data =  {
    level: 100, // 100 : 초보자 |  200, 중급자 |  300 : 전문가
    water_need :20, // 10 : 드물게 (1번) | 20 : 가끔 (2번)| 30 : 자주 (3번)
    purpose: 50, // 10 : 잎보기식물| 20 : 꽃보기식물 | 30 : 잎&꽃보기식물| 40 : 선인장다육식물 | 50 : 열매보기식물
    temperature: 20, // 10 : 10 ~ 16도 | 20 : 16도 ~ 20도 | 30 : 21도 ~ 26도
    sunright: 20 // 10 : 낮은 광도 | 20 : 중간 광도 | 30 : 높은 광도
  }

    
    try {
        const response = await axios.post('http://r-server:8000/cluster', data);
        // local : 'http://127.0.0.1:8000/cluster' (in vscode) 
        // production : 'http://r-server:8000/cluster' (in docker & production)

       
    
        
        if(Object.keys(response.data).length === 0){
            return res.status(404).json({message : "data not found"});
        }
        
        
        const promises = response.data.slice(0, 5).map(async (item) => {
          const id = item.content_number;
          //console.log(id);
          const plant = await Plant.findOne({ where: {contentNumber : id}, include: PlantImg });
          if (plant) {
            plant.selectedCount += 1; // 선택되는 식물 count 1 추가
            await plant.save(); // 데이터베이스에 저장
          }
          return plant
        });

        const plants = await Promise.all(promises);

        return res.status(200).json(plants);


      } 
    catch(error){
        console.error(error);
        res.status(500).send('Error communicating with R server');
    }
   


});





module.exports = recommendation;