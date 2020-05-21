
var Sequelize = require('sequelize');
var path = require('path');

var sequelize = new Sequelize(undefined,undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',

  // SQLite only
  storage: path.join(__dirname, '../database/database.sqlite') 
});

var Note = sequelize.define('note', {
    text: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING //登陆的用户名
    }
  });

  //Note.sync({force:true})///如果存在就删除，如果不存在就创建
/*
  Note.sync().then(function() { 
    Note.create({text:'hello'})
   }).then(function(){
    Note.findAll().then(function(notes){
        console.log(notes)
   })
});
*/
module.exports.Note=Note;