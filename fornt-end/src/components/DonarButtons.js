import React, { Component } from 'react';

class DonarButtons extends Component {
    render() {
        return (

            <div className="col-12 col-lg-5 d-flex mx-auto justify-content-center">
                <div className="col-12 __botones-donar row container mx-auto my-auto justify-content-center">
                    <a href="https://www.fundacionramseyer.org.ar/donar/transferencia" target="_blank" rel = "noopener noreferrer" type="submit" className=" d-flex  text-wrap btn  col-12 col-md-5 col-lg-10 mx-2 mt-3 mb-4 ml-2 my-lg-5 mx-lg-auto buttons-donate button">
                        <div className="row d-flex mx-auto py-0 my-0">
                            <div className="col-12 col-lg-3 m-auto p-0 py-lg-2">
                                <i className="fa fa-university m-auto fa-x2 py-0" aria-hidden="true"></i>
                            </div>
                            <div className="col-lg-9 d-flex justify-content-center mx-auto row p-0 py-lg-2">
                                <span className="col-12 d-block m-auto text-wrap p-0">Transferencia</span> <span className="col-12 d-block m-auto text-wrap p-0">Bancaria</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://donaronline.org/fundacion-beatriz-ramseyer-argentina/el-arte-salva" target="_blank" rel = "noopener noreferrer" type="button" className=" d-flex text-wrap btn col-12 col-md-5 col-lg-10 mx-2 mt-3 mb-4 ml-2 my-lg-5 mx-lg-auto buttons-donate button">
                        <div className="row d-flex mx-auto py-0 my-0">
                            <div className="col-12 col-lg-3 m-auto p-0 py-lg-2">
                               
                                 <i className="far fa-handshake m-auto ml-lg-2 fa-x2 py-0" aria-hidden="true" ></i>

                            </div>
                            <div className="col-lg-9 d-flex justify-content-center mx-auto row p-0 py-lg-2">
                                <span className="col-12 d-block m-auto text-wrap p-0">Donar con</span> <span className="col-12 d-block m-auto text-wrap p-0">MercadoPago</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>


        )
    }
}

export default DonarButtons;








