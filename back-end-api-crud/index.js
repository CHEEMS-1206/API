import express from 'express'
import bodyParser from 'body-parser'

// importing env and using env in index.js
import dotenv from 'dotenv'
dotenv.config()

// connection to database
import mongoose from 'mongoose'
mongoose
  .connect(
    process.env.DB_URL,
    {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASS,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Db connected !");
  })
  .catch((e) => {
    console.log(e);
  });

// importing routes for users from usersRoutes
import userRouter from './routes/usersRoutes.js'

const app = express()
// defining port for backend rest server
const PORT = 5000;

// parsing the json
app.use(bodyParser.json())

// all routes for user are defined here
app.use('/users',userRouter)

// get route for data to be displayed when browser calls '/'
app.get('/',(req,res)=>{
    res.send('HELLO WORLD')
})

// run the server at PORT
app.listen(PORT,()=> console.log(`server running at: http://localhost:${PORT} `))