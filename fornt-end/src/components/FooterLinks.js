
import React, { Component } from 'react';

class FooterLinks extends Component {
    render() {
        return (

            <div className="col-md-4 col-sm-12 flex-column  mt-4 footer">
                <h3 className="text-tittles">Nuestras redes</h3>
                <div className="d-flex flex-column align-items-start">
                    <a href="https://www.facebook.com/fundacionramseyer"> <p className=" text-stiles"><i className="fab fa-facebook"> </i> facebook</p> </a>
                    <a href="https://instagram.com/fundacion_ramseyer?igshid=682f0pgknio7"> <p className="text-stiles"><i className="fab fa-instagram text-stiles"> </i>Instagram </p></a>
                    <a href="https://twitter.com/Fundac_Ramseyer" > <p className="text-stiles"><i className="fab fa-twitter text-stiles"> </i>twitter</p></a>
                    <a href="https://www.youtube.com/channel/UCAQxa29MmXK2fNRftUbGctw/featured"><p className="text-stiles"><i class="fab fa-youtube text-stiles"></i>Youtube</p></a>
                    <p className="text-stiles footerI"><i class="fas fa-phone-volume mr-3"></i>(3544) 49 67 49</p>
                </div>
            </div>
        )
    }
}

export default FooterLinks;