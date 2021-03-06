import React from 'react';
import ShareLinks from '../../helpers/socialShare';
import './article.scss';


const articlesIcons = ({ article }) => {
  const articleShare = ShareLinks(article, article.slug);
  return (
    <div className="icons">
      <div className="btn-group dropleft">
        <a href="sharing" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-share-alt-square" />
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href={articleShare.facebookShare}>
            <i className="fab fa-facebook-square facebook-icon" />
            Facebook
          </a>
          <a className="dropdown-item" href={articleShare.twitterShare}>
            <i className="fab fa-twitter twitter-icon" />
            Twitter
          </a>
          <a className="dropdown-item" href={articleShare.mailshare}>
            <i className="fas fa-envelope-square envelop-icon" />
            Mail
          </a>
        </div>
      </div>
      &nbsp;
      &nbsp;
      <a href="comment">
        <i className="far fa-comment" />
      </a>
      &nbsp;
      &nbsp;
      <a href="like">
        <i className="far fa-thumbs-up pull float-right" />
      </a>
      &nbsp;
      &nbsp;
      <a href="dislike">
        <i className="far fa-thumbs-down" />
      </a>
      &nbsp;
      &nbsp;
    </div>
  );
};

export default articlesIcons;
