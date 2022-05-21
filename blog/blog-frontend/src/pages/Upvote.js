import React, { useEffect } from 'react';
import './Upvote.css';
import axios from '../axios';


  function Upvote({upvotes , name , setUpvote}) {

  const UpvoteArticle = async () => {
     const request = axios.get(`/${name}/upvote`);
     setUpvote((await request).data.upvotes);
  }

  return (
      <div>
      <button id="upvote-button" onClick={UpvoteArticle}>Upvote</button>
      <span id="upvote-text">This post has been upvoted {upvotes} times.</span>
      </div>
  )
}

export default Upvote