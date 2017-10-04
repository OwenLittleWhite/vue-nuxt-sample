import { Router } from 'express'
import MongoDb from '../db/db'
const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]
router.all('/',function(req,res){
  console.log(req);
})
/* GET users listing. */
router.get('/users', function (req, res, next) {
  MongoDb.insertData({}).then(result => {
    res.json(result);
  }).catch(err => res.sendStatus(500).send(err));

})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
