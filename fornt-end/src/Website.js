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
// import AdminForm from './components/admin/formAdmin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";








class Website extends Component {
  render() {
    return (
      <Router>
        <div className="bg-website">
          < HeaderNavbar />
        </div>


        <Switch>
          <Route path="/" exact>
            < CarouselPage />
            < Presentation />
            <Video />
            < EmailForm />
            < Map />
            <Donate />
            <Subscribe />
            <CardsHome />
            <Footer />
            <BtnScrollTop />
          </Route>

          <Route path="/presentation" exact>
            < Presentation />
          </Route>

          <Route path="/participates" exact>
            <CardsHome />
          </Route>

          <Route path="/email" exact>
            < EmailForm />
          </Route>

          <Route path="/subscribe" exact>
            <Subscribe />
          </Route>

          <Route path="/donate" exact>
            <Donate />
          </Route>

          <Route path="/social" exact>
            <Footer />
          </Route>

          {/* <Route path="/admin" exact>
            <AdminForm />
          </Route> */}

        </Switch>
      </Router>
    )
  }
}
export default Website;
