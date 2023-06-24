import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './custom-css/styles.css';

import Greeting from'./sample.js';


var fname="Marc";
var lname="Silva";
var num="03";
var world="World";
const currentDate = new Date(); 
var picture= "https://images.unsplash.com/photo-1583927136633-7ecde5b23ac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWdnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"



function Asd(){
  return <h1>This is Header</h1>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>

    <Asd />

    <Greeting/>

    <h1 className="heading">Hello {world}   </h1>

    <h1 style={{color:'blue'}}>Hello {fname+" "+lname}  </h1>

    <h1>Your lucky number is: {`${num}`}  </h1>

    <h1 id='target'>Sandwich Recipe</h1>

    <ul>
      <li>ham</li>
      <img className='img' src="https://images.unsplash.com/photo-1609604820237-4cd9638aa43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="ham"></img>

      <li>bacon</li>
      <img className='img' src="https://images.unsplash.com/photo-1608039790184-f07ea2dce481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="bacon"></img>

      <li>egg</li>
      <img className='img' src={picture} alt='egg'/>
    </ul>
    <h1>Created By: {fname} {lname}</h1>
    <h1>Copyright {currentDate.getFullYear()}  </h1>


  
  </div>
  
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


reportWebVitals();
