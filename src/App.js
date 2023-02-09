import { useEffect, useState } from "react";
import "./App.css";
import NewsNav from "./components/NewsNav";
import NewsContent from "./components/NewsContent/NewsContent";
import axios from 'axios'
import { apiKey } from "./data/config";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20)

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `https://${proxyUrl}newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults)
      


    } catch (error) {
      console.log(error)
    }
  }

  

  useEffect(() => {
    newsApi(); // eslint-disable-next-line
  },[newsResults,category,loadMore])

  return (
    <div>
      <NewsNav setCategory={setCategory} />
      <NewsContent newsArray={newsArray}
        newsResults={newsResults}
        loadmore={loadMore}
        setLoadmore={setLoadMore}
      />
      <Footer/>
    </div>
  );
}

export default App;
