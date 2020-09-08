import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (

      <div className="container mt-3 p-3 mb-5">
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215994.81300994367!2d-65.14126240747738!3d-32.23334866043842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2df02a2bf55a9%3A0xffef8a34e50754da!2sFundaci%C3%B3n%20Beatriz%20Ramseyer!5e0!3m2!1ses-419!2sar!4v1595967463986!5m2!1ses-419!2sar"
            width="100%" height="300" frameborder="0" style={{ border: "0" }} allowfullscreen="" aria-hidden="false"
            tabindex="0" className=" shadow-container">
          </iframe>

        </div>
      </div>



    )
  }
}

export default Map;