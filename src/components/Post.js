import React, { Component } from 'react';

import {
  Row,
  Col,
  Badge
} from 'reactstrap';

import Parser from 'html-react-parser';

class Post extends Component {

  render() {
    return (
      <article>
        <Row>
          <Col >
            <img src="http://via.placeholder.com/70x70" alt="Post Author"></img>
            <span>{ this.props.author }</span>
          </Col>

          <Col>
            { this.props.categories.map((category, i) => 
            <Badge color="light">{ category }</Badge>  
          )}

          </Col>
          <Col >
            { this.props.date }
        </Col>
        </Row>

        <Row>
          <Col >
            <h2>{this.props.title}</h2>
            { Parser(this.props.excerptHTML) }
            <ul className="list-inline">
              {
                this.props.tags.map((tag, i) =>
                  <li className="list-inline-item"><a href="#tag">#{tag}</a></li>
                )}
            </ul>
            <hr />
          </Col>
        </Row>
      </article>)
  }
}

export default Post;