import React from 'react'
import { Route } from "react-router";
import Header from "./components/header/header";
import ArticlesList from "./pages/articlesList/articlesList";
import ArticleItem from './pages/articleItem/articleItem';
import sampleArticles from "./sample-articles";
// import base from './articlesData';
// import { render } from "@testing-library/react";

class Article extends React.Component {
  state = {
    articles: {},
  }

  componentDidMount() {
    const params = this.props.Article
    console.log({ params })
  }

  loadSampleArticles = () => {
    this.setState({ articles: sampleArticles })
  }



  render() {
    return (
      <div >
        <Header />
        <Route exact path='/'><ArticlesList sampleArticles={sampleArticles} /></Route>
        <Route exact path='/articlesList/:index' component={ArticleItem} />
      </div>
    )
  };
}

export default Article;
