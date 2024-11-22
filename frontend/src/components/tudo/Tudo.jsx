import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TudoCard from './TudoCard';
import { GrUpdate } from 'react-icons/gr';
import { FaRegWindowClose } from 'react-icons/fa';
<<<<<<< HEAD
import './tudoCard.css';
import './UPdate.css';
=======
import './TudoCard.css';
import './Update.css';
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
import { useDispatch, useSelector } from 'react-redux';


let tobeupadeArray = {};
let sessoionId = sessionStorage.getItem('id');


const Tudo = () => {
  const dispath=useDispatch();
<<<<<<< HEAD
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIN);
  // const [taskprocess,settaskprocess]=useState(false)
=======
  console.log(dispath);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIN);
    const [activeIndex,setactiveIndex]=useState(null)
console.log(isLoggedIn);
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
  const [state,setstate]=useState(false)
  const [input, setinput] = useState({ title: '', body: '' });
  const [Array, setArray] = useState([]);
  const [updateData, setupdateData] = useState({ title: '', body: '', _id: '' });
<<<<<<< HEAD
  
  const completetask = async (cardid) => {
    // settaskprocess((prevestate)=>!prevestate)
    if(!sessoionId){
      toast.error("sign in to complete ")
    }
    try {
         const { taskCompleted, _id } = Array[cardid];
          const newtaskcompleted=!taskCompleted;
         //  console.log(taskprocess,_id);
        //  settaskprocess(taskCompleted)
        //  console.log(taskprocess);
        //  settaskprocess((prevestate)=>!prevestate)
        //  console.log(taskprocess);
         await axios.put(`http://localhost:8000/api/taskProcess/${_id}`, {
        taskCompleted:newtaskcompleted,
      });
      // Update the task in the state after successful update
      setArray((prevArray) =>
        prevArray.map((task) =>
          task._id === _id ? { ...task, taskCompleted: Array.taskprocess } : task
        )
      );
      setstate((prestate)=>!prestate)
    } catch (error) {
      console.log(error);
    }
  };

  
=======
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
  const updateTask = async () => {
    if(!sessoionId){
      toast.error("sign in to update")
    }
    try {
         const { title, body, _id } = updateData;
<<<<<<< HEAD
         await axios.put(`http://localhost:8000/api/updateTask/${_id}`, {
=======
         await axios.put(`https://tudo-gules.vercel.app/?vercelToolbarCode=XZb3AFJLvOVE8lY/api/updateTask/${_id}`, {
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
        title: title,
        body: body,
      });
      // Update the task in the state after successful update
      setArray((prevArray) =>
        prevArray.map((task) =>
          task._id === _id ? { ...task, title: updateData.title, body: updateData.body } : task
        )
      );
      closeUpdateBox()
    } catch (error) {
      console.log(error);
    }
  };

  const change = (e) => {
    const { name, value } = e.target;
    setinput({ ...input, [name]: value });
  };

  const submit = async () => {
    if (input.title === '' || input.body === '') {
      if (input.title === '' && input.body === '') {
        toast.error('Please enter the task');
      } else if (input.title === '') {
        toast.error('Please enter the title');
      } else {
        toast.error('Please enter the content');
      }
    } else {
              {
      if (isLoggedIn) {
        await axios
<<<<<<< HEAD
          .post('http://localhost:8000/api/addTask', { title: input.title, body: input.body, id: sessoionId })
=======
          .post('https://tudo-gules.vercel.app/?vercelToolbarCode=XZb3AFJLvOVE8lY/api/addTask', { title: input.title, body: input.body, id: sessoionId })
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
          .then((res) => {
            console.log('this is addTask function',res);
          })
          .catch((err) => {
            console.log(err);
          });
        
          setstate((prestate)=>!prestate)
        setinput({ title: '', body: '' });
        toast.success('Your task is added', { autoClose: 1000 });
      } else {
        setArray((preArray) => [...preArray, input]);
        setinput({ title: '', body: '' });
        toast.success('Your task is added', { autoClose: 1000 });
        toast.error('Your task is not saved! Please sign in.', { autoClose: 1500 });
      }
    }
  }
};

  const del = async (cardid,nonuserID) => {
    if (sessoionId) {
      try {
<<<<<<< HEAD
       await axios.delete(`http://localhost:8000/api/deleteTask/${cardid}`);
=======
       await axios.delete(`https://tudo-gules.vercel.app/?vercelToolbarCode=XZb3AFJLvOVE8lY/api/deleteTask/${cardid}`);
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
        toast.success('Task is deleted');
        setstate((prestate)=>!prestate)

      } catch (error) {
        console.log(error);
      }
    } else {
      // delete code for sign up user 
      
      const deltedTask = Array.filter((_, i) => i !==nonuserID);
      toast.success('Task is deleted but not saved!');
      setArray(deltedTask);
      setstate((prestate)=>!prestate)

    }
  };

  const show = () => {
    const textareaBlock = document.getElementById('text-area');
    textareaBlock.style.display = 'inline';
  };

  const displayUpdateBox = (indiualBoxid) => {
    const updatebox = document.getElementById('tudo-update');
    tobeupadeArray = Array[indiualBoxid];
    setupdateData({ title: tobeupadeArray.title, body: tobeupadeArray.body, _id: tobeupadeArray._id });
    updatebox.style.display = 'block';
  };

  const closeUpdateBox = () => {
    const updatebox = document.getElementById('tudo-update');
    updatebox.style.display = 'none';
  };

  const onUpdateChange = (e) => {
    const { name, value } = e.target;
    setupdateData({ ...updateData, [name]: value });
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        if(isLoggedIn){
<<<<<<< HEAD
        const res = await axios.get(`http://localhost:8000/api/fetchbyID/${sessoionId}`);
=======
        const res = await axios.get(`https://tudo-gules.vercel.app/?vercelToolbarCode=XZb3AFJLvOVE8lY/api/fetchbyID/${sessoionId}`);
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
        res.data ? setArray(res.data):[]
        // setArray((res.data)?res.data:[]);
          }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [ isLoggedIn,state,]); // Trigger on dependency changes
<<<<<<< HEAD

  console.log(Array);
=======
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
  return (
    <>
      <div className='tudo'>
        <ToastContainer />
        <div className='filed'>
          <input
            type='text'
            className='input-filed'
            placeholder='title'
            onClick={show}
            name='title'
            value={input.title}
            onChange={change}
          />
        </div>
        <div>
          <textarea
            onChange={change}
            name='body'
            value={input.body}
            placeholder='content'
            id='text-area'
            cols='30'
            rows='10'
          ></textarea>
        </div>
        <div className='tudo-btn'>
          <button id='t-btn' onClick={submit}>
            Add
          </button>
        </div>
      </div>
    <br />
      <div className='tudo-body'>
        <div className='container'>
          <br />
        { Array && Array.length > 0 ? (
      Array.map((ele, index) => (
        <div key={index} className='child'>
          <TudoCard 
            title={ele.title} 
            body={ele.body} 
            id={ele._id} 
            delid={del} 
            fn={displayUpdateBox} 
            updateId={index} 
<<<<<<< HEAD
            taskcompletion={completetask}
            taskstate={ele.taskCompleted}
=======
>>>>>>> 9ec1bb28dfce934c0c05c70907f384f83f8a1f11
          />
        </div>
      ))
    ) : (
      <p>No data available. Add some items to see them here!</p>
    )}


        </div>
      </div>

      <div className='tudo-update' id='tudo-update'>
        <div className='main-update'>
          <div className='update-tudo'>
            <h1>Update your task</h1>
            <input
              type='text'
              id='title'
              name='title'
              value={updateData.title}
              onChange={onUpdateChange}
            />
            <textarea
              name='body'
              id='body'
              cols='70'
              rows='10'
              style={{ fontSize: '1.5em', border: 'none', maxWidth: '80%', borderRadius: '10px' }}
              value={updateData.body}
              onChange={onUpdateChange}
            /> 
            <div className='update-btn'>
              <button id='update' onClick={updateTask}>
                Update <GrUpdate />
              </button>
              <button id='close' onClick={closeUpdateBox}>
                Close <FaRegWindowClose />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tudo;
