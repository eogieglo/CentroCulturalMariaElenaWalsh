import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


class EmailForm extends Component {
  state = {
    errors: {}
  }




  sendEmail = (data) => {
    let send = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:3030/users/email', send)
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
    if (!values.ref) {
      errors.ref = 'El mensaje debe tener asunto'
    }
    if (!values.message) {
      errors.message = 'Debe escribir un mensaje'
    }
    return errors
  }

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
      this.sendEmail(notErrors)
      e.target.reset()

    } else {
      e.preventDefault()
    }
  }


  render() {
    const errors = this.state.errors
    return (


      <div className="container background-container mt-3 shadow-container p-3 mb-2 rounded" id="contact">
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-5">
              <Form.Group controlId="name">
                <Form.Label className="text-stiles">Nombre</Form.Label>
                <Form.Control type="text" placeholder="Tu nombre" name="name" onChange={this.handleChange} />
                {errors.name && <Form.Text className="inputError" muted>
                  {errors.name}
                </Form.Text>}
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label className="text-stiles">Email </Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" name="email" onChange={this.handleChange} />
                {errors.email && <Form.Text className="inputError" muted>
                  {errors.email}
                </Form.Text>}
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label className="text-stiles">Asunto</Form.Label>
                <Form.Control type="text" placeholder="Asunto del mensaje" name="ref" onChange={this.handleChange} />
                {errors.ref && <Form.Text className="inputError" muted>
                  {errors.ref}
                </Form.Text>}
              </Form.Group>
            </div>


            <Form.Group controlId="exampleForm.ControlTextarea1" className="col-md-7">
              <Form.Label className="text-stiles">Mensaje :</Form.Label>
              <Form.Control as="textarea" rows="3" name="message" onChange={this.handleChange} />
              {errors.message && <Form.Text className="inputError" muted>
                {errors.message}
              </Form.Text>}

              <Button className="button link-donar border-0 mt-2" type="submit">
                               Enviar
              </Button>

              <p className=" text-tittles">"Envianos tu consulta ..."</p>

            </Form.Group>

          </div>
        </Form>
      </div>

    )
  }
}

export default EmailForm;
