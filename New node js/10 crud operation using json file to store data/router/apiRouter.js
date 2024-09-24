import express from 'express'
import fs from 'fs'


let router = express.Router()

router.get('/read', async (req, res) => {
  let employee  = await getemployee()
res.json(employee)
})


// verify employee if employee is not exist then we create a new employee

router.post('/add', async (req, res) => {
  let employeeData = await addEmployee()
  let {name, email, id} = req.body

  let isPresent = employeeData.some((employee)=> employee.name === name)

  if(isPresent){
    res.status(400).json({message: "User name is alrady present", success: false,})
  }
  else{
    employeeData.push({id, name, email})
  }


  fs.writeFile('data.json', JSON.stringify(employeeData), err => {
    if (err) {
      res.status(500).json({message: `Error occured${err}`,success: false })
    }
    else if(isPresent){
      res.status(400).json({message: "User name is alrady present", success: false,})
    }
    else{
      res.status(200).json({message: "file write successFully", success: true, data: employeeData})
    }
  })
 
})

// update employee router
router.put('/update/:id', async (req, res) => {
 let employees = await getemployee()
let id = req.params.id
 let {name, email,} = req.body

 let employeeIndex = employees.findIndex(employee => employee.id === id)
 if(employeeIndex === -1) {
  res.status(401).json({message: "Wrong id", success: false})
 }
 else{
  employees[employeeIndex] = {...employees[employeeIndex], name, email}
 }

 fs.writeFile('data.json', JSON.stringify(employees), err => {
  if(err) {
    res.status(500).json({message: `"some error occoured when writing the file : " ${err}`, success: false})
  }
  else{
    res.status(200).json({message: "data updated success fully", success: true, updatedData : employees})
  }
})
})

// delete employee router
router.delete('/delete/:id', async (req, res) => {
  let employees = await getemployee()
  let id = req.params.id
  let filteredemps = employees.filter((emp)=> {
    return emp.id != id
  })

  fs.writeFile('data.json', JSON.stringify(filteredemps), err => {
    if (err) {
      res.status(500).json({ message: `Error occured${err}`, success: false })
    }
    else{
      
      res.status(200).json({ message: "employee deleted successfully", success: true, data: employees})
    }
  })
})


// getemployee 
let getemployee = ()=>{
  let data  = fs.readFileSync('data.json', 'utf-8')
  return JSON.parse(data)
}

// add employee 
let addEmployee = () => {
  let empdata = fs.readFileSync('data.json', 'utf-8')
  console.log(empdata)
  return JSON.parse(empdata)
}


export default router