const express = require('express');
const router = express.Router();

// const titlecase = require('./../data/states_titlecase');

// handle incoming request to /users
router.get('/', (req, res, next) => {
    var Request = require("request");
    console.log(req.query.code);
 
 
 Request.get(`http://localhost:3101/stateToCode?state=${req.query.state}`, (error, response, body) => {
     
     console.log(response);
     if(error) {
         return console.dir(error);
     }
     
     // console.dir(JSON.parse(body));
     res.status(200).json({
         code : JSON.parse(response.body).code
     });
     });
    });

module.exports = router;