import express from 'express'
const Router=express();
import { signIn,fetchbyId,create, fetchbyemail,fetchAllData} from '../controller/userControllers.js';
<<<<<<< HEAD
import { addTask ,updateTask,deleteTask,taskProcess} from '../controller/listCounterller.js';
=======
import { addTask ,updateTask,deleteTask} from '../controller/listCounterller.js';
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11

try {
    Router.post('/register',create)
    Router.post('/signIn',signIn)
    Router.get('/fetchbyID/:id',fetchbyId)  
<<<<<<< HEAD
    Router.post('/addTask',addTask)
    Router.put('/updateTask/:id',updateTask)
    Router.put('/taskProcess/:id',taskProcess)
=======
      Router.post('/addTask',addTask)
    Router.put('/updateTask/:id',updateTask)
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
    Router.delete('/deleteTask/:id',deleteTask)

    // Added 'fetchbyemail' endpoint to retrieve user data by email.
    Router.get('/fetchbyemail',fetchbyemail)
    // - Added 'fetchAllData' endpoint to retrieve all user data.
    Router.get('/fetchAll',fetchAllData)


} catch (error) {
    console.log(error);
}

export default Router;