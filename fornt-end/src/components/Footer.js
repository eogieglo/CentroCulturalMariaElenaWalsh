import React, { Component } from 'react';
import FooterLinks from './FooterLinks'
class Footer extends Component {
    render() {
        return (
            <div className="container bg-footer mt-3 shadow-container p-3 mb-5 rounded">
                <div className="row  justify-content-center ">

                    <div className="col-md-4 col-sm-12 d-flex flex-column mt-4 border-right" >
                        <h3 className="bg-color-item text-tittles">Comunicate</h3>
                        <p className="text-stiles footerI"><span className="mr-2">Direccion : </span> Calle Pública s/n, Complejo Tierra Cristal
                        Cristal, La Paz, Traslasierra, Dpto. de San Javier,
                        Pcia. de Córdoba, República Argentina - CP:5879</p>
                       <p className="text-stiles footerI"><i class="fas fa-envelope-open-text mr-3"></i>equipo@fundacionramseyer.org.ar</p>
                       <p className="text-stiles footerI"><i class="fas fa-sms mr-3"></i>(11)57642207</p>
                        
                    </div>

                    <FooterLinks/>

                    <div className="col-md-3 d-none d-lg-block d-md-block">
                        <img src="/images/logo.png" className="img-fluid" alt="logo"></img>

                    </div>

                </div>
            </div>
        )
    }
}

export default Footer;