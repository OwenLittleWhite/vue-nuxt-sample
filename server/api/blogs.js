import { Router } from 'express'
import Blog from '../model/blog'
const router = Router()


/* GET Blog listing. */
router.get('/blogs', function (req, res, next) {
  // MongoDb.insertData({}).then(result => {
  //   res.json(result);
  // }).catch(err => res.sendStatus(500).send(err));
  Blog.findAll({}).then(blogs=>{
    res.send(blogs);
  }).catch(err=>{
    res.sendStatus(err.code).send(err.message);
  })

})

/* GET user by ID. */
router.post('/blogs', function (req, res, next) {
  console.log(req.body);
  console.log("**********")
  Blog.create(req.body).then(blog=>{
    res.send(blog);
  }).catch(err=>{
    res.sendStatus(err.code).send(err.message);
  })
})

export default router
