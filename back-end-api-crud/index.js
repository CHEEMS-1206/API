import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'

// importing database code and rendering for database 
import './config/db.js';

// importing routes for users from usersRoutes
import userRouter from "./routes/api/usersRoutes.js";

const app = express();

// parsing the json
app.use(bodyParser.json());

//MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// all routes for user are defined here
app.use("/users", userRouter);


// get route for data to be displayed when browser calls '/'
app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

// defining port for backend rest server
const PORT = 5000;

// run the server at PORT
app.listen(PORT, () =>
  console.log(`server running at: http://localhost:${PORT} `)
);
