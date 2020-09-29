import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class HeaderNavbar extends Component {
  render() {
    return (
      <div className="container-fluid bg-color-nav shadow-lg p-3 sticky-top ">
        <div className="row justify-content-between">
          <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-block">
            <img src="/images/logo.png" className="img-fluid" alt="logo"></img>

          </div>

          <div className="col-md-6">
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#nosotros" >Nosotros</Nav.Link>
                 
                  <Nav.Link href="#involucrate">Involucrate</Nav.Link>
                  <Nav.Link href="#contact">Tú consulta</Nav.Link>
                  <Nav.Link href="#social">Redes sociales</Nav.Link>

                  <Nav.Link href="https://donaronline.org/fundacion-beatriz-ramseyer-argentina/el-arte-salva" className="btn link-donar ml-4 button"><span>DONAR</span></Nav.Link>
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
