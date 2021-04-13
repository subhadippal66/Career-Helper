const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const router = express.Router()
const subNotAvaliable = require('./database/not_avaliable')
const topicNotAvaliable = require('./database/not_avaliable_topic')


const abc=  app.listen(process.env.PORT || 5000, ()=>{
    console.log('server started')
})

app.use(express.json())
app.use((req,res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    res.setHeader("Access-Control-Allow-Methods", "*")
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


//Mongo database

const mongoose =require('mongoose')
const Userdata =require('./UserSchema')

mongoose.connect(process.env.DATABASE,
 {useNewUrlParser: true,useUnifiedTopology: true});

 app.use(express.json())
 app.use(express.urlencoded({extended: false}));


app.post('/user', async(req, res)=>{
     const {authtoken} = req.headers;
     if (authtoken){
        const {email, branch, experties} = req.body;
        await Userdata.create({email: email, branch: branch, experties: experties});
        res.status(201).send(req.body);
     }
     else{
        res.status(400).send('invalid credential');
     }
 })

 app.get('/user', async(req, res)=>{
     const {authtoken} = req.headers;
     if (authtoken){
         const {email} = req.headers;
         const userfound = await Userdata.findOne({email : email})
         res.send(userfound)
     }else{
         res.status(400).send('forbidden')
     }
 })

 app.put('/user', async(req, res)=>{
     const {authtoken} = req.headers;
     if (authtoken){
         const updateddata = {
            branch: req.body.branch, 
            experties: req.body.experties
         }
         const {email} = req.headers;
         const query = {email : email}
         const userfound = await Userdata.findOneAndUpdate(query, updateddata);
         res.send('success')
     }else{
         res.status(400).send('forbidden')
     }
 })