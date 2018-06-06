import React, { Component } from 'react';

import {
  Row,
  Col,
  Badge
} from 'reactstrap';

class Post extends Component {

  render() {
    return (
      <article>
        <Row>
          <Col >
            <img src="http://via.placeholder.com/70x70" alt="Post Author"></img>
            <span>John Doe</span>
          </Col>

          <Col>
            <Badge color="light">
              Tindie
            </Badge>

          </Col>
          <Col >
            July 31, 1995
        </Col>
        </Row>

        <Row>
          <Col >
            <h2>A Two-line long description of the latest hardware product</h2>
            <p>
              Lorem ipsum dolor amet green juice woke wolf, artisan williamsburg fashion axe pork belly chartreuse gluten-free selfies XOXO fam. Readymade palo santo af before they sold out kickstarter intelligentsia mustache cronut flannel tattooed leggings.</p>
            <p>
              Authentic viral church-key occupy lo-fi migas master cleanse enamel pin keytar copper mug pickled tacos activated charcoal. Activated charcoal bitters flannel, man bun enamel pin marfa meditation disrupt aesthetic banjo viral kitsch.</p>
            <p>
              Vinyl four loko lomo heirloom portland selfies retro crucifix. Farm-to-table portland poke tacos hella. Coloring book selvage put a bird on it franzen wolf actually.</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#tag">#firsttag</a></li>
              <li className="list-inline-item"><a href="#tag">#secondtag</a></li>
              <li className="list-inline-item"><a href="#tag">#thirdtag</a></li>
            </ul>
            <hr />
          </Col>
        </Row>
      </article>)
  }
}

export default Post;