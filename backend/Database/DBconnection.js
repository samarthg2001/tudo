import mongoose from "mongoose";
import dotenv from 'dotenv'
const DBname='tudo'
dotenv.config({
    path:'/.env'
})
const Dbconnection= async ()=>{
try {
    console.log(`DataBase connecting`);
    const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}`)
    // console.log(connectionInstance);
    console.log("Database is connected");

} catch (error) {
    console.log("Data base connection error",error)
}



}
export default Dbconnection;