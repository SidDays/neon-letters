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
      <Container>
        PostsOverview PAGE WITH POSTS


        { this.getPosts() }

      </Container>)
  }
}

export default PostsOverview;