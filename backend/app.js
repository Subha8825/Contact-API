const express=require('express')
const app=express();
const dotenv=require('dotenv')
const path=require('path');
const connectDataBase = require('./config/connectDataBase');
dotenv.config({path:path.join(__dirname,'config','config.env')})

connectDataBase()

const contact=require('./router/contactRouter')

app.use(express.json())
app.use('/api/',contact)

app.listen(process.env.PORT,()=>{
    console.log(`Server Running at port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})