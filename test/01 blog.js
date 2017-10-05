const assert = require('assert');
const Blog = require('../server/model/blog');
describe('Blog', function () {


    // it('Blog create', function (done) {
    //   Blog.create({ title: 'test' })
    //     .then(data => {
    //       //console.log(data);
    //       done();
    //     }).catch(err => {
    //      // console.log(err);
    //       done();
    //     })
    // });

    it('Blog find', function (done) {
      Blog.findAll({})
        .then(data => {
          console.log(data);
          done();
        }).catch(err => {
          console.log(err);
          done();
        })
    });

});