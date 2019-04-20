const express = require('express');
const router = express.Router();

const titlecase = require('./../data/states_titlecase');

// handle incoming request to /users
router.get('/', (req, res, next) => {
    console.log(req.query.state);
    var code;
    for(var i =0 ; i<titlecase.length;i++){
        
        if(titlecase[i].name==req.query.state){
            code=titlecase[i].abbreviation
            break

        }
    }
    res.status(200).json({
        code: code
    });
});


module.exports = router;