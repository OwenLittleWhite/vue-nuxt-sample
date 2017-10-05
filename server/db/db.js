var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/personal_blog';
var MongoDb = {};

MongoDb.insertData =function (blog) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(DB_CONN_STR).then(db => {
      var collection = db.collection('blogs');
      var data = [];
      data.push(blog);
      collection.insert(data).then(result => { resolve(result.ops); db.close(); }).catch(err => { throw err })
    }).catch(err => { reject(err) })

  })
}

MongoDb.findByConditions = function(conditions){
  return new Promise(function(resolve,reject){
    MongoClient.connect(DB_CONN_STR).then(db => {
      let collection = db.collection('blogs');
     resolve(collection.find(conditions).toArray());
     db.close();
    }).catch(err => { reject(err) })

  })
}



module.exports = MongoDb;