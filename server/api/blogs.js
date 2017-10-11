import { Router } from 'express'
import Blog from '../model/blog'
const router = Router()


/* GET Blogs listing. */
router.get('/blogs', function (req, res, next) {
  Blog.findAll({}).then(blogs => {
    res.send(blogs);
  }).catch(err => {
    res.sendStatus(err.code).send(err.message);
  })

})

/* Create a blog */
router.post('/blogs', function (req, res, next) {
  Blog.create(req.body).then(blog => {
    res.send(blog);
  }).catch(err => {
    res.sendStatus(err.code).send(err.message);
  })
})

export default router
