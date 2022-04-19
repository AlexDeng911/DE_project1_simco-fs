import React from 'react';
import sampleArticles from '../../sample-articles';
import './articleItem.css';

class ArticleItem extends React.Component {
	render() {
		const params = this.props.match.params;
		return (
			<div className="article-content">
				<p className="article-title">{sampleArticles[params.index].title}</p>
				<img
					className="article-img"
					src={sampleArticles[params.index].imageUrl}
					alt="article-img"
				/>
				<p className="article-description">
					{sampleArticles[params.index].description}
				</p>
				<p className="article-expert-comment">
					{sampleArticles[params.index].expertComment}
				</p>
			</div>
		);
	}
}

export default ArticleItem;
