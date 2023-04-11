import express from "express";
import bodyParser from "body-parser";

// importing database code and rendering for database 
import './config/db.js';

// importing routes for users from usersRoutes
import userRouter from "./routes/api/usersRoutes.js";

const app = express();
// defining port for backend rest server
const PORT = 5000;

// parsing the json
app.use(bodyParser.json());

// all routes for user are defined here
app.use("/users", userRouter);

// get route for data to be displayed when browser calls '/'
app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

// run the server at PORT
app.listen(PORT, () =>
  console.log(`server running at: http://localhost:${PORT} `)
);
