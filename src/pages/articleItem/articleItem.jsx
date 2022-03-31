import React from "react";
import { articlesData } from "../../articlesData";
import "./articleItem.css";

class ArticleItem extends React.Component {
  render() {
    const params = this.props.match.params;
    return (
      <div className="article-content">
        <p className="article-title">{articlesData[params.index].title}</p>
        <img
          className="article-img"
          src={articlesData[params.index].imageUrl}
          alt="article-img"
        />
        <p className="article-description">
          {articlesData[params.index].description}
        </p>
        <p className="article-expert-comment">
          {articlesData[params.index].expertComment}
        </p>
      </div>
    );
  }
}

export default ArticleItem;
