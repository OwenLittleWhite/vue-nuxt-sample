/**
 * create by owen at 2017-10-04T10:08
 * Today is the Mid-Autumn Festival
 */

/**
 * declare model
 */
const MongoDb = require('../db/db');

let Blog = function (options) {
  options = options || {};
  this.title = options.title || '';
  this.content = options.content || '';
  this.createdTime = options.createdTime || new Date();
  this.author = options.author || 'Owen';
  this.tags = options.tags || [];
};

Blog.findAll = function (options) {
  options = options || {};
  return findConditionsFromDb(options);
};

Blog.create = function (options) {
  options = options || {};
  let blog = new Blog(options);
  return createToDatabase(blog);
}

let findConditionsFromDb = function (conditions) {
  return MongoDb.findByConditions(conditions);
}

let createToDatabase = function (blog) {
  return new Promise(function (resolve, reject) {
    MongoDb.insertData(blog).then(blogs => {
      resolve(blogs[0]);
    }).catch(err => { reject(err) });
  })

}
module.exports = Blog;