global.fetch=require('node-fetch')
const Unsplash = require('unsplash-js').default;
const toJson=require('unsplash-js').toJson
const config=require('universal-config')




const unsplash= new Unsplash({
    applicationId:config.get('APPLICATION_ID'),
    secret:config.get('SECRET'),
    callbackUrl:config.get('CALLBACK_URL')
})


const express=require('express')
const app=express()

app.get('/api/photos',(req,res)=>{
    unsplash.photos.listPhotos(req.query.start,req.query.count)
    .then(toJson)
    .then(json=>res.json(json))
})


const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server up and running on port ${PORT}`)
})