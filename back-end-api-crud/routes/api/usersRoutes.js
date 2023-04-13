import express from 'express'
import bodyParser from 'body-parser'
import * as userController from '../../controllers/users.js'

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

// route for hitting /users
router.get('/',userController.home);

// CRUD 
//Create new users 
router.post('/',userController.createUser);

//Read users
//Read all users
router.get("/list", userController.listAll);
//Read single user
router.get('/:id', userController.getUser);

//Update user
router.patch('/:id',userController.updateUser);

export default router;