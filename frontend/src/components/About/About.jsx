import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>    
  <div className='about'>
     <h1>About Me</h1> 
     <h2>Project: Tudo App</h2>
      <h3>Overview</h3>
       <p>The Tudo App is a comprehensive task management application designed to help users efficiently track their tasks.</p>
        <div className='techstack'>        <h3>Tech Stack</h3> 
        <ul className='language'>  <li>HTML</li> 
        <li>CSS</li> 
        <li>JavaScript</li>
         <li>React</li>
          <li>MongoDB</li>
           <li>Express</li>
            <li>Node.js</li>
             </ul>  </div>

             <h3>Libraries Used</h3>
              <ul> <li><b>React Icons:</b> For elegant and versatile icons.</li> 
              <li><b> Nodemon:</b> For efficient server-side development.</li>
               <li><b> React Toastify</b>: For beautiful toast notifications.</li> 
               <li><b> Axios:</b> For making HTTP requests.</li>
                <li><b> Redux:</b> For state management, utilizing hooks like <code>useDispatch</code> and <code>useSelector</code>.</li> 
                <li><b>React Router:</b> For navigation, using hooks like <code>useNavigate</code> and <code>useLocation</code>.
                </li> </ul>
                 <h3>Features</h3>
                  <ul> 
                    <li><b>Log In: </b> Secure user authentication to access personalized task management.</li>
                     <li><b>Update Tasks:</b> Easily update your tasks with the latest changes.</li>
                      <li><b>Complete Tasks: </b> Mark tasks as complete to stay on top of your to-do list.</li>
                       <li><b>Save Tasks: </b> Save your tasks for future reference and  oraganization</li>
                       </ul>
                      </div>
    </>

  )
}

export default About
