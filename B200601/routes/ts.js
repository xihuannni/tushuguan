var express = require('express');
var router = express.Router();
var data=new Array();
var mysql=require('mysql'); 
  let connection=mysql.createConnection({
          user:"root",
          password:"123456",
          database:"01"
      });
/* GET home page. */
router.get('/', function(req, res) {
  connection.query("select *from book",function(err,a,fields){
    if (err!= null){ 
      console.log(err);
    }else{
      data=a;
    }
 res.render('xm',{detail:data});
  })
});


//删除 
router.get('/delete/:id',(req,res)=>{
  connection.query("delete from book where id =?",[req.params.id],function(err,a,fields){
    res.redirect('/');
  })
})

//查询
router.post('/',(req,res)=>{
  connection.query("select * from book where 书名=? or 作者=?",[req.body.书名,req.body.作者],function(err,a,fields){
    res.render('xm',{detail:a})
  })
})
module.exports = router;