import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

import Post from './Post';

class PostsOverview extends Component {
  
  render() {
    return (
      <Container>
        <hr />

        <Post />
        <Post />
        <Post />

      </Container>
      );
  }
}

export default PostsOverview;