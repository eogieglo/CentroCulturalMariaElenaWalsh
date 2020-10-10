import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


class HeaderNavbar extends Component {
  render() {
    return (

      <div className="container-fluid bg-color-nav shadow-lg p-3 sticky-top ">
        <div className="row justify-content-between">
          <div className="col-lg-1 col-md-2 d-none d-lg-block d-md-block">
            <img src="/images/logo.png" className="img-fluid" alt="logo"></img>

          </div>

          <div className="col-md-8">
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/" >Todo</Nav.Link>
                  <Nav.Link href="/presentation" >Nosotros</Nav.Link>
                  <Nav.Link href="/participates">Involucrate</Nav.Link>
                  <Nav.Link href="/email">Tú consulta</Nav.Link>
                  <Nav.Link href="/subscribe">Suscribite</Nav.Link>
                  <Nav.Link href="/social">Redes sociales</Nav.Link>
                  <Nav.Link href="https://www.facebook.com/centroculturalmew/?ref=page_internal">Novedades</Nav.Link>

                  {/* <NavDropdown title="Talleres" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Teatro</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Música</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Dibujo</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Pintura</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Ceramica</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Reciclado</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Ajedrez</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Repostería</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Literatura</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Tango</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Salsa</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Canto</NavDropdown.Item>
                  </NavDropdown>
                   */}
                  {/* <Nav.Link href="/admin" ><i className="fas fa-cog"></i></Nav.Link> */}

                  <Nav.Link href="/donate" className="btn link-donar ml-4 button"><span>DONAR</span></Nav.Link>
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
