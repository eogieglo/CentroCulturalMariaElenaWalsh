import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';



class CarouselPage extends Component {
  render() {
    return (
     
       
        <div className="container-fluid shadow mb-5 bg-white rounded">
          <div className="row">
            <Carousel autoPlay={true} interval={2000}>  
     
              <Carousel.Item>
                
                <img
                  className="d-block w-100"
                  src="/images/carrusel5.jpg"
                  alt="First slide"
                
                  

                />
                <Carousel.Caption>
                  <h3 className="text-carousel">Centro cultural Maria Elena Walsh</h3>
                  <p className="text-carousel fsize-carousel ">Una iniciativa dela fundación Beatriz Ramseyer</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/carrusel4.jpg"
                  alt="Third slide"
                
                />

                <Carousel.Caption>
                  <h3 className="text-carousel">Centro cultural Maria Elena Walsh</h3>
                  <p className="text-carousel fsize-carousel">Una iniciativa dela fundación Beatriz Ramseyer</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/carrusel7.jpg"
                  alt="Third slide"
                  
                />

                <Carousel.Caption>
                  <h3 className="text-carousel">Centro cultural Maria Elena Walsh</h3>
                  <p className="text-carousel fsize-carousel">Una iniciativa dela fundación Beatriz Ramseyer</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>


     
    )
  }
}

export default CarouselPage;