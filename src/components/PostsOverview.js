import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

import axios from 'axios';

import Post from './Post';

class PostsOverview extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    // TODO: Call Posts API
    axios.get("https://api.myjson.com/bins/1brq16")
      .then(res => {
        const result = res.data;
        // console.log(result);
        const posts = [];
        result.forEach(element => {
          console.log(element);
          posts.push(element);
        });

        this.setState({ posts });
      });
  }

  handleReadMore() {

    axios.get(`https://api.myjson.com/bins/1brq16`)
      .then(res => {
        const result = res.data;
        // console.log(result);
        const posts = this.state.posts.slice();

        result.forEach(element => {
          console.log(element);
          posts.push(element);
        });

        this.setState({ posts });
      });
  }

  render() {
    return (
      <Container>
        <hr />

        <Row>
          <Col >
            {
              this.state.posts.map((post, i) =>
                <Post
                  author={post.author}
                  date={post.date}
                  title={post.title.rendered}
                  contentHTML={post.content.rendered}
                  excerptHTML={post.excerpt.rendered}
                  categories={post.categories}
                  tags={post.tags}
                />)
            }

            <Button onClick={ () => this.handleReadMore() }>Read More</Button>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default PostsOverview;