import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class HeaderNavbar extends Component {
  render() {
    return (
      <div className="container-fluid color1 shadow-lg p-3 sticky-top bg-nav-sticky">
        <div className="row justify-content-between">
          <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-block">
            <img src="/images/logo.jpg" className="img-fluid" alt="logo"></img>

          </div>

          <div className="col-md-6">
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                  <Nav.Link href="#a">Acciones Concretas</Nav.Link>
                  <Nav.Link href="#b">Involucrate</Nav.Link>
                  <Nav.Link href="#c">Contacto</Nav.Link>
                  <Nav.Link href="#d" className="btn link-donar ml-4 button"><span>DONAR</span></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          
        </div>
      </div>
    )
  }
}

export default HeaderNavbar;
