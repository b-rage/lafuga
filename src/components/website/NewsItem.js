import React from "react";

const NewsItem = ({ newsTitle, newsUrl, newsDate, newsFileUrl }) => {
  return (
    <>
      {newsDate}
      <br></br>
      {newsTitle}
      <br />
      {newsUrl && (
        <a className="link" href={newsUrl} target="_blank">
          {newsUrl}
        </a>
      )}
      <br />
      {newsFileUrl && (
        <a className="link" href={newsFileUrl} target="_blank">
          {newsFileUrl}
        </a>
      )}
      <br></br>
    </>
  );
};

export default NewsItem;
