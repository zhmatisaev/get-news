import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import NewsArticle from "./components/NewsArticle";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const [limit, setLimit] = useState(5);

  const apiKey = "a1d2746119ee472695874c27c7c80a59";

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`)
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
