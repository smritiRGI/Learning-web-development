import React from 'react';
import articles from '../ArticleList';
import './Articles.css';
import {Link} from 'react-router-dom';

function Articles() {
  return (
    <>
    {articles.map((article) => (
       <div className='Articles'>
       <Link to={`/articles/${article.name}`}>{article.name}</Link>
       <h3>{article.title}</h3>
       <p>{article.content[0].substring(0,200)}...</p>
       </div>
    ))}
    </>
  )
}

export default Articles;