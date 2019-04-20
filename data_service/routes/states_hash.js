const express = require('express');
const router = express.Router();

const hash = require('./../data/states_hash');

// handle incoming request to /users
router.get('/', (req, res, next) => {
    console.log(req.query.code);
    // console.log();
    // var obj = JSON.parse(hash);
    // var state = hash[req.query.code]


    res.status(200).json({
       state: hash[req.query.code]
    //    {
    //        "state":state
    //    }
    });
});


module.exports = router;