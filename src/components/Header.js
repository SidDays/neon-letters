import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar color="inverse" light expand="md">
          <Container>
            <NavbarBrand href="/">tindie logo</NavbarBrand>
            <Collapse isOpen="" navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>
                    Browse
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    Forums
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    Support
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button>
                    Search Catalog
                    </Button>
                </NavItem>
                <NavItem>
                  <Button>
                    Start Selling
                    </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Tindie Blog</h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </header>
    )
  }
}

export default Header;