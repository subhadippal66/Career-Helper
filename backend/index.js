const express = require('express');
const app = express()
const port = 5000
const router = express.Router()
//database require
const coding = require('./database/coding')
const civil = require('./database/civil')
const cpp = require('./database/cpp')


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
    res.send(coding)
})

module.exports = abc