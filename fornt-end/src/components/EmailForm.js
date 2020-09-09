import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


class EmailForm extends Component {
  render() {
    return (
      
       

        <div className="container background-container mt-3 shadow-container p-3 mb-5 rounded">
          <Form>
            <div className="row">
              <div className="col-md-5">
                <Form.Group controlId="name">
                  <Form.Label className="text-stiles">Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Tu nombre" />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label className="text-stiles">Email </Form.Label>
                  <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label className="text-stiles">Asunto</Form.Label>
                  <Form.Control type="text" placeholder="Asunto del mensaje" />
                </Form.Group>
              </div>


              <Form.Group controlId="exampleForm.ControlTextarea1" className="col-md-7">
                <Form.Label className="text-stiles">Mensaje :</Form.Label>
                <Form.Control as="textarea" rows="3" />
              <div  className="d-flex justify-content-end mt-4 " >
              <Nav.Link href="#d" className="btn link-donar ml-4 button"><span>ENVIAR</span></Nav.Link>
             
              </div>
             <p className=" text-tittles">"Envianos tu consulta ..."</p>

              </Form.Group>

            </div>
          </Form>
        </div>
   
    )
  }
}

export default EmailForm;
