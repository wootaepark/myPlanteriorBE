const express = require('express');
const axios = require('axios');
const Plant = require('../../models/plantDetail');
const PlantImg = require('../../models/plantImage');

const recommendation = express.Router();

recommendation.post('/', async (req, res, next) =>{


  const data =  {

    input_level : req.body.level,
    input_water_need : req.body.water_need,
    input_purpose : req.body.purpose,
    input_temperature : req.body.temperature,
    input_sunright : req.body.sunright,

  }

    
    try {
        const response = await axios.post('http://r-server:8000/cluster', data);
       
    
        
        if(Object.keys(response.data).length === 0){
            return res.status(404).json({message : "data not found"});
        }
        
        
        const promises = response.data.slice(0, 5).map(async (item) => {
          const id = item.content_number;
          const plant = await Plant.findOne({ where: {contentNumber : id}, include: PlantImg,
          attributes : ['contentNumber', 'selectedCount', 'plantName','lighttdemanddoCodeName_1','smellCodeName','grwhTpCodeName','waterNeed'] });
          if (plant) {
            plant.selectedCount += 1; 
            await plant.save(); 


            const imageNames = plant.plantImages ? plant.plantImages.map(img => img.imageSource) : [];
            const similarityPercentage = response.data.find(r => r.content_number === id)?.similarity_percentage;
            return {
                contentNumber: plant.contentNumber,
                selectedCount: plant.selectedCount,
                plantName: plant.plantName,
                imageSource: imageNames,
                lightDemand : plant.lighttdemanddoCodeName_1,
                smellCodeName : plant.smellCodeName,
                similarity_percentage: similarityPercentage,
                temperature : plant.grwhTpCodeName,
                water_need : plant.waterNeed,
            };


          }
          return null
        });

        const plants = await Promise.all(promises);

        const sum = await Plant.sum('selectedCount');

        return res.status(200).json({plants,  selectedCountSum: sum});


      } 
    catch(error){
        console.error(error);
        res.status(500).send('Error communicating with R server');
    }
   


});





module.exports = recommendation;