import React, { Component } from "react";
import "./App.css";

class BorderComponent extends Component {
    render() {
      return (
        <div className='Border'>
        <div className='BorderLeft'></div>
        <div class='BorderHeading'>{this.props.heading}</div>
        <div className='BorderRight'></div>
        </div>
      );
    }
  }
export default BorderComponent;
