const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const router = express.Router()
const subNotAvaliable = require('./database/not_avaliable')
const topicNotAvaliable = require('./database/not_avaliable_topic')
//database require


const abc=  app.listen(process.env.PORT || 3000, ()=>{
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
    let path = null;
    try{
        path = require(`./database/${type}`)
    }
    catch{
        path = null
    }

    if(path){
        const path = `./database/${type}`
        const typeData = require(path)
        res.send(typeData)
    }else[
        res.send(subNotAvaliable)
    ]

})

app.get('/api/:type/:course', (req, res)=>{
    const {type, course} = req.params;
    let courseData = null;
    try{
        courseData = require(`./database/${type}/${course}`)
    }
    catch{
        courseData = null
    }
    
    if(courseData){
        res.send(courseData)
    }else{
        res.send(topicNotAvaliable)
    }
})

module.exports = abc