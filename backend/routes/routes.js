import express from 'express'
const Router=express();
import { signIn,fetchbyId,create, fetchbyemail,fetchAllData} from '../controller/userControllers.js';
import { addTask ,updateTask,deleteTask,taskProcess} from '../controller/listCounterller.js';

try {
    Router.post('/register',create)
    Router.post('/signIn',signIn)
    Router.get('/fetchbyID/:id',fetchbyId)  
    Router.post('/addTask',addTask)
    Router.put('/updateTask/:id',updateTask)
    Router.put('/taskProcess/:id',taskProcess)
    Router.delete('/deleteTask/:id',deleteTask)

    // Added 'fetchbyemail' endpoint to retrieve user data by email.
    Router.get('/fetchbyemail',fetchbyemail)
    // - Added 'fetchAllData' endpoint to retrieve all user data.
    Router.get('/fetchAll',fetchAllData)


} catch (error) {
    console.log(error);
}

export default Router;