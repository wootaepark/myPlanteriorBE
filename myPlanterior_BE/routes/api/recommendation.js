const express = require('express');
const Plant = require('../../models/plantDetail');
const {Op} = require('sequelize');

const recommendation = express.Router();

recommendation.get('/', async (req, res, next) =>{

    
    try{
        const data = [];
        

        // 1. 난이도 분류
        const difficulty = req.body.난이도;
        const plantForm = []; // 식물 형태
        plantForm.push(req.body.식물형태);
        
        const tmp = await Plant.findAll({
            where : {
                managelevelCodeName : {
                     [Op.like] : difficulty,
                },
                clCodeName_1: {
                    [Op.in]: plantForm // 배열로 변환하여 사용
                }

               
            }
        });

        return res.json(tmp);





        const leafShape = []; // 잎 모양
        const leafColor = []; // 잎 색깔
        const prefferColor = []; // 좋아하는 색깔
        const waterCycle = req.body.물주기;
        plantForm.push(req.body.식물형태);
        leafShape.push(req.body.잎모양);
        const spaceSize = req.body.공간크기;
        leafColor.push(req.body.잎색깔);
        const scent = req.body.향기;
        prefferColor.push(req.body.좋아하는색깔);
        const place = req.body.초록초록한장소;
        const sunlightAmount = req.body.햇빛양;
        const spaceTemp = req.body.공간온도;
        const plantEffect = req.body.식물효과;




        console.log(difficulty);
        console.log(waterCycle);
        console.log(plantForm);
        console.log(leafShape);
        console.log(leafColor);
        console.log(spaceSize);
        console.log(scent);
        console.log(prefferColor);
        console.log(place);
        console.log(sunlightAmount);
        console.log(spaceTemp);
        console.log(plantEffect);


        






    return  res.status(200).json(req.body);
    
    }
    catch(error){
        console.error(error); 
        return res.status(500).json('Internal Server Error');
    }
   


});





module.exports = recommendation;