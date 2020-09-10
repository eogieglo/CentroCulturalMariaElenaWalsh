import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'

class Presentation extends Component {
  render() {
    return (
      <div>
      
        <div className="container mt-3 shadow-container p-3 mb-4 rounded bg-info" id="nosotros">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mt-4 text-tittles">CENTRO CULTURAL "MARÍA ELENA WALSH"</h2>
              <p className="mt-4 style-footer-link parraphInfo">Nuestro Centro Cultural nace con la misión de convertirse en un referente local en el área de la cultura. Es un espacio de encuentro. Es un "Club" de amigos con un importante interés por la cultura en todas sus formas. Es un espacio de formación personal, de trascendencia, de superación.
                 En el convergen talleres como lo son los de expresión musical, teatro, coro, literatura, pintura, sonido e iluminación, títeres, circo, cerámica y emprendedurismo, entre otros.Completan la propuesta, las capacitacio|nes docentes, el café literario, el museo fotográfico y su sala para cien espectadores en la que se ofrece cine, teatro, música y demás expresiones artísticas.
                 En síntesis, una propuesta cultural en la que niños, jóvenes y adultos pueden experimentar la plenitud, la camaradería y el amor por la cultura.
              </p>
            </div>

            <div className="col-md-4 ">            
    
            <Image src="/images/maria-elena-walsh-foto.jpg" className="shadow" roundedCircle fluid/>
            
            </div>

          </div>
        </div>       
      </div>
    )
  }
}

export default Presentation;
