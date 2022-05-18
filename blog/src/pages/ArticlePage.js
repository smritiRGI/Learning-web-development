import React from 'react';
import {useParams } from 'react-router-dom';
import articles from '../ArticleList';
import './ArticlePage.css';
import Articles from './Articles';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);
  
  return (
      <div className='Article'>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key)=>(
          <>
          <p key={key}>{paragraph}</p>
          </>
      ))}
      <h2>Other Articles:</h2>
      <Articles />
      </div>
  )
}

export default ArticlePage