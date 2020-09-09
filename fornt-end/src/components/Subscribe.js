import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';





class Subscirbe extends Component {
    render() {
        return (
            <div className="container bg-subscribe mt-3 shadow-container p-3 mb-5 rounded justify-content-center">
                <div className="row justify-content-center">
                  
                    <div className="col-md-6 ">
                    <h3 className="mt-3 mb-4 text-tittles">Suscribite para esta informado</h3>
                        <Form className="mt-4">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="text-stiles">Email </Form.Label>
                                <Form.Control type="email" placeholder="ej: mariotroiano2@gmail.com" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="text-stiles">Tu nombre </Form.Label>
                                <Form.Control type="text" placeholder="ej : Mario" />
                            </Form.Group>

                            <Button className="button link-donar border-0 mt-2"  type="submit">
                                Suscribirme
                            </Button>

                        </Form>
                    </div>

                </div>
            </div>
        )
    }
}

export default Subscirbe;
