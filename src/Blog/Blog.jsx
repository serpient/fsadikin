import * as React from 'react';
import './Blog.css';

class Blog extends React.Component {
  state = {
    sideBarOpen: false,
    selectedArticle: {}, // default to most recent
  }
  toggleSideBar = (e) => {
    this.setState({ sideBarOpen: !this.state.sideBarOpen })
  }
  render() {
    let { sideBarOpen } = this.state;
    return (
      <main className="blog-container">
        <aside 
          className={`blog-sidebar--${sideBarOpen ? 'open' : 'close'}`} 
          onClick={() => this.toggleSideBar()}
        >
        </aside>
        <section className={`blog-reader--${sideBarOpen ? 'open' : 'close'}`}>
        </section>
      </main>
    )
  }
}

export default Blog;