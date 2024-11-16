import express from 'express'
import dotenv from 'dotenv'
import Dbconnection from './Database/DBconnection.js'
dotenv.config({
    Path:'/.env'
})
import  Router  from './routes/routes.js'
import cors from 'cors'

const port=8000
const app=express()
app.use(express.json())
app.use(cors())
Dbconnection()
app.listen(port||process.env.PORT
    ,()=>{
        console.log(`${port},the port is listing on ${process.env.PORT}`);

})




app.use('/api',Router)