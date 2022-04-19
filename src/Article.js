import { Route } from "react-router";
import Header from "./components/header/header";
import ArticlesList from "./pages/articlesList/articlesList";
import ArticleItem from './pages/articleItem/articleItem';
import { articlesData } from "./articlesData";

const Article = () => {
  return (
    <div>
      <Header />
      <Route exact path='/'><ArticlesList articlesData={articlesData} /></Route>
      <Route exact path='/articlesList/:index' component={ArticleItem} />
    </div>
  );
}

export default Article;
