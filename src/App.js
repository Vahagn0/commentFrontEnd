import AddForm from './AddForm';
import './App.css';
import CommentList from './commentList';
import React, { useEffect, useState } from 'react';

function App() {

  const [comments,setComments] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:4000/')
    .then((response) => response.json())
    .then((data) => setComments(data));
  },[])
  

  return (
    <div className="App">
      <AddForm comments = {comments} setComments = {setComments} />
      <CommentList comments={comments} setComments = {setComments}/>
    </div>
  );
}

export default App;
