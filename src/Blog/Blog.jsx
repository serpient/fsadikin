import * as React from 'react';
import './Blog.css';
import { articles } from './articles.js';
import ReactMarkdown from "react-markdown/with-html";

class Blog extends React.Component {
  state = {
    sideBarOpen: false,
    selectedArticle: articles.turtlesTab, // default to most recent
  }
  toggleSideBar = (e) => {
    this.setState({ sideBarOpen: !this.state.sideBarOpen })
  }
  loadArticle = (e) => {
    let { name } = e.currentTarget;
    this.setState({ selectedArticle: name })
  }
  render() {
    let { sideBarOpen, selectedArticle: { article } } = this.state;
    return (
      <main className="blog-container">
        <aside 
          className={`blog-sidebar--${sideBarOpen ? 'open' : 'close'}`} 
          onClick={() => this.toggleSideBar()}
        >
        </aside>
        <section className={`blog-reader--${sideBarOpen ? 'open' : 'close'}`}>
          <ReactMarkdown source={article} escapeHtml={false} />
        </section>
      </main>
    )
  }
}

export default Blog;