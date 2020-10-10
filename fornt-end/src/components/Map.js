import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (

      <div className="container mt-2 p-3 mb-2">
        <div className="row">        

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1980340.2730114544!2d-65.67291388214345!3d-36.53402253979848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1602267068993!5m2!1ses!2sar"
            width="100%" height="400"  style={{ border: "0" }} 
           aria-hidden="false"  title="map"></iframe>

        </div>
      </div>



    )
  }
}

export default Map;