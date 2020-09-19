import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Subscirbe extends Component {
    state = {
        errors: {}
    }

    sendUser = (data) => {
        let send = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch('http://localhost:3030/users', send)
            .then(response => {
                console.log('fetch exitoso')
            })
            .catch(err => {
                console.log('error al enviar info ' + err)
            })
    }

    validate = values => {
        const errors = {}

        if (!values.name) {
            errors.name = 'El campo de nombre es obligatorio'
        }
        if (!values.email) {
            errors.email = 'El campo de email es obligatorio y debe ser un email válido'
        }

        return errors
    }

    //ACA CAPTURO CAMBIOS EN CUALQUIER INPUT Y TARGET ESLO MISMO QUE E.TARGET
    handleChange = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {

        //ACA CREO UN OBJETO LLAMADO NOTERRORS QUE NO CONTIENE LOS ERRORES DEL STATE, SOLO LOS ESTADOS
        const { errors, ...notErrors } = this.state
        // ACA CREO UNA FUNCION DE VALIDACION Y LE PASO EL OBJETO SIN ERRORES (NOTERRORS)
        const result = this.validate(notErrors)
        // OBJECT.KEYS DEVUELVE LAS PROPIEDADES DE U OBJETO

        //SI HAY PROPIEDAD ENTNCES HAY ERRORY EN EL ESTADO ERRORS LE PONGO LOS VALORES DE RESULT
        this.setState({ errors: result })
        if (!Object.keys(result).length) {

            console.log('formulario enviado')
            this.sendUser(notErrors)
            e.target.reset()
            
        } else {
            e.preventDefault()
        }
    }

    render() {
        const errors = this.state.errors

        return (
            <div className="container bg-subscribe mt-4 shadow-container p-3 mb-2 rounded justify-content-center">
                <div className="row justify-content-center">

                    <div className="col-md-6 ">
                        <h3 className="mt-3 mb-4 text-tittles">Suscribite para estar informado</h3>
                        <Form className="mt-4" onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="text-stiles">Email </Form.Label>
                                <Form.Control type="email" placeholder="ej: mariotroiano2@gmail.com" name="email" onChange={this.handleChange} />
                                {errors.email && <Form.Text className="inputError" muted>
                                    {errors.email}
                                </Form.Text>}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="text-stiles">Tu nombre </Form.Label>
                                <Form.Control type="text" placeholder="ej : Mario" name="name" onChange={this.handleChange} />
                                {errors.name && <Form.Text className="inputError" muted>
                                    {errors.name}
                                </Form.Text>}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className="text-stiles">Telefono (opcional) </Form.Label>
                                <Form.Control type="number" max="9999999999" placeholder="ej : 1150235467" name="phone" onChange={this.handleChange} />
                            </Form.Group>

                            <Button className="button link-donar border-0 mt-2" type="submit">
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
