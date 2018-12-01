import * as React from 'react';
import './BlogCard.css';

BlogCard = ({ loadArticle, article }) => {
    return (
      <div onClick={(e) => loadArticle(e)} name={article.id} className="blog-card-container">
        <img className="blog-card--img" src={article.mainImage}/>
        <div className="blog-card--info">
          <div className="blog-card--header">
            {article.associatedProject && <div className="blog-card--header-project">{article.associatedProject}</div>}
            {article.tags.length > 0 &&
              article.tags.map((tag, idx) => {
                return <div key={idx} className="blog-card--header-tag">{tag}</div>
              })
            }
          </div>
          <div className="blog-card--title">{article.title}</div>
        </div>
      </div>
    )
}

export default BlogCard;