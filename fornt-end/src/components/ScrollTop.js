import React, { Component } from 'react';
import ScrollTop from "react-scrolltop-button"

class BtnScrollTop extends Component {
  render() {
    return (

        <ScrollTop
        text="TOP"
        distance={100}
        breakpoint={768}
        style={{ backgroundColor: "pink", borderColor : "white"}}
        className="scroll-your-role button"
        speed={1000}
        target={75}
       
        />
      
    )
  }
}

export default BtnScrollTop;
