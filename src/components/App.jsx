import { useEffect, useState } from 'react'
import s from "./App.module.css"
import axios from 'axios';
import ArticleList from './ArticleList/ArticleList';


function App() {
 
const [articles, setArticles] = useState([]);

useEffect(() => {
async function fetchArticles() {
  // Тут виконуємо HTTP-запит
  const response = await axios.get(
    "https://hn.algolia.com/api/v1/search?query=react"
  );
  // 2. Записуємо дані HTTP-запитy в стан
  setArticles(response.data.hits);
}
fetchArticles();
}, []);

  return (
    <>
    
      <div className={s.container}>
      <h1>Latest articles</h1>
      {articles.length > 0 &&
        <ArticleList items={articles} />
      }
      </div>

    </>
  );
};

export default App
