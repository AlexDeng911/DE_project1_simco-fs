import React from "react";
import { NavLink } from "react-router-dom";
import "./articlesList.css";

const ArticleList = (props) => {
  return (
    <div className="article-wrapper">
      {props.articlesData.map((article, index) => {
        return (
          <NavLink className="article" to={`/articlesList/` + index}>
            <div key={index}>
              <img
                src={article.imageUrl}
                className="article-image"
                alt="article_image"
              />
              <p className="articles-title">{article.title}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default ArticleList;
