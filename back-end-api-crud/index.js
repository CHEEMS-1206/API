import express from 'express'
import bodyParser from 'body-parser'

const app = express()
// defining port for backend rest server
const PORT = 5000;

// parsing the json
app.use(bodyParser.json())

// get route for data to be displayed when browser calls '/'
app.get('/',(req,res)=>{
    res.send('HELLO WORLD')
})

// run the server at PORT
app.listen(PORT,()=> console.log(`server running at: http://localhost:${PORT} `))