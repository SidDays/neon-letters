import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Input,
  Button
} from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col>
              <p>Get our pioneering hardware picks in your inbox with Tindie Fetch.</p>
              <Input type="email" />
              <Button>Subscribe</Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <ul className="list-unstyled">
                <li><h4>Company</h4></li>
                <li>About Tindie</li>
                <li>Tindie Blog</li>
                <li>Our Terms</li>
              </ul>
            </Col>
            <Col>
              <ul className="list-unstyled">
                <li><h4>Discover</h4></li>
                <li>Newest Products</li>
                <li>Popular Products</li>
                <li>On Sale</li>
              </ul>
            </Col>
            <Col>
              <ul className="list-unstyled">
                <li><h4>Buying & Selling</h4></li>
                <li>Buy on Tindie</li>
                <li>Sell on Tindie</li>
                <li>Tindie Guarantee</li>
              </ul>
            </Col>
            <Col>
              <ul className="list-unstyled">
                <li><h4>Help</h4></li>
                <li>FAQs</li>
                <li>Contact Tindie</li>
                <li>Community Forums</li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col >
              &copy; 2018 Tindie, Inc. Privacy Policy
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;