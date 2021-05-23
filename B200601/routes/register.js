var express = require('express');
var router = express.Router();
var User=require('./bean/user');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('register');
});

router.post('/',(req,res)=>{
    let user= new User(req.body.name,req.body.password);
    req.session.user=user; 
    res.send("注册成功"); 
    });
module.exports = router;
