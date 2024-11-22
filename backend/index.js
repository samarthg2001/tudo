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
<<<<<<< HEAD
app.use(cors())
=======
const allowedOrigins = ["http://localhost:5173" , "https://tudo-veoe.vercel.app"]
//cors config
const corsOption = {
    origin:(origin , callback)=>{
        if(!origin || allowedOrigins.includes(origin)){
            callback(null ,true);
        }
        else{
            console.log("blocked by cors: " , origin);
            callback(new Error("not allowed by cors"));
        }
    },
    // credentials:true,
    // optionsSuccessStatus: 200 
}
app.use(cors(corsOption));
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
Dbconnection()
app.listen(port||process.env.PORT
    ,()=>{
        console.log(`${port},the port is listing on ${process.env.PORT}`);

})




<<<<<<< HEAD
app.use('/api',Router)
=======
app.use('/api',Router)
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
