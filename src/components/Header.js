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
  Button,
  Form,
  FormGroup,
  Label,
  Input,

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

        <Container>
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input type="select" name="select" id="exampleSelect" defaultValue="default">
                <option value="default" disabled>Explore by category</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <a href="#">Most Popular</a>
              <a href="#">Recent</a>
              </FormGroup>
 
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input placeholder="Search the blog..." />
            </FormGroup>
            <Button>Search</Button>
          </Form>
        </Container>
      </header>
    )
  }
}

export default Header;