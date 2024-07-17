const express = require('express');
const Plant = require('../../models/plantDetail');
const e = require('express');

const recommandation = express.Router();

recommandation.get('/', async (req, res, next) =>{

    try{
    const number = req.query.contentNumber;
    const data = await Plant.findOne({
        where : {
            contentNumber : number,
        }
    });
        if(!data){
            console.error('해당 데이터는 없습니다.');
            return res.status(404).json('dataNotFound');
        }
        else{
            console.log('식물 상세 데이터 불러오기 완료');
            return res.status(200).json(data);
        }
    
    }
    catch(error){
        console.error(error); 
        return res.status(500).json('Internal Server Error');
    }
   


});





module.exports = recommandation;