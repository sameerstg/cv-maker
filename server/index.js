const express = require('express');
const cors= require('cors');
const app = express();
app.use(cors(

{

    origin:['http://localhost:3000/']
}

));
app.use(express.json())

console.log("listening to 8000");
app.listen('8000')