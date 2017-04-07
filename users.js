/**
 * Created by hasiru on 4/6/17.
 */

const express = require('express');
const router = express.Router();

router.get("",function(req,res){
    res.send("hello world users");
});

module.exports = router;