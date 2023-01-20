import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './home';
import AboutUs from "./aboutUs"
import { Route,Routes,Link} from 'react-router-dom'


function App() {

  const [comments,setComments] = useState([])
  const [render,setRender] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:4000/')
    .then((response) => response.json())
    .then((data) => setComments(data));
  },[render])
  

  return (
    <div className='main'>
      <div className='header'>
        <Link className='link' to="/">Home</Link>
        <Link className="link" to="/aboutUs">About Us</Link>
      </div>
      <div className="App">
        <Routes>
            <Route exact path="/" element={<Home  comments= {comments} setComments= {setComments} setRender= {setRender}/>} />
            <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
   
  );
}



export default App;
