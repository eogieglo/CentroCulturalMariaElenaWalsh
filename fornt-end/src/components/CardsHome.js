
import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

class CardsHome extends Component {
    render() {
        return (
            <div className="container mt-4 shadow-container p-3 mb-3 rounded bg-cards" id="involucrate">

                <div className="row">


                    <CardDeck className="p-2">
                        <Card className="shadow">
                            <Card.Img variant="top" src="/images/voluntario.jpeg" className="img-fluid" />
                            <Card.Body>
                                <Card.Title className="text-tittles subtitles">Voluntariado</Card.Title>
                                <Card.Text className="style-footer-link parraphInfo">
                                    Ser voluntariado es una de las experiencias más satisfactorias que puedas realizar. Comprometerte activamente con la persona en situación de vulnerabilidad y hacia la sociedad en general. En nuestra Fundación las puertas están abiertas para que experimentes la alegría de dar en las diferentes áreas, puede ser forma virtual o presencial. Anímate! .
                                 </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="shadow">
                            <Card.Img variant="top" src="/images/pasantias.jpeg" className="img-fluid" />
                            <Card.Body>
                                <Card.Title className="text-tittles subtitles">Pasantias</Card.Title>
                                <Card.Text className="style-footer-link parraphInfo">
                                    Más de 20 años de comunión con el servicio y la consecuente experiencia en discapacidad, derechos vulnerados y desarrollo social, nos permiten ofrecerte el marco adecuado para que puedas realizar tus pasantías en nuestra institución. Indicale al sector de pasantías de tu escuela, instituto o universidad, que se contacten con nosotros para la gestión..{' '}
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="shadow">
                            <Card.Img variant="top" src="/images/padrinazgo.jpeg" className="img-fluid" />
                            <Card.Body>
                                <Card.Title className="text-tittles subtitles">Padrinazgo</Card.Title>
                                <Card.Text className="style-footer-link parraphInfo">
                                    Ser padrino de nuestra Obra significa constituirte en dador de alegrías. Podés ser: y ayudarnos a pagar el servicio eléctrico de nuestra escuelita. y ayudarnos con los alimentos. y ayudarnos con los medicamentos o con los tratamientos. y ayudarnos con el combustible y mantenimiento de nuestra vieja camioneta.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardDeck>



                </div>
            </div>

        )
    }
}

export default CardsHome;







