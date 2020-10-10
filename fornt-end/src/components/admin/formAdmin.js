import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom'



class EmailForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      errors: {},
     

    }
  }
  

  validate = values => {
    const errors = {}

    if (values.password !== 'Admin2020') {
      errors.password = 'El campo de contraseña es obligatorio'
    }
   
    if (values.email !== 'admin@gmail.com') {
      errors.email = 'El campo de email es obligatorio, debe ser un email válido y autorizado'
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
      e.target.reset();     
      

    } else {
      e.preventDefault()
    }
  }


  render() {
    const errors = this.state.errors
    
    return (


      <div className="container bg-admin mt-3 shadow-container p-3 mb-2 rounded" id="contact">
      <div className="row justify-content-start">
      <p className=" text-tittles mb-5 pl-3">"SOLO PARA ADMINITRACIÓN"</p>
      </div>
      
      
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-5">
             

              <Form.Group controlId="email">
                <Form.Label className="text-stiles">Email </Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" name="email" onChange={this.handleChange} />
                {errors.email && <Form.Text className="inputError" muted>
                  {errors.email}
                </Form.Text>}
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label className="text-stiles">Contraseña</Form.Label>
                <Form.Control type="password"  name="password" onChange={this.handleChange} />
                {errors.password && <Form.Text className="inputError" muted>
                  {errors.password}
                </Form.Text>}
              </Form.Group>
            </div>


          <div className="col-md-8">
          <Button className="button link-donar border-0 mt-2" type="submit">  Enviar  </Button>                      
             
          </div> 
           
          </div>
        </Form>
      </div>

    )
  }
}

export default EmailForm;