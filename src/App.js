import logo from './logo.svg';
import './App.css';
 import Navbar from './Components/Navbar';
 import Form from './Components/Form';
 import React, { useState } from 'react'
 

function App() {

  const  [mode, setMode] = useState("dark")

  const toggleMode = () =>{


    
     if( mode === "light"){
       setMode("dark");}
       else{
         setMode("light");
       
     }
  }
  return (
   <div>
    
   
<Navbar tittle="TextUtils" About="About Us" mode ={mode} togglemode={toggleMode}/>
   
   <div className='container my-3'>
   <Form headings="You Can Write Some Text"  />
   </div>
  
   </div>
  )
}

export default App;
