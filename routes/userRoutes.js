const express = require('express')
const {getAllUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/userController')

const router = express.Router()

router.param(`id`, (req,res,next,value)=>{
  console.log(`ID: ${value}`)
  next()
})

router.route(`/`).get(getAllUsers).post(createUser)
router.route(`/:id`).get(getUser).patch(updateUser).delete(deleteUser)

module.exports = router