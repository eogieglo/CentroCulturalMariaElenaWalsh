import React, { Component } from 'react';
import HeaderNavbar from './components/Navbar'
import CarouselPage from './components/Carousel'
import Presentation from './components/Presentation'
import EmailForm from './components/EmailForm'
import Map from './components/Map'
import Donate from './components/Donate'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import CardsHome from './components/CardsHome'
import BtnScrollTop from './components/ScrollTop'
import Video from './components/Video'










class Website extends Component {
  render() {
    return (
      <div className="bg-website">
        < HeaderNavbar />
        < CarouselPage />
        < Presentation />
        <Video/>
        < EmailForm />
        < Map />
        <Donate/>
        <Subscribe/>
        <CardsHome/>
        <Footer/>
        <BtnScrollTop/>
        
      </div>
    )
  }
}

export default Website;
