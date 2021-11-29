import React from "react";
import { Link } from "react-router-dom";

function NewsArticle({ data, title, index }) {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="news _container">
      <div>
        <h3 className="news__title">
          {index + 1}. {data.title}
        </h3>
      </div>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">Author: {data.author}</span> <br />
      <span className="news__source">{data.source.name}</span> <br />
      <span className="news__published">Date: {data.publishedAt}</span> <br />
      <span className="news__published">
        <a style={{ listStyle: "none" }} href={data.url}>
          more info
        </a>{" "}
      </span>
    </div>
  );
}

export default NewsArticle;
