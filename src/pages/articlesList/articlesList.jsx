import React from 'react';
import { NavLink } from 'react-router-dom';
import './articlesList.css';

const ArticleList = (props) => {
	return (
		<div className="article-wrapper">
			{props.sampleArticles.map((article, key) => {
				return (
					<NavLink className="article" to={`/articlesList/` + key}>
						<div key={key}>
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
