/**
 * create by owen at 2017-10-04T10:08
 * Today is the Mid-Autumn Festival
 */

/**
 * declare model
 */
import MongoDb from '../db/db'

let Blog = function (options) {
  options = options || {};
  this.title = options.title || '';
  this.content = options.content || '';
  this.createdTime = options.createdTime || new Date();
  this.author = options.author || 'Owen';
  this.tags = options.tags || [];
};

Blog.findAll = async function (options) {
  options = options || {};
};

Blog.create = function (options) {
  options = options || {};
  createToDatabase(options)
}

// let createToDatabase = async function (options) {
//   MongoDb.
// }