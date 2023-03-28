import express from 'express'
import bodyParser from 'body-parser'

// define router
const router = express.Router()

// dummy database
const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
  },
];

// get request
router.get('/', (req,res)=>{
    res.send(users)
})

export default router;