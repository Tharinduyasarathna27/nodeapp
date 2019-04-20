const express = require('express');
const router = express.Router();

 const hash = null ;
// handle incoming request to /users
router.get('/', (req, res, next) => {
    var Request = require("request");
   console.log(req.query.code);


Request.get(`http://localhost:3101/codeToState?code=${req.query.code}`, (error, response, body) => {
    
    // console.log(response);
    if(error) {
        return console.dir(error);
    }
    
    // console.dir(JSON.parse(body));
    res.status(200).json({
        state : JSON.parse(response.body).state
    });
    });
    
});



module.exports = router;