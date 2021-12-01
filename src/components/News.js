import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import { Button } from "@material-ui/core";

function News(props) {
  const { data } = useContext(NewsContext);
  const [load, setLoad] = React.useState(5);
  console.log(data);

  const loadMore = () => {
    setLoad((prevValue) => prevValue + 5);
  };

  React.useEffect(() => {
    setInterval(() => {
      window.location.reload();
    }, 100000);
  }, []);

  return (
    <div className="container">
      <div className="text">
        <h1 className="head__text">News App </h1>
        <Button
          className="btn"
          onClick={() => window.location.reload()}
          variant="contained"
          color="primary"
        >
          Update news
        </Button>

        {/* <input>search</input> */}
      </div>

      <div className="all__news">
        {data
          ? data.articles
              .slice(0, load)
              .map((news, index) => (
                <NewsArticle data={news} key={news.url} index={index} />
              ))
          : "Loading"}
      </div>
      <div className="load">
        <Button
          onClick={() => loadMore()}
          className="btn"
          variant="contained"
          color="primary"
        >
          {" "}
          load more
        </Button>
      </div>
    </div>
  );
}

export default News;
