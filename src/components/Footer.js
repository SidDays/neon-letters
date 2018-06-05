import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Input
} from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col>
              <p>Get our pioneering hardware picks in your inbox with Tindie Fetch.</p>
              <Input />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;