import React, { Component } from 'react';
import HeaderNavbar from './components/Navbar'
import CarouselPage from './components/Carousel'
import Presentation from './components/Presentation'
import EmailForm from './components/EmailForm'
import Map from './components/Map'
import Donate from './components/Donate'





class Website extends Component {
  render() {
    return (
      <div className="bg-website">
        < HeaderNavbar />
        < CarouselPage />
        < Presentation />
        < EmailForm />
        < Map />
        <Donate/>
        
        

      </div>
    )
  }
}

export default Website;
