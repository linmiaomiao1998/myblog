var express = require('express');
var router = express.Router();
var Note=require('../models/note').Note;
/* GET users listing. */
router.get('/notes', function(req, res, next) {
  Note.findAll({raw: true}).then(function(notes) {
    console.log(notes)
    res.send({status:0,data:notes})
    }).catch(function(){
      res.send({status:1,errorMsg:'数据库错误'})
  })
});

router.post('/notes/add', function(req, res, next) {
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }
  var uid=req.session.user.id;
 var note=req.body.note;
 Note.create({text:note,uid:uid}).then(function(){
   res.send({status:0})
 }).catch(function(){
   res.send({status:1,errorMsg:'数据库错误'})
 })
 console.log('add...',note)
});

router.post('/notes/edit', function(req, res, next) {
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }
  var uid=req.session.user.id;
 Note.update({text:req.body.note},{where:{id:req.body.id}}).then(function(){
   console.log(arguments)
   res.send({status:0})
 }).catch(function(){
  res.send({status:1,errorMsg:'数据库错误'})
})
});

router.post('/notes/delete', function(req, res, next) {
  if(!req.session.user){
    return res.send({status:1,errorMsg:'请先登录'})
  }

  var uid=req.session.user.id;

  Note.destroy({where:{id:req.body.id}}).then(function(){
    res.send({status:0})
    }).catch(function(){
      res.send({status:1,errorMsg:'数据库错误'})
  })
});

module.exports = router;
