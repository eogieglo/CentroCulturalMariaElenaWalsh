
import React, { Component } from 'react';

class FooterLinks extends Component {
    render() {
        return (

            <div className="col-md-4 col-sm-12 flex-column  mt-4 footer">
                <h3 className="text-tittles">Nuestras redes</h3>
                <div className="d-flex flex-column align-items-start">
                    <a href="https://www.facebook.com/fundacionramseyer"> <p className="style-footer-link"><i className="fab fa-facebook mr-3"> </i> facebook</p> </a>
                    <a href="https://instagram.com/fundacion_ramseyer?igshid=682f0pgknio7"> <p className="style-footer-link"><i className="fab fa-instagram mr-3"> </i>Instagram </p></a>
                    <a href="https://twitter.com/Fundac_Ramseyer" > <p className="style-footer-link"><i className="fab fa-twitter mr-3"> </i>twitter</p></a>
                    <a href="https://www.youtube.com/channel/UCAQxa29MmXK2fNRftUbGctw/featured"><p className="style-footer-link"><i className="fab fa-youtube mr-3"></i>Youtube</p></a>
                    <p className="style-footer-link footerI"><i className="fas fa-phone-volume mr-3"></i>(3544) 49 67 49</p>
                </div>
            </div>
        )
    }
}

export default FooterLinks;