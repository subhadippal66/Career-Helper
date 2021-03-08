const express = require('express');
const app = express()
const port = 5000
const router = express.Router()
//database require
const coding = require('./database/coding')
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

console.log(coding)
app.get('/api/:type', (req, res)=>{
    // const {type} = req.params;
    console.log(coding)
    res.send(coding)
})

module.exports = abc