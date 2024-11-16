import express from 'express'
const Router=express();
import { signIn,fetchbyId,create, fetchbyemail,fetchAllData} from '../controller/userControllers.js';
import { addTask ,updateTask,deleteTask} from '../controller/listCounterller.js';

try {
    Router.post('/register',create)
    Router.post('/signIn',signIn)
    Router.get('/fetchbyID/:id',fetchbyId)
    Router.get('/fetchbyemail',fetchbyemail)
    Router.get('/fetchAll',fetchAllData)
    Router.post('/addTask',addTask)
    Router.put('/updateTask/:id',updateTask)
    Router.delete('/deleteTask/:id',deleteTask)

} catch (error) {
    console.log(error);
}

export default Router;