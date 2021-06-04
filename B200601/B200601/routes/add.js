var express = require('express');
var router = express.Router();
var mysql=require('mysql'); 
  let connection=mysql.createConnection({
          user:"root",
          password:"123456",
          database:"01"
      });
/* GET home page. */
router.get('/', function(req, res) {
  res.render('add'); 
});

router.post('/',(req,res)=>{
        connection.query("INSERT INTO book(id,书名,作者,出版社,价格) VALUES(?,?,?,?,?)",[req.body.id,req.body.书名,req.body.作者,req.body.出版社,req.body.价格],function(err,b,fields){
               res.redirect('/'); 
            });
    });
module.exports = router;
