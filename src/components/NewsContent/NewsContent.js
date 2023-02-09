import React from "react";
import Container from "@mui/material/Container";
import "./NewsContent.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsArray, newsResults, setLoadMore, loadMore }) => {
  return (
    <div>
      <Container maxWidth="md" max-height="50vh">
        <div className="content">
          <div className="downloadMessage">
            <span className="downloadText">
              For the best experience use inshorts app on your smartphone
            </span>
            <img
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
              height="85%"
              alt="appstore logo"
            />
            <img
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
              height="85%"
              alt="playstore logo"
            />
          </div>
          {newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.title} />
          ))}
          {loadMore <= newsResults && (
            <>
              <hr />
              <button
                className="loadmore"
                onClick={() => setLoadMore(loadMore + 20)}
              >
                Load More
              </button>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NewsContent;
