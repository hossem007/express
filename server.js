const express = require('express');
const members = require('./members');
const app = express();
const PORT = process.env.PORT||5000;

app.listen(PORT,err=>err?console.error(err):console.log(`Server running on port ${PORT}...`))

const logger = (req,res,next)=>{
    console.log('<h1>hello</h1>')
    next()
}

// app.get("/",logger,(req,res)=>{
//     res.send('<h1>hello world</h1>')
// })


app.get("/members",(req,res)=>{
    res.send(members)
})

//app.use(express.static('public'))