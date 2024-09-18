import express from 'express'

let router = express.Router()

router.get('/read', (req, res) => {
 res.send('user read request')
})

router.post('/add', (req, res) => {
  return res.json({message: "new user", success: true})
})

export default router