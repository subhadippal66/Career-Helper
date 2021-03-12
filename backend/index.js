const express = require('express');
const app = express()
const port = 5000
const router = express.Router()
//database require


const abc=  app.listen(port, ()=>{
    console.log('server started')
})

app.use(express.json())
app.use((req,res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next()
})

app.get('/', (req, res)=>{
    res.send('Homepage')
})

app.get('/api/:type', (req, res)=>{
    const {type} = req.params;
    const path = `./database/${type}`
    const typeData = require(path)
    res.send(typeData)
})

app.get('/api/:type/:course', (req, res)=>{
    const {type, course} = req.params;
    const path = `./database/${type}/${course}`
    const courseData = require(path)
    res.send(courseData)
})

module.exports = abc