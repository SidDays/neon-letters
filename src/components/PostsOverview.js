import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class PostsOverview extends Component {
  
  getPosts() {
    return (
      <div>
        <article>
        This is a post
        </article>
        <article>
        This is a post
        </article>
        <article>
        This is a post
        </article>
      </div>
    );
  }
  
  render() {
    return (
      <main>
        PostsOverview PAGE WITH POSTS


        { this.getPosts() }

      </main>)
  }
}

export default PostsOverview;