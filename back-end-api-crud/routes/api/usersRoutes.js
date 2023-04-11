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

// get request
// to display when the /users is hit
router.get('/', userController.index)
// to display when the /users/listAll
router.get("/list", userController.listAll);

export default router;