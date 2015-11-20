/**
 * Created by Thomas on 11/19/15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.send(req.user);
});

module.exports = router;