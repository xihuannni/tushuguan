var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
   
  res.render('login');
});

  router.post('/',(req,res)=>{
     let name= req.body.name;
     let password=req.body.password;
     if(req.session.user !=undefined&& name==req.session.user.name&&password==req.body.password){
       res.redirect('b'); 
     }else{
       res.send("登录失败");
     }
    });

module.exports = router;
