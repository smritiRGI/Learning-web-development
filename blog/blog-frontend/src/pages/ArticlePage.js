import React , {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import articles from '../ArticleList';
import './ArticlePage.css';
import Articles from './Articles';
import axios from '../axios';
import Upvote from './Upvote';
import AddComment from './AddComment';

function ArticlePage() {
  const { name } = useParams();
  const [upvotes,setUpvote] = useState(0);
  const [comments,setComments] = useState([]);
  const article = articles.find(article => article.name === name);

  useEffect(() =>{
   async function fetchArticle() {
     const request = axios.get(`/${name}`);
     setUpvote((await request).data.upvotes);
     setComments((await request).data.comments);
   }

   fetchArticle();
 },[name])
  
  return (
      <div className='Article'>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key)=>(
          <>
          <p key={key}>{paragraph}</p>
          </>
      ))}
      <Upvote upvotes={upvotes} name={name} setUpvote={setUpvote}/>
      <AddComment name={name} comments={comments} setComments={setComments}/>
      <h2>Other Articles:</h2>
      <Articles />
      </div>
  )
}

export default ArticlePage