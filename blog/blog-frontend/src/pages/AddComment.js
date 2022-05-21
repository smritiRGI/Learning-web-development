import React, {useState} from 'react';
import axios from '../axios';
import './AddComment.css';

function AddComment({name , comments , setComments}) {
  const [comment, setText] = useState('');
  const [Name,setUserName] = useState('');
  
  const addComment = async () =>{
     const request = axios.post(`/${name}/comments`,{
         userName:Name , 
         text:comment
     });
     setComments((await request).data.comments);
     setUserName('');
     setText('');
  }

  return (
      <>
        {comments?.length>0 ? comments.map((comment)=>(
        <>
        <p>User: {comment.userName}</p>
        <p>Comment: {comment.text}</p>
        <hr/>
        </>
        )) : <></>}
        <h3>Add a Comment:</h3>
        <input type="text" id="username" value={Name} onChange={(e)=>setUserName(e.target.value)} placeholder='Add your Name' />
        <br/>
        <textarea rows={4}  id="comment" columns={50} value={comment} onChange={(e)=>setText(e.target.value)} placeholder='Add your comment'/>
        <br/>
        <button id="addComment" onClick={addComment}>Add Comment</button>
      </>
  )
}

export default AddComment;