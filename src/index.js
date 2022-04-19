import React from 'react';
import ReactDOM from 'react-dom';
import './article.css';
import Article from './Article';
import { BrowserRouter } from 'react-router-dom';
// import articleItem from './articleItem';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Article />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);