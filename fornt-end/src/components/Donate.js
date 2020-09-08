import React, { Component } from 'react';
import DonarButtons from '../components/DonarButtons'
class Donate extends Component {
    render() {
        return (
          

                <div className="container mt-3 shadow-container p-3 mb-5 rounded color6" id="nosotros">
                    <div className="row">
                        <div className="col-md-7">
                            <h2 className="mt-2">Donar</h2>
                            <h5 className="mt-3">Dios bendice a quien da con alegría. Gracias por ayudarnos a construir otra realidad.</h5>
                            <p className="mt-3">La Fundación tiene Personería Jurídica, es Entidad de Bien Público,
                            es exenta de iva, ganacias e ingresos brutos. Tiene reconocimiento de Afip
                            y emite recibos deducible de impuestos según normas vigentes.ud, la camaradería y
                            el amor por la cultura.
                         </p>
                            <h5>La urgencia :</h5>
                            <p className="mt-3">Los tratamientos de los nenes, los medicamentos, el material didáctico,
                            los alimentos, los servicios, el combustible y mantenimiento del transporte especial,
                            el mantenimiento del edificio, el sostenimiento de la granjita....
                            todo eso afrontamos mes tras mes, y no es poca cosa!
                          </p>

                            <p className="mt-3">Cenas a beneficio, bingos solidarios,
                            feria americana, puestos de venta de comida, sorteos, campañas de socios protectores,
                            etc., etc. es lo que intentamos permanentemente para poder cubrir los gastos mensuales. Así y todo...
                            no alcanza! Nuestra Obra es tan sólo una gota en el mar, pero como decía la Madre Teresa de Calcuta,
                            el mar no sería el mismo si le faltara esa gota.
                            Apoyanos! Sumate! Verdaderamente vale la pena.
                           </p>

                            <h6>¿AHORA TE DAS CUENTA LO IMPORTANTE QUE ES TU PARTICIPACIÓN?</h6>
                        </div>

                       <DonarButtons/>
                        
                    </div>
                </div>
        )
    }
}

export default Donate;
