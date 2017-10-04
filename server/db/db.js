var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/personal_blog';
var MongoDb = {};
MongoDb.insertData = function (options) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(DB_CONN_STR).then(db => {
      var collection = db.collection('blogs');
      var data = [{ "name": "菜鸟教程", "url": "www.runoob.com" }, { "name": "菜鸟工具", "url": "c.runoob.com" }];
      collection.insert(data).then(result => { resolve(result); db.close(); }).catch(err => { throw err })
    }).catch(err => { reject(err) })

  })
}
var insertData = function (db, callback) {
  var collection = db.collection('blogs');
  //插入数据
  var data = [{ "name": "菜鸟教程", "url": "www.runoob.com" }, { "name": "菜鸟工具", "url": "c.runoob.com" }];
  collection.insert(data, function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
}

MongoClient.connect(DB_CONN_STR, function (err, db) {
  if (err) {
    console.log(err);
  }
  else {
    db = db;
  }
});
module.exports = MongoDb;