import express from 'express'

const router = express.Router()

// // Read user request
// // method type : GET 
// // API URL : http://localhost:8000/user/read
// router.get('/read', (req, res) => {
//   res.json({message: "fetch all the user", success: true})
// })

// // add user request
// // method TYPE : POST 
// // API URL : http://localhost:8000/user/add
// router.post('/add', (req, res) => {

//   res.json({message: "Add a user", success: true})
// })

// // delete user request
// // method type : DELETE 
// // API URL : http://localhost:8000/user/delete
// router.delete('/delete', (req, res) => {
//   res.json({message: "delete a user", success: true})
  
// })

// // update user request
// // method PUT 
// // API URL : http://localhost:8000/user/update
// router.put('/update', (req, res) => {
//   res.json({message: "update a user", success: true})
  
// })

//----------------------------URL is same for all api but method is different-----------------------------------

// Read user request
// method type : GET 
// API URL : http://localhost:8000/user/
router.get('/', (req, res) => {
  res.json({message: "fetch all the user", success: true})
})

// add user request
// method TYPE : POST 
// API URL : http://localhost:8000/user/
router.post('/', (req, res) => {

  res.json({message: "Add a user", success: true})
})

// delete user request
// method type : DELETE 
// API URL : http://localhost:8000/user/
router.delete('/', (req, res) => {
  res.json({message: "delete a user", success: true})
  
})

// update user request
// method PUT 
// API URL : http://localhost:8000/user/
router.put('/', (req, res) => {
  res.json({message: "update a user", success: true})
  
})

export default router