import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import NewsArticle from "./components/NewsArticle";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const [term, setTerm] = useState("everything");

  const [limit, setLimit] = useState(5);

  //   const apiKey = "REACT_APP_NEWS_API_KEY";

  useEffect(() => {
    axios
      .get(
        // `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_NEWS_API_KEY}`
        `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <NewsContext.Provider value={{ data }}>
        {props.children}
      </NewsContext.Provider>

      {/* <div>
        <div className="header">
          <h1 className="head__text">News App 👋</h1>
          <button onClick={() => window.location.reload()}>Update news</button>

          <div className="all__news">
            {data
              ? data.articles.map((news, index) => (
                  <NewsArticle data={news} key={news.url} index={index} />
                ))
              : "Loading"}
          </div>
          <button> load more</button>
        </div>
      </div> */}
    </div>
  );
};
